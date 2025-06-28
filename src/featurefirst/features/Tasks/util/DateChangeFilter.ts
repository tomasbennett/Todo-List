import { ICommand } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { IDateRange } from "../models/DateRangeScreen";
import { ITask } from "../models/TaskModels";
import { ITaskScreen } from "../models/TaskScreen";

export class DateChangeFilterCommand implements ICommand {
    constructor(
        private fromDateInput: IComponentRemovable<Date>,
        private toDateInput: IComponentRemovable<Date>,

        private renderTasksScreen: ITaskScreen,
        private tasksLocalStorage: ILocalStorageRegistry<ITask>,
        private dateCheck: IDateRangeCheck
    ) {}

    execute(): void {
        const fromDateInputElem: HTMLInputElement = this.fromDateInput.getHTML() as HTMLInputElement;
        const toDateInputElem: HTMLInputElement = this.toDateInput.getHTML() as HTMLInputElement;
        
        const dateRange: IDateRange = {
            fromDate: new Date(fromDateInputElem.value),
            toDate: new Date(toDateInputElem.value)
        }

        const tasks: ITask[] = this.tasksLocalStorage.getAll().filter((task) => {
            return this.dateCheck.isBetween(task.date, dateRange);
        });

        for (const task of tasks) {
            this.renderTasksScreen.renderDataToScreen(task);
        }
    }
}