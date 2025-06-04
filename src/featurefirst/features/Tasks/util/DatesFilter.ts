import { IDateRangeCheck } from "../models/DateRangeModel";


export class DateRangeCheck implements IDateRangeCheck {
    constructor(private startDate: Date, private endDate: Date) {}

    isBetween(date: Date): boolean {
        return date.getDate() >= this.startDate.getDate() && 
               date.getDate() <= this.endDate.getDate();
    }
}