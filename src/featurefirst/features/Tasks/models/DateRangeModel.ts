import { IDateRange } from "./DateRangeScreen";

export interface IDateRangeCheck {
    isBetween(date: Date, dateRange: IDateRange): boolean;
}