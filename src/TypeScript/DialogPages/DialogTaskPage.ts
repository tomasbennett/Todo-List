import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { NotePageCommand, TaskPageCommand, ProjectsPageCommand } from "./SwitchDialogPageCommands";


import { IComponent, IComponentRemovable, IComponentEventListener, IComponentInteractive } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { TasksLocalStorage } from "../LocalStorage/LocalStorage";


export class TasksScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new TasksScreen(this.stateManager);
    }
}

class TasksScreen extends ScreenTemplate {
    private taskForm: IComponentInteractive;

    private notePageButton: IComponentEventListener;
    private projectsPageButton: IComponentEventListener;

    constructor(stateManager: IPageStateManager) {
        super(stateManager);

        this.taskForm = new TaskFormComponent();

        this.notePageButton = new NotePageComponent();
        this.projectsPageButton = new ProjectsPageComponent();


        this.components = [this.taskForm];
        this.componentsRemovable = [this.taskForm];
        this.componentsEvent = [this.taskForm, this.notePageButton, this.projectsPageButton];
    }
}




export class TasksPage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new TasksScreenFactory(stateManager));
    }
}



export class TaskFormComponent implements IComponentInteractive {
    private taskForm: HTMLFormElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.taskForm = document.getElementById("form-task-state")! as HTMLFormElement;
        
        this.clickEvent = new ClickEventObserver()
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();

    }

    addEventListeners(stateManager: IPageStateManager): void {
        
    
        this.taskForm.addEventListener("submit", this.triggerObserver);
    
    
    }

    removeEventListeners(): void {
        this.taskForm.removeEventListener("submit", this.triggerObserver);
    }

    removeElem(): void {
        this.taskForm.style.display = "none";
    }

    render(): void {
        this.taskForm.style.display = "block";
    }

    getHTML(): HTMLElement {
        return this.taskForm;
    }

}


export class ProjectsPageComponent implements IComponentEventListener {
    private projectsPageButton: HTMLElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.projectsPageButton = document.getElementById("dialog-project-theme")!;

        this.clickEvent = new ClickEventObserver();
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();
        
    }

    addEventListeners(stateManager: IPageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));
        this.clickEvent.setEvent(new ProjectsPageCommand(stateManager));

        this.projectsPageButton.addEventListener("click", this.triggerObserver);
    }

    removeEventListeners(): void {
        this.projectsPageButton.removeEventListener("click", this.triggerObserver);
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.projectsPageButton;
    }

}






export class NotePageComponent implements IComponentEventListener {
    private notePageButton: HTMLElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.notePageButton = document.getElementById("dialog-note-theme")!;

        this.clickEvent = new ClickEventObserver();
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();
        
    }

    addEventListeners(stateManager: IPageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));
        this.clickEvent.setEvent(new NotePageCommand(stateManager));

        this.notePageButton.addEventListener("click", this.triggerObserver);
    }

    removeEventListeners(): void {
        this.notePageButton.removeEventListener("click", this.triggerObserver);
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.notePageButton;
    }

}