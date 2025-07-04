import { ICommandCriteria } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IPageMediator } from "../../../models/PageMediator";
import { IState, IStateManager } from "../../../models/PageState";
import { IClickEventRegistry, ILocalStorageRegistry } from "../../../models/Registry";
import { IProject } from "../models/ProjectsModel";

export class ProjectRemovalCommand<ProjectTasks extends { id: number, project: number }> implements ICommandCriteria<IComponentRemovable<void>> {
    constructor(
        private projLocalStorage: ILocalStorageRegistry<IProject>,
        private pageClickEventRegistry: IClickEventRegistry,

        private taskLocalStorage: ILocalStorageRegistry<ProjectTasks>
        // private pageStateManager: IStateManager,
        // private pageChangeMediator: IPageMediator<null, undefined>,
        // private defaultPage: HTMLElement
    ) {}

    execute(projSidebarComponent: IComponentRemovable<void>): void {
        const projSidebarBtn: HTMLElement = projSidebarComponent.getHTML();
        const projID: number = Number(projSidebarBtn.getAttribute("data-project-id"));

        this.projLocalStorage.removeByID(projID);
        this.pageClickEventRegistry.removeByID(projSidebarBtn);
        //DO I HAVE TO REMOVE THE REMOVE BTN AS WELL???
        projSidebarComponent.remove();

        const tasks: ProjectTasks[] = this.taskLocalStorage.getAll().filter(task => {
            return task.project == projID;
        });

        tasks.forEach(task => {
            task.project = 0;
            this.taskLocalStorage.set(task.id, task);
        });

    }
}

