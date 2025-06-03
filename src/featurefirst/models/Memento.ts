export interface IMemento<T> {
    changeState(nextState: T): void;

    getLatestState(): T | undefined;
}


export type IPageChangeMemento = IMemento<HTMLElement>;