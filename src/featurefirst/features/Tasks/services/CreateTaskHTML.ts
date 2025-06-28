import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IClickEventRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { InputCompletedTask, EditTask, DeleteTask, TaskContainer } from "../components/StorageTasks";
import { ITask } from "../models/TaskModels";
import { ITaskScreen } from "../models/TaskScreen";


export class RenderTasks implements ITaskScreen {
    constructor(  
                private screenEvents: IClickEventRegistry,
                private screenRegistry: IScreenComponentRegistry
    ) {}
    renderDataToScreen(data: { id: number; title: string; body: string; date: Date; priority: "low" | "medium" | "high"; project: number; completed: boolean; }): void {
        const inputCheckBox: IComponentEventRemovable<boolean> = new InputCompletedTask(this.screenEvents);
        inputCheckBox.setValue(data?.completed ?? false);
        inputCheckBox.addListener();

        const editTask: IComponentEventRemovable<void> = new EditTask(this.screenEvents);
        editTask.addListener();

        const delTask: IComponentEventRemovable<void> = new DeleteTask(this.screenEvents);
        delTask.addListener();

        const taskContainer: IComponentRemovable<ITask> = new TaskContainer(inputCheckBox, editTask, delTask);
        taskContainer.setValue(data!);

        this.screenRegistry.set(taskContainer.getHTML(), taskContainer);
        
        taskContainer.render(document.getElementById("home-content-container")!);
    }
    removeAll(): void {
        this.screenEvents.removeAll();
        this.screenRegistry.removeAll();
    }
}