import { IPageStateManager } from "../Utility/PageState";
import { ICommand } from "../Utility/EventObserver";

import { TasksPage } from "./DialogTaskPage";
import { NotePage } from "./DialogNotePage";
import { ProjectsPage } from "./DialogProjectsPage";


export class TaskPageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.setState(new TasksPage(this.stateManager));
        this.stateManager.load();
    }
}


export class NotePageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.setState(new NotePage(this.stateManager));
        this.stateManager.load();
    }
}



export class ProjectsPageCommand implements ICommand {
    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    execute(): void {
        this.stateManager.setState(new ProjectsPage(this.stateManager));
        this.stateManager.load();
    }
}