import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { TaskPageCommand, NotePageCommand, ProjectsPageCommand } from "./SwitchDialogPageCommands";

import { IComponent, IComponentRemovable } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { NotePageComponent, TasksPageComponent } from "./HTMLDialogComponents";
import { FormRecordTransfer, UploadToLocalStorage } from "../Utility/RecordModifier/UploadForm";
import { ProjectRecordMods } from "../Utility/RecordModifier/ProjectsModifier";
import { ProjectSchema } from "../Utility/StorageSchemas";
import { ProjectsLocalStorage } from "../LocalStorage/LocalStorage";


export class ProjectsScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new ProjectsScreen(new NotePageComponent(), new TasksPageComponent(), this.stateManager);
    }
}

class ProjectsScreen extends ScreenTemplate {
    private projectsForm: IComponentRemovable;

    private clickEventNotePage: ClickEventObserver;
    private clickEventTasksPage: ClickEventObserver;
    private submitEventProjects: ClickEventObserver;

    constructor(private noteButton: IComponent, private tasksButton: IComponent, stateManager: IPageStateManager) {
        super(stateManager);

        this.projectsForm = new ProjectsFormComponent();

        // this.notePageButton = new NotePageComponent();
        // this.taskPageButton = new TasksPageComponent();

        this.clickEventNotePage = new ClickEventObserver(this.noteButton.getHTML(), "click");
        this.clickEventNotePage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventNotePage.setEvent(new NotePageCommand(this.stateManager));

        this.clickEventTasksPage = new ClickEventObserver(this.tasksButton.getHTML(), "click");
        this.clickEventTasksPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventTasksPage.setEvent(new TaskPageCommand(this.stateManager));

        this.submitEventProjects = new ClickEventObserver(this.projectsForm.getHTML(), "submit");
        this.submitEventProjects.setEvent(new UploadToLocalStorage(new FormRecordTransfer(this.projectsForm.getHTML() as HTMLFormElement),
                                                                   ProjectRecordMods,
                                                                   ProjectSchema,
                                                                   new ProjectsLocalStorage()));



        this.clickEventObservers = [this.submitEventProjects, this.clickEventTasksPage, this.clickEventNotePage];

        this.components = [this.projectsForm];
        this.componentsRemovable = [this.projectsForm];

    }
}




export class ProjectsPage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new ProjectsScreenFactory(stateManager));
    }
}



export class ProjectsFormComponent implements IComponentRemovable {
    private projectsForm: HTMLFormElement;

    constructor() {
        this.projectsForm = document.getElementById("form-project-state")! as HTMLFormElement;
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



