import { mainTitle } from "../../../components/MainTitle";
import { IState } from "../../../models/PageState";
import { IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { nextWeek } from "../components/SetDates";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { IDateRange } from "../models/DateRangeScreen";
import { ITask } from "../models/TaskModels";
import { ITaskScreen } from "../models/TaskScreen";


export class UpcomingState implements IState {
    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;

    constructor(
        private screen: ITaskScreen,
        private localStorage: ILocalStorageRegistry<ITask>,

        private dateCheck: IDateRangeCheck
    ) {}

    load(): void {
        // const localStorage: ILocalStorageRegistry<ITask> = new TaskLocalStorage();
        // const tasks: ITask[] = localStorage.getAll().filter((task) => {
        //     const today: Date = new Date();

        //     const nextWeek: Date = new Date(today);
        //     nextWeek.setDate(today.getDate() + 7);

        //     const dateCheck: IDateRangeCheck = new DateRangeCheck(today, nextWeek);
        //     return dateCheck.isBetween(task.date);
        // });

        // this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        // this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());

        // for (const task of tasks) {
        //     const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
        //     taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        // }
        mainTitle.textContent = "Upcoming";

        const dateRange: IDateRange = {
            fromDate: new Date(),
            toDate: nextWeek()
        }

        const tasks: ITask[] = this.localStorage.getAll().filter((task) => {
            return this.dateCheck.isBetween(task.date, dateRange);
        });

        for (const task of tasks) {
            this.screen.renderDataToScreen(task);
        }

    }
    exit(): void {
        
        this.screen.removeAll();
        

        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();
    }

}