import { mainTitle } from "../../../components/MainTitle";
import { IScreenGroupingCriteria } from "../../../models/OpenCloseModel";
import { IState } from "../../../models/PageState";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { IProject } from "../models/ProjectsModel";

export class ProjectGenericState<Task extends { id: number, project: number }> implements IState {
    constructor(
        private projID: number,
        private projLocalStorage: ILocalStorageRegistry<IProject>,

        private taskRenderScreen: IScreenGroupingCriteria<Task>,
        private taskLocalStorage: ILocalStorageRegistry<Task>
    ) {}

    load(): void {  

        mainTitle.textContent = this.projLocalStorage.getByID(this.projID).title;

        const tasks: Task[] = this.taskLocalStorage.getAll().filter(task => {
            return task.project == this.projID;
        });

        for (const task of tasks) {
            this.taskRenderScreen.renderDataToScreen(task);
        }
        
    }
    exit(): void {
        this.taskRenderScreen.removeAll();
    }
}