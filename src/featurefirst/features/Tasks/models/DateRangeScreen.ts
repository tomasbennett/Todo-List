import { IScreenGroupingCriteria } from "../../../models/OpenCloseModel";

export interface IDateRange {
    fromDate: Date,
    toDate: Date
}

export type IDateRangeScreen = IScreenGroupingCriteria<IDateRange>;