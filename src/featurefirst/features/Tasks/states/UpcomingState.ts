import { ICommand } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IState } from "../../../models/PageState";
import { IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { TaskLocalStorage } from "../../../services/LocalStorage";
import { ClickEventRegistry } from "../../../util/EventRegistry";
import { ScreenRegistry } from "../../../util/ScreenRegistry";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { ITask } from "../models/TaskModels";
import { RenderTasks } from "../services/CreateTaskHTML";
import { DateRangeCheck } from "../util/DatesFilter";

export class UpcomingState implements IState {
    private screenRegistry!: IScreenComponentRegistry;
    private eventRegistry!: IClickEventRegistry;

    load(): void {
        const localStorage: ILocalStorageRegistry<ITask> = new TaskLocalStorage();
        const tasks: ITask[] = localStorage.getAll().filter((task) => {
            const today: Date = new Date();

            const nextWeek: Date = new Date(today);
            nextWeek.setDate(today.getDate() + 7);

            const dateCheck: IDateRangeCheck = new DateRangeCheck(today, nextWeek);
            return dateCheck.isBetween(task.date);
        });

        this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());

        for (const task of tasks) {
            const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
            taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        }

    }
    exit(): void {
        this.screenRegistry.removeAll();
        this.eventRegistry.removeAll();
    }

}