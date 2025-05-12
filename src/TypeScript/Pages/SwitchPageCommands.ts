import { IPageStateManager } from "../Utility/PageState";
import { ICommand } from "../Utility/EventObserver";

import { CalendarPage } from "../Pages/CalendarPage";
import { HomePage } from "../Pages/HomePage";
import { UpcomingPage } from "../Pages/UpcomingPage";


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