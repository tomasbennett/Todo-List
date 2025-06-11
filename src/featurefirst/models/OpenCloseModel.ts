export interface IOpenClose<T> {
    open(data?: T): void;

    close(): void;
}


export type IIDOpenClose<T extends { id: number }> = IOpenClose<T>;


export interface IScreenGroupingCriteria<ScreenDataType extends { id: number }> {
    renderDataToScreen(data: ScreenDataType): void;

    removeAll(): void;
}