import { IDateRangeCheck } from "../models/DateRangeModel";
import { IDateRange } from "../models/DateRangeScreen";


export class DateRangeCheck implements IDateRangeCheck {
    constructor() {}
    
    isBetween(date: Date, dateRange: IDateRange): boolean {
        return date.getDate() >= dateRange.fromDate.getDate() &&
               date.getDate() <= dateRange.toDate.getDate(); 
    }

    // isBetween(date: Date): boolean {
    //     return date.getDate() >= this.startDate.getDate() && 
    //            date.getDate() <= this.endDate.getDate();
    // }
}