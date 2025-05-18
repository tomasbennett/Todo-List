import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { TaskPageCommand, NotePageCommand, ProjectsPageCommand } from "./SwitchDialogPageCommands";

import { IComponent, IComponentRemovable, IComponentEventListener, IComponentInteractive } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";


export class ProjectsScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new ProjectsScreen(this.stateManager);
    }
}

class ProjectsScreen extends ScreenTemplate {
    private projectsForm: IComponentInteractive;

    private notePageButton: IComponentEventListener;
    private taskPageButton: IComponentEventListener;


    constructor(stateManager: IPageStateManager) {
        super(stateManager);

        this.projectsForm = new ProjectsFormComponent();

        this.notePageButton = new NotePageComponent();
        this.taskPageButton = new TasksPageComponent();


        this.components = [this.projectsForm];
        this.componentsRemovable = [this.projectsForm];
        this.componentsEvent = [this.projectsForm, this.taskPageButton, this.notePageButton];
    }
}




export class ProjectsPage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new ProjectsScreenFactory(stateManager));
    }
}



export class ProjectsFormComponent implements IComponentInteractive {
    private projectsForm: HTMLFormElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.projectsForm = document.getElementById("form-project-state")! as HTMLFormElement;
        
        this.clickEvent = new ClickEventObserver()
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();

    }

    addEventListeners(stateManager: IPageStateManager): void {
        // this.clickEvent.setEvent(new FormDataStorageTransfer(this.projectsForm));
    
        this.projectsForm.addEventListener("submit", this.triggerObserver);
    
    
    }

    removeEventListeners(): void {
        this.projectsForm.removeEventListener("submit", this.triggerObserver);
    }

    removeElem(): void {
        this.projectsForm.style.display = "none";
    }

    render(): void {
        this.projectsForm.style.display = "block";
    }

    getHTML(): HTMLElement {
        return this.projectsForm;
    }

}



export class TasksPageComponent implements IComponentEventListener {
    private taskPageButton: HTMLElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.taskPageButton = document.getElementById("dialog-task-theme")!;

        this.clickEvent = new ClickEventObserver();
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();
        
    }

    addEventListeners(stateManager: IPageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));
        this.clickEvent.setEvent(new TaskPageCommand(stateManager));

        this.taskPageButton.addEventListener("click", this.triggerObserver);
    }

    removeEventListeners(): void {
        this.taskPageButton.removeEventListener("click", this.triggerObserver);
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.taskPageButton;
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