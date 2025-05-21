import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { NotePageCommand, TaskPageCommand, ProjectsPageCommand } from "./SwitchDialogPageCommands";


import { IComponent, IComponentRemovable } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { TasksLocalStorage } from "../LocalStorage/LocalStorage";
import { NoteFormComponent } from "./DialogNotePage";
import { NotePageComponent, ProjectsPageComponent } from "./HTMLDialogComponents";
import { FormRecordTransfer, TaskRecordMods, UploadToLocalStorage } from "../Utility/RecordModifier/TaskModifier";
import { TaskLiteral, TaskSchema } from "../Utility/StorageTypes";


export class TasksScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new TasksScreen(new NotePageComponent(), new ProjectsPageComponent(), this.stateManager);
    }
}

class TasksScreen extends ScreenTemplate {
    private taskForm: IComponentRemovable;

    private clickEventNotePage: ClickEventObserver;
    private clickEventProjectsPage: ClickEventObserver;
    private submitEventTasks: ClickEventObserver;

    constructor(private noteButton: IComponent, private projectsButton: IComponent, stateManager: IPageStateManager) {
        super(stateManager);

        this.taskForm = new TaskFormComponent();

        // this.notePageButton = new NotePageComponent();
        // this.projectsPageButton = new ProjectsPageComponent();

        this.clickEventNotePage = new ClickEventObserver(this.noteButton.getHTML(), "click");
        this.clickEventNotePage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventNotePage.setEvent(new NotePageCommand(this.stateManager));

        this.clickEventProjectsPage = new ClickEventObserver(this.projectsButton.getHTML(), "click");
        this.clickEventProjectsPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventProjectsPage.setEvent(new ProjectsPageCommand(this.stateManager));

        this.submitEventTasks = new ClickEventObserver(this.taskForm.getHTML(), "submit");
        this.submitEventTasks.setEvent(new UploadToLocalStorage(new FormRecordTransfer(this.taskForm.getHTML() as HTMLFormElement),
                                                                TaskRecordMods, 
                                                                TaskSchema,
                                                                new TasksLocalStorage()));


        this.clickEventObservers = [this.submitEventTasks, this.clickEventProjectsPage, this.clickEventNotePage];

        this.components = [this.taskForm];
        this.componentsRemovable = [this.taskForm];

    }
}




export class TasksPage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new TasksScreenFactory(stateManager));
    }
}



export class TaskFormComponent implements IComponentRemovable {
    private taskForm: HTMLFormElement;

    constructor() {
        this.taskForm = document.getElementById("form-task-state")! as HTMLFormElement;
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