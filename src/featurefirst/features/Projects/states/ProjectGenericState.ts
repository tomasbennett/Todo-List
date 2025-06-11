import { ICommand } from "../../../models/CommandModel";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IState, IStateManager } from "../../../models/PageState";
import { IClickEventRegistry } from "../../../models/Registry";
import { ITask } from "../../Tasks/models/TaskModels";
import { IProject } from "../models/ProjectsModel";

export class ProjectGenericState implements IState {
    constructor(
        private taskRender: IOpenClose<ITask>,
        private proj: IProject,

        private stateManager: IStateManager,
        private newState: IState,
        private removeBtn: HTMLElement,
        private removeBtnEventRegistry: IClickEventRegistry
    ) {}

    load(): void {

        this.proj.tasks.forEach((task: ITask) => {
            this.taskRender.open(task);
        })

        this.removeBtnEventRegistry.set(this.removeBtn, (e: MouseEvent) => {
            this.exit();
            this.stateManager.set(this.newState);
            this.stateManager.load();
        });
    }
    exit(): void {
        this.removeBtnEventRegistry.removeByID(this.removeBtn); //We need also a way of specifying remove a specific one or just remove the latest one for now???
        
        this.taskRender.close();
    }
}