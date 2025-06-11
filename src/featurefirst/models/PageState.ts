export interface IState {
    load(): void;

    exit(): void;
}


export interface IStateManager extends IState {
    set(newState: IState): void;
}