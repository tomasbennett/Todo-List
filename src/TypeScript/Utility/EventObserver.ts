import { CalendarPage } from "../Pages/CalendarPage";
import { HomePage } from "../Pages/HomePage";
import { UpcomingPage } from "../Pages/UpcomingPage";
import { IPageStateManager, PageState } from "./PageState";
import { ScreenFactory, ScreenTemplate } from "./Screens";




export interface ICommand {
    execute(): void;
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





export class ClickEventObserver {
    private commands: ICommand[];

    constructor() {
        this.commands = [];
    }

    setEvent(command: ICommand): void {
        this.commands.push(command);
    }

    triggerEvent(): void {
        if (this.commands.length > 0) {
            this.commands.forEach(command => command.execute());
        }
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


export class HomePageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.setState(new HomePage(this.stateManager));
        this.stateManager.load();
    }
}




export class UpcomingPageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.setState(new UpcomingPage(this.stateManager));
        this.stateManager.load();
    }
}




export class CalendarPageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.setState(new CalendarPage(this.stateManager));
        this.stateManager.load();
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