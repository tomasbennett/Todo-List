import { IDateRangeCheck } from "../models/DateRangeModel";
import { IDateRange } from "../models/DateRangeScreen";


export class DateRangeCheck implements IDateRangeCheck {
    constructor() {}
    
    isBetween(date: Date, dateRange: IDateRange): boolean {
        
        return date >= dateRange.fromDate &&
               date <= dateRange.toDate; 
    }

    // isBetween(date: Date): boolean {
    //     return date >= this.startDate && 
    //            date <= this.endDate;
    // }
}