import { mainTitle } from "../../../components/MainTitle";
import { IState } from "../../../models/PageState";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { fourWeeksFromToday, nextWeek } from "../components/SetDates";
import { dateSpecifierContainer } from "../components/TaskDateFilters";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { IDateRange, IDateRangeScreen } from "../models/DateRangeScreen";
import { ITask } from "../models/TaskModels";

import { ITaskScreen } from "../models/TaskScreen";

export class CalendarState implements IState {
    // private dateScreenRegistry!: IScreenComponentRegistry;
    // private dateEventRegistry!: IChangeEventRegistry;

    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;

    constructor(
        // private taskScreen: ITaskScreen,
        private dateScreen: IDateRangeScreen,

        // private localStorage: ILocalStorageRegistry<ITask>,

        // private dateCheck: IDateRangeCheck, //We still have dateCheck, instead of creating dateRange we get a class that returns an IDateRange from the inputs
    ) {}

    load(): void {
        // this.dateScreenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<string>>());
        // this.dateEventRegistry = new InputChangeEventRegistry(new Map<HTMLInputElement, (e: Event) => void>());

        // const fromInput: IComponentEventRemovable<string, [IScreenComponentRegistry, IClickEventRegistry, HTMLInputElement]> = new CalendarFromComponent(this.dateEventRegistry);
        // const toInput: IComponentEventRemovable<string, [IScreenComponentRegistry, IClickEventRegistry, HTMLInputElement]> = new CalendarToComponent(this.dateEventRegistry);

        // this.dateScreenRegistry.set(fromInput.getHTML(), fromInput);
        // this.dateScreenRegistry.set(toInput.getHTML(), toInput);

        // this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        // this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());
        
        // const container: HTMLElement = document.getElementById("home-content-container")!;
        // fromInput.render(container);
        // toInput.render(container);
        // fromInput.addListener(this.screenRegistry, this.eventRegistry, toInput.getHTML() as HTMLInputElement);
        // toInput.addListener(this.screenRegistry, this.eventRegistry, fromInput.getHTML() as HTMLInputElement);

        
        // const dateToString: IDateToString = new DateToString();
        // const today: Date = new Date();
        // const fourWeeksAhead: Date = new Date(today);
        // fourWeeksAhead.setDate(today.getDate() + 28);

        // fromInput.setValue(dateToString.transform(today));
        // toInput.setValue(dateToString.transform(fourWeeksAhead));


        // const localStorage: LocalStorage<ITask> = new TaskLocalStorage();
        // const tasks: ITask[] = localStorage.getAll().filter((task) => {
        //     const dateCheck: IDateRangeCheck = new DateRangeCheck(today, fourWeeksAhead);

        //     return dateCheck.isBetween(task.date);
        // });

        // for (const task of tasks) {
        //     const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
        //     taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        // }
        // const today: Date = new Date();
        // const fourWeeksAhead: Date = new Date(today);
        // fourWeeksAhead.setDate(today.getDate() + 28);

        // const defaultDates: IDateRange = {
        //     fromDate: today,
        //     toDate: fourWeeksAhead
        // }

        mainTitle.textContent = "Calendar";
        
        const dateRange: IDateRange = {
            fromDate: new Date(),
            toDate: fourWeeksFromToday()
        }

        dateSpecifierContainer.style.display = "block";

        this.dateScreen.renderDataToScreen(dateRange);

        // const tasks: ITask[] = this.localStorage.getAll().filter((task) => {
        //     return this.dateCheck.isBetween(task.date, dateRange);
        // });

        // for (const task of tasks) {
        //     this.taskScreen.renderDataToScreen(task);
        // }
        

    }
    exit(): void {
        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();

        // this.dateScreenRegistry.removeAll();
        // this.dateEventRegistry.removeAll();
        
        // this.taskScreen.removeAll();

        dateSpecifierContainer.style.display = "none";

        this.dateScreen.removeAll();

    }
}