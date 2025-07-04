import { mainTitle } from "../../../components/MainTitle";
import { IState } from "../../../models/PageState";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { ITask } from "../models/TaskModels";
import { ITaskScreen } from "../models/TaskScreen";



export class HomeState implements IState {
    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;

    constructor(
        private screen: ITaskScreen,
        private localStorage: ILocalStorageRegistry<ITask>,
    ) {}

    load(): void {

        mainTitle.textContent = "Home";

        // const localStorage: LocalStorage<ITask> = new TaskLocalStorage();
        // const tasks: ITask[] = localStorage.getAll();

        // this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        // this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());

        // for (const task of tasks) {
        //     const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
        //     taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        // }

        for (const task of this.localStorage.getAll()) {
            this.screen.renderDataToScreen(task);
        }
    }

    exit(): void {
        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();
        
        this.screen.removeAll();
    }
}