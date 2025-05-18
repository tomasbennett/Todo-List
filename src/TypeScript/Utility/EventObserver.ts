import { IPageStateManager, PageState } from "./PageState";


export interface ICommand<T = void> {
    execute(): T;
}


export class ClickEventObserver {
    private commands: ICommand[];

    private triggerObserver: () => void;

    constructor(private htmlElem: HTMLElement, private eventType: keyof HTMLElementEventMap) {
        this.commands = [];

        this.triggerObserver = () => { this.triggerEvent(); }

        this.htmlElem.addEventListener(this.eventType, this.triggerObserver);
    }

    setEvent(command: ICommand): void {
        this.commands.push(command);
    }

    triggerEvent(): void {
        if (this.commands.length > 0) {
            this.commands.forEach(command => command.execute());
        }
    }

    removeEventListeners(): void {
        this.htmlElem.removeEventListener(this.eventType, this.triggerObserver);
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



export class ExitPageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.exit();
    }
}







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