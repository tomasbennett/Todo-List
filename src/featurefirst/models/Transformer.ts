export interface ITransformer<T, K> {
    transform(valueToBeTransformed: T): K;
}

export type IDateToString = ITransformer<Date, string>;

export type IStringToDate = ITransformer<string, Date>;

