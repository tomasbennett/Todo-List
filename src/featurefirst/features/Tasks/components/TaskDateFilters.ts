import { ICommand } from "../../../models/CommandModel";
import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IChangeEventRegistry, IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { IDateToString, ITransformer } from "../../../models/Transformer";
import { TaskLocalStorage } from "../../../services/LocalStorage";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { ITask } from "../models/TaskModels";
import { RenderTasks } from "../services/CreateTaskHTML";
import { DateRangeCheck } from "../util/DatesFilter";

export const tasksHomeBtn: HTMLElement = document.getElementById("home-option")!;

export const tasksUpcomingBtn: HTMLElement = document.getElementById("upcoming-option")!;

export const tasksCalendarBtn: HTMLElement = document.getElementById("calendar-option")!;



//All IComponents should have a set method in case you need to set a value it shouldn't really be passed through the constructor
export class CalendarFromComponent implements IComponentRemovable<Date> {
    private fromInput: HTMLInputElement;

    constructor(
        private dateToInputStr: IDateToString
    ) {
        this.fromInput = document.createElement("input");
        this.fromInput.type = "date";
    }
    setValue(value: Date): void {
        this.fromInput.value = this.dateToInputStr.transform(value);
    }

    remove(): void {
        this.fromInput.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.fromInput);
    }
    getHTML(): HTMLElement {
        return this.fromInput;
    }
}


export class CalendarToComponent implements IComponentRemovable<Date> {
    private toInput: HTMLInputElement;

    constructor(
        private dateToInputStr: IDateToString
    ) {
        this.toInput = document.createElement("input");
        this.toInput.type = "date";
    }

    setValue(value: Date): void {
        this.toInput.value = this.dateToInputStr.transform(value);
    }

    remove(): void {
        this.toInput.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.toInput);
    }
    getHTML(): HTMLElement {
        return this.toInput;
    }
}


export const dateSpecifierContainer: HTMLElement = document.getElementById("date-range-specifier")!;