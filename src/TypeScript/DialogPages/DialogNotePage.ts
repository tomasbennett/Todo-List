import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { TaskPageCommand, NotePageCommand, ProjectsPageCommand } from "./SwitchDialogPageCommands";

import { IComponent, IComponentRemovable } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { ProjectsPageComponent, TasksPageComponent } from "./HTMLDialogComponents";


export class NoteScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new NoteScreen(new ProjectsPageComponent(), new TasksPageComponent(), this.stateManager);
    }
}

class NoteScreen extends ScreenTemplate {
    private noteForm: IComponentRemovable;

    private clickEventProjectsPage: ClickEventObserver;
    private clickEventTasksPage: ClickEventObserver;

    constructor(private projectsButton: IComponent, private tasksButton: IComponent, stateManager: IPageStateManager) {
        super(stateManager);

        this.noteForm = new NoteFormComponent();

        // this.taskPageButton = new TasksPageComponent();
        // this.projectsPageButton = new ProjectsPageComponent();

        this.clickEventProjectsPage = new ClickEventObserver(this.projectsButton.getHTML(), "click");
        this.clickEventProjectsPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventProjectsPage.setEvent(new ProjectsPageCommand(this.stateManager));

        this.clickEventTasksPage = new ClickEventObserver(this.tasksButton.getHTML(), "click");
        this.clickEventTasksPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventTasksPage.setEvent(new TaskPageCommand(this.stateManager));

        this.clickEventObservers = [this.clickEventTasksPage, this.clickEventProjectsPage];

        this.components = [this.noteForm];
        this.componentsRemovable = [this.noteForm];
    }
}




export class NotePage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new NoteScreenFactory(stateManager));
    }
}



export class NoteFormComponent implements IComponentRemovable {
    private noteForm: HTMLFormElement;

    constructor() {
        this.noteForm = document.getElementById("form-note-state")! as HTMLFormElement;

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
