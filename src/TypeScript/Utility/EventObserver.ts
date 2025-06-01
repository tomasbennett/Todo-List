import { IPageStateManager, PageState } from "./PageState";


export interface ICommand<T = void, K extends keyof HTMLElementEventMap = "click"> {
    execute(e: HTMLElementEventMap[K]): T;
}


export class ClickEventObserver<T = void, K extends keyof HTMLElementEventMap = "click"> {
    private commands: ICommand<T, K>[];

    private triggerObserver: (e: HTMLElementEventMap[K]) => void;

    constructor(private htmlElem: HTMLElement, private eventType: K) {
        this.commands = [];

        this.triggerObserver = (e: HTMLElementEventMap[K]) => { this.triggerEvent(e); }
    }

    setEvent(command: ICommand<T, K>): void {
        this.commands.push(command);
    }

    triggerEvent(e: HTMLElementEventMap[K]): void {
        if (this.commands.length > 0) {
            this.commands.forEach(command => command.execute(e));
        }
    }

    addEventListeners(): void {
        this.htmlElem.addEventListener(this.eventType, this.triggerObserver);
    }

    removeEventListeners(): void {
        this.htmlElem.removeEventListener(this.eventType, this.triggerObserver);
    }

}






export class ExitPageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.exit();
    }
}



// export class EventTracker {
//     private eventList: ICommand[];

//     constructor() {
//         this.eventList = [];
//     }

//     addEvent(command: ICommand): void {
//         this.eventList.push(command);
//         command.execute();
//     }

//     undoEvent(): void {
//         const eventListLength: number = this.eventList.length;
        
//         let finalCommands: ICommand[];
//         let finalPage: ICommand;
//         let exitCommand: ICommand;

//         if (eventListLength <= 1) {
//             console.log("No more undoing these commands please!!!");
//             return;
//         } else if (eventListLength == 3) {
//             finalCommands = this.eventList.splice(-2);
//             finalPage = this.eventList[0];
//             exitCommand = finalCommands[0];
//         } else {
//             finalCommands = this.eventList.splice(-3);
//             finalPage = finalCommands[0];
//             exitCommand = finalCommands[1];
//         }
        
//         exitCommand.execute();
//         finalPage.execute();
//     }
// }


// export class StartPageCommand implements ICommand {
//     private stateManager: IPageStateManager;

//     constructor(stateManager: IPageStateManager) {
//         this.stateManager = stateManager;
//     }

//     execute(): void {
//         this.stateManager.setState(new StartPage(this.stateManager));
//         this.stateManager.load();
//     }
// }