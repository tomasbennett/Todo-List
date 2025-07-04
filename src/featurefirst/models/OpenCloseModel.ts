export interface IOpenClose {
    open(): void;

    close(): void;
}


export type IIDOpenClose = IOpenClose;



export interface IScreenGroupingCriteria<ScreenDataType> {
    renderDataToScreen(data: ScreenDataType): void;

    removeAll(): void;
}