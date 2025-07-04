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
    
    private fromContainer: HTMLElement;

    private fromLabel: HTMLLabelElement;
    private fromInput: HTMLInputElement;

    constructor(
        private dateToInputStr: IDateToString
    ) {
        this.fromContainer = document.createElement("div");
        this.fromContainer.id = "from-date-container";
        this.fromContainer.classList.add("date-specifier-container");


        this.fromLabel = document.createElement("label");
        this.fromLabel.htmlFor = "from-date-input";
        this.fromLabel.textContent = "From:";


        this.fromInput = document.createElement("input");
        this.fromInput.type = "date";
        this.fromInput.id = "from-date-input";
        this.fromInput.name = "from-date-input";
    }
    setValue(value: Date): void {
        this.fromInput.value = this.dateToInputStr.transform(value);
    }

    remove(): void {
        this.fromInput.remove();
        this.fromLabel.remove();
        this.fromContainer.remove();
    }
    render(container: HTMLElement): void {
        this.fromContainer.appendChild(this.fromLabel);
        this.fromContainer.appendChild(this.fromInput);

        container.appendChild(this.fromContainer);
    }
    getHTML(): HTMLElement {
        return this.fromInput;
    }
}


export class CalendarToComponent implements IComponentRemovable<Date> {
    private toContainer: HTMLElement;

    private toLabel: HTMLLabelElement;
    private toInput: HTMLInputElement;

    constructor(
        private dateToInputStr: IDateToString
    ) {
        this.toContainer = document.createElement("div");
        this.toContainer.id = "to-date-container";
        this.toContainer.classList.add("date-specifier-container");


        this.toLabel = document.createElement("label");
        this.toLabel.htmlFor = "to-date-input";
        this.toLabel.textContent = "To:";

        this.toInput = document.createElement("input");
        this.toInput.type = "date";
        this.toInput.id = "to-date-input";
        this.toInput.name = "to-date-input";
    }

    setValue(value: Date): void {
        this.toInput.value = this.dateToInputStr.transform(value);
    }

    remove(): void {
        this.toLabel.remove();
        this.toInput.remove();
        this.toContainer.remove();
    }
    render(container: HTMLElement): void {
        this.toContainer.appendChild(this.toLabel);
        this.toContainer.appendChild(this.toInput);

        container.appendChild(this.toContainer);
    }
    getHTML(): HTMLElement {
        return this.toInput;
    }
}


export const dateSpecifierContainer: HTMLElement = document.getElementById("date-range-specifier")!;