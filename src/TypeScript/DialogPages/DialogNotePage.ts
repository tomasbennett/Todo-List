import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { TaskPageCommand, NotePageCommand, ProjectsPageCommand } from "./SwitchDialogPageCommands";

import { IComponent, IComponentRemovable, IComponentEventListener, IComponentInteractive } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";


export class NoteScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new NoteScreen(this.stateManager);
    }
}

class NoteScreen extends ScreenTemplate {
    private noteForm: IComponentInteractive;

    private taskPageButton: IComponentEventListener;
    private projectsPageButton: IComponentEventListener;


    constructor(stateManager: IPageStateManager) {
        super(stateManager);

        this.noteForm = new NoteFormComponent();

        this.taskPageButton = new TasksPageComponent();
        this.projectsPageButton = new ProjectsPageComponent();

        this.components = [this.noteForm];
        this.componentsRemovable = [this.noteForm];
        this.componentsEvent = [this.noteForm, this.projectsPageButton, this.taskPageButton];
    }
}




export class NotePage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new NoteScreenFactory(stateManager));
    }
}



export class NoteFormComponent implements IComponentInteractive {
    private noteForm: HTMLFormElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.noteForm = document.getElementById("form-note-state")! as HTMLFormElement;
        
        this.clickEvent = new ClickEventObserver()
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();

    }

    addEventListeners(stateManager: IPageStateManager): void {
        // this.clickEvent.setEvent(new FormDataStorageTransfer(this.noteForm));


    
        this.noteForm.addEventListener("submit", this.triggerObserver);
    
    
    }

    removeEventListeners(): void {
        this.noteForm.removeEventListener("submit", this.triggerObserver);
    }

    removeElem(): void {
        this.noteForm.style.display = "none";
    }

    render(): void {
        this.noteForm.style.display = "block";
    }

    getHTML(): HTMLElement {
        return this.noteForm;
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