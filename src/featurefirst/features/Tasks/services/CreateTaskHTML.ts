import { homeContentContainer } from "../../../components/MainContainer";
import { ICommandCriteria } from "../../../models/CommandModel";
import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IStateManager } from "../../../models/PageState";
import { IChangeEventRegistry, IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { InputCompletedTask, EditTask, DeleteTask, TaskContainer } from "../components/StorageTasks";
import { ITask } from "../models/TaskModels";
import { ITaskScreen } from "../models/TaskScreen";


export class RenderTasks implements ITaskScreen {
    constructor(
                private taskLocalStorage: ILocalStorageRegistry<ITask>,

                // private stateManager: IStateManager,
                private inputChangeEvents: IChangeEventRegistry,
        
                private screenEvents: IClickEventRegistry,
                private screenRegistry: IScreenComponentRegistry,


                private editTaskCommand: ICommandCriteria<number>
    ) {}
    renderDataToScreen(data: { id: number; title: string; body: string; date: Date; priority: "low" | "medium" | "high"; project: number; completed: boolean; }): void {
        const inputCheckBox: IComponentEventRemovable<boolean> = new InputCompletedTask(this.screenEvents);
        inputCheckBox.setValue(data?.completed ?? false);
        // inputCheckBox.addListener();

        const editTask: IComponentEventRemovable<void> = new EditTask(this.screenEvents);
        // editTask.addListener();

        const delTask: IComponentEventRemovable<void> = new DeleteTask(this.screenEvents);
        
        const taskContainer: IComponentRemovable<ITask> = new TaskContainer(inputCheckBox, editTask, delTask);
        taskContainer.setValue(data!);
        
        this.screenRegistry.set(taskContainer.getHTML(), taskContainer);


        this.inputChangeEvents.set(inputCheckBox.getHTML() as HTMLInputElement, (e: Event) => {
            e.stopPropagation();

            const task: ITask = this.taskLocalStorage.getByID(data.id);

            task.completed = !task.completed;
            
            
            taskContainer.setValue(task);

            this.taskLocalStorage.set(data.id, task);

        });

        this.screenEvents.set(editTask.getHTML(), (e: MouseEvent) => {
            e.stopPropagation();

            this.editTaskCommand.execute(data.id);


        });

        
        this.screenEvents.set(delTask.getHTML(), (e: MouseEvent) => {
            e.stopPropagation();

            this.taskLocalStorage.removeByID(data.id);

            // taskContainer.remove();
            
            this.inputChangeEvents.removeByID(inputCheckBox.getHTML() as HTMLInputElement);
            this.screenEvents.removeByID(editTask.getHTML());
            this.screenEvents.removeByID(delTask.getHTML());

            this.screenRegistry.removeByID(taskContainer.getHTML());
        });

        taskContainer.render(homeContentContainer);
    }
    removeAll(): void {
        this.inputChangeEvents.removeAll();
        this.screenEvents.removeAll();
        this.screenRegistry.removeAll();
    }
}