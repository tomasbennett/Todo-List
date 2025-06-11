import { ICommand } from "../../../models/CommandModel";
import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IClickEventRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { InputCompletedTask, EditTask, DeleteTask, TaskContainer } from "../components/StorageTasks";
import { ITask } from "../models/TaskModels";


export class RenderTasks implements IOpenClose<ITask> {
    constructor(  
                private screenEvents: IClickEventRegistry,
                private screenRegistry: IScreenComponentRegistry
    ) {}
    open(data?: { id: number; title: string; body: string; date: Date; priority: "low" | "medium" | "high"; project: string; completed: boolean; } | undefined): void {
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
    close(): void {
        this.screenEvents.removeAll();
        this.screenRegistry.removeAll();
    }
}