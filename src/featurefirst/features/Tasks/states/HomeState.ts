import { IComponentRemovable } from "../../../models/IComponentModels";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IState } from "../../../models/PageState";
import { IClickEventRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { LocalStorage, TaskLocalStorage } from "../../../services/LocalStorage";
import { ClickEventRegistry } from "../../../util/EventRegistry";
import { ScreenRegistry } from "../../../util/ScreenRegistry";
import { ITask } from "../models/TaskModels";
import { RenderTasks } from "../services/CreateTaskHTML";



export class HomeState implements IState {
    private taskRender!: IOpenClose;

    load(): void {
        const localStorage: LocalStorage<ITask> = new TaskLocalStorage();
        const tasks: ITask[] = localStorage.getAll();

        this.taskRender = new RenderTasks(tasks, 
                                          new ClickEventRegistry(new Map<HTMLElement, () => void>()), 
                                          new ScreenRegistry(new Map<HTMLElement, IComponentRemovable>())
        );
        
        this.taskRender.open();
    }

    exit(): void {
        this.taskRender.close();
    }
}