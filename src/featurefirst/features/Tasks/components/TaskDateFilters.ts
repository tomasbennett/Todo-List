import { ICommand } from "../../../models/CommandModel";
import { IComponentEventRemovable } from "../../../models/IComponentModels";
import { IChangeEventRegistry, IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { TaskLocalStorage } from "../../../services/LocalStorage";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { ITask } from "../models/TaskModels";
import { RenderTasks } from "../services/CreateTaskHTML";
import { DateRangeCheck } from "../util/DatesFilter";

export const tasksHomeBtn: HTMLElement = document.getElementById("home-option")!;

export const tasksUpcomingBtn: HTMLElement = document.getElementById("upcoming-option")!;

export const tasksCalendarBtn: HTMLElement = document.getElementById("calendar-option")!;

//All IComponents should have a set method in case you need to set a value it shouldn't really be passed through the constructor
export class CalendarFromComponent implements IComponentEventRemovable<string, [IScreenComponentRegistry, IClickEventRegistry, HTMLInputElement]> {
    private fromInput: HTMLInputElement;

    constructor(private eventsRegistry: IChangeEventRegistry) {
        this.fromInput = document.createElement("input");
        this.fromInput.type = "date";
    }
    setValue(value: string): void {
        this.fromInput.value = value;
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
    addListener(
        taskScreen: IScreenComponentRegistry, 
        taskEvents: IClickEventRegistry,
        toDateInput: HTMLInputElement
    ): void {
        this.eventsRegistry.set(this.fromInput, (e: Event) => {
            this.eventsRegistry.set(this.fromInput, (e: Event) => {
        
                const input: HTMLInputElement = e.target as HTMLInputElement;
                
                taskScreen.removeAll();
                taskEvents.removeAll();
    
                const localStorage: ILocalStorageRegistry<ITask> = new TaskLocalStorage();
                const tasks: ITask[] = localStorage.getAll().filter((task) => {
                    const dateCheck: IDateRangeCheck = new DateRangeCheck(new Date(input.value), new Date(toDateInput.value));
                
                    return dateCheck.isBetween(task.date);
                });
    
                for (const task of tasks) {
                    const taskRender: ICommand = new RenderTasks(task, taskEvents, taskScreen);
                    taskRender.execute();
                }
            });



        });
    }
    removeListener(): void {
        this.eventsRegistry.removeByID(this.fromInput);
    }
}


export class CalendarToComponent implements IComponentEventRemovable<string, [IScreenComponentRegistry, IClickEventRegistry, HTMLInputElement]> {
    private toInput: HTMLInputElement;

    constructor(private eventsRegistry: IChangeEventRegistry) {
        this.toInput = document.createElement("input");
        this.toInput.type = "date";
    }

    setValue(value: string): void {
        this.toInput.value = value;
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
    addListener(
        taskScreen: IScreenComponentRegistry, 
        taskEvents: IClickEventRegistry,
        fromDateInput: HTMLInputElement
    ): void {

        this.eventsRegistry.set(this.toInput, (e: Event) => {
        
            const input: HTMLInputElement = e.target as HTMLInputElement;
            
            taskScreen.removeAll();
            taskEvents.removeAll();

            const localStorage: ILocalStorageRegistry<ITask> = new TaskLocalStorage();
            const tasks: ITask[] = localStorage.getAll().filter((task) => {
                const dateCheck: IDateRangeCheck = new DateRangeCheck(new Date(fromDateInput.value), new Date(input.value));
            
                return dateCheck.isBetween(task.date);
            });

            for (const task of tasks) {
                const taskRender: ICommand = new RenderTasks(task, taskEvents, taskScreen);
                taskRender.execute();
            }
        });
    }

    removeListener(): void {
        this.eventsRegistry.removeByID(this.toInput);
    }
}