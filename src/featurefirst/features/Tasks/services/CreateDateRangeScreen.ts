import { ICommand } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IChangeEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { IDateToString } from "../../../models/Transformer";
import { CalendarFromComponent, CalendarToComponent, dateSpecifierContainer } from "../components/TaskDateFilters";
import { IDateRangeCheck } from "../models/DateRangeModel";
import { IDateRange, IDateRangeScreen } from "../models/DateRangeScreen";
import { ITask } from "../models/TaskModels";
import { ITaskScreen } from "../models/TaskScreen";
import { DateChangeFilterCommand } from "../util/DateChangeFilter";

export class DateRangeSelectorScreen implements IDateRangeScreen {
    constructor(
        private screenRegistry: IScreenComponentRegistry,
        private changeEventRegistry: IChangeEventRegistry,
        
        private dateToStr: IDateToString,

        private renderTaskScreen: ITaskScreen,
        private taskLocalStorage: ILocalStorageRegistry<ITask>,
        private dateCheck: IDateRangeCheck
    ) {}

    renderDataToScreen(data: IDateRange): void {

        const fromDateInput: IComponentRemovable<Date> = new CalendarFromComponent(this.dateToStr);
        const toDateInput: IComponentRemovable<Date> = new CalendarToComponent(this.dateToStr);
        fromDateInput.setValue(data.fromDate);
        toDateInput.setValue(data.toDate);
         //Should rendering be done in the registry or are there ways of combining registries with stuff like this in a facade pattern???

        const changeDateCommand: ICommand = new DateChangeFilterCommand(
                                                                         fromDateInput, 
                                                                         toDateInput,
                                                                         this.renderTaskScreen,
                                                                         this.taskLocalStorage,
                                                                         this.dateCheck
                                                                     );
        
        changeDateCommand.execute();

        this.changeEventRegistry.set(fromDateInput.getHTML() as HTMLInputElement, (e: Event) => {
            this.renderTaskScreen.removeAll();
            changeDateCommand.execute();
                                                                        
        });

        this.changeEventRegistry.set(toDateInput.getHTML() as HTMLInputElement, (e: Event) => {
            this.renderTaskScreen.removeAll();
            changeDateCommand.execute();
        });


        this.screenRegistry.set(fromDateInput.getHTML(), fromDateInput);
        this.screenRegistry.set(toDateInput.getHTML(), toDateInput);

        fromDateInput.render(dateSpecifierContainer);
        toDateInput.render(dateSpecifierContainer); // set the registry straight now!!!!


    }

    removeAll(): void {
        this.renderTaskScreen.removeAll();
        
        this.screenRegistry.removeAll();
        this.changeEventRegistry.removeAll();
    }

}