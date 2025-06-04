import { ICommand } from "../../../models/CommandModel";
import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IClickEventRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { InputCompletedTask, EditTask, DeleteTask, TaskContainer } from "../components/StorageTasks";
import { ITask } from "../models/TaskModels";


export class RenderTasks implements IOpenClose {
    constructor(private tasks: ITask[],
                private screenEvents: IClickEventRegistry,
                private screenRegistry: IScreenComponentRegistry
    ) {}
    open(): void {
        for (const task of this.tasks) {
            const inputCheckBox: IComponentEventRemovable = new InputCompletedTask(this.screenEvents, task.completed);
            inputCheckBox.addListener();

            const editTask: IComponentEventRemovable = new EditTask(this.screenEvents);
            editTask.addListener();

            const delTask: IComponentEventRemovable = new DeleteTask(this.screenEvents);
            delTask.addListener();

            const taskContainer: IComponentRemovable = new TaskContainer(task, inputCheckBox, editTask, delTask);
            this.screenRegistry.set(taskContainer.getHTML(), taskContainer);
            taskContainer.render(document.getElementById("home-content-container")!);
        }
    }
    close(): void {
        this.screenEvents.removeAll();
        this.screenRegistry.removeAll();
    }
}