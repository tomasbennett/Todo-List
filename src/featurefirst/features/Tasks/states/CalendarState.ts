import { ICommand } from "../../../models/CommandModel";
import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IState } from "../../../models/PageState";
import { IScreenComponentRegistry, IClickEventRegistry, IChangeEventRegistry } from "../../../models/Registry";
import { LocalStorage, TaskLocalStorage } from "../../../services/LocalStorage";
import { ClickEventRegistry, InputChangeEventRegistry } from "../../../util/EventRegistry";
import { ScreenRegistry } from "../../../util/ScreenRegistry";
import { CalendarFromComponent, CalendarToComponent } from "../components/TaskDateFilters";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { ITask } from "../models/TaskModels";
import { RenderTasks } from "../services/CreateTaskHTML";
import { DateRangeCheck } from "../util/DatesFilter";
import { IDateToString } from "../../../models/Transformer";
import { DateToString } from "../util/DateToText";

export class CalendarState implements IState<ITask> {
    // private dateScreenRegistry!: IScreenComponentRegistry;
    // private dateEventRegistry!: IChangeEventRegistry;

    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;

    load(data: ITask): void {
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
        console.log("entering Calendar state");
    }
    exit(): void {
        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();

        // this.dateScreenRegistry.removeAll();
        // this.dateEventRegistry.removeAll();
        console.log("exiting calendar state");
    }
}