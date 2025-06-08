import { ICommand } from "../../../models/CommandModel";
import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IClickEventRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { InputCompletedTask, EditTask, DeleteTask, TaskContainer } from "../components/StorageTasks";
import { ITask } from "../models/TaskModels";


export class RenderTasks implements ICommand {
    constructor(
                private task: ITask,    
                private screenEvents: IClickEventRegistry,
                private screenRegistry: IScreenComponentRegistry
    ) {}
    execute(): void {
        const inputCheckBox: IComponentEventRemovable<boolean> = new InputCompletedTask(this.screenEvents);
        inputCheckBox.setValue(this.task.completed);
        inputCheckBox.addListener();

        const editTask: IComponentEventRemovable<void> = new EditTask(this.screenEvents);
        editTask.addListener();

        const delTask: IComponentEventRemovable<void> = new DeleteTask(this.screenEvents);
        delTask.addListener();

        const taskContainer: IComponentRemovable<ITask> = new TaskContainer(inputCheckBox, editTask, delTask);
        taskContainer.setValue(this.task);

        this.screenRegistry.set(taskContainer.getHTML(), taskContainer);
        
        taskContainer.render(document.getElementById("home-content-container")!);
    }
}