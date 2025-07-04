export interface IState {
    load(): void;

    exit(): void;
}


export interface IStateCriteria<LoadInData extends { id: number }> {
    load(data: LoadInData): void;

    exit(): void;
}


export interface IStateManager extends IState {
    set(newState: IState): void;

    getState(): IState;
}

export interface IStateManagerCriteria<LoadInData extends { id: number }> extends IStateCriteria<LoadInData> {
    set(newState: IStateCriteria<LoadInData>): void;
}