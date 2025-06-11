import { ICommand } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IState } from "../../../models/PageState";
import { IClickEventRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { LocalStorage, TaskLocalStorage } from "../../../services/LocalStorage";
import { ClickEventRegistry } from "../../../util/EventRegistry";
import { ScreenRegistry } from "../../../util/ScreenRegistry";
import { ITask } from "../models/TaskModels";
import { RenderTasks } from "../services/CreateTaskHTML";



export class HomeState implements IState<ITask> {
    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;

    load(data: ITask): void {
        // const localStorage: LocalStorage<ITask> = new TaskLocalStorage();
        // const tasks: ITask[] = localStorage.getAll();

        // this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        // this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());

        // for (const task of tasks) {
        //     const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
        //     taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        // }

        console.log("You are in the home state again!!!");
    }

    exit(): void {
        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();
        console.log("You have left the home state");
    }
}