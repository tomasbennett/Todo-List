import { IState, IStateManager } from "../models/PageState";

export class PageStateManager<T extends { id: number }> implements IStateManager<T> {
    constructor(private state: IState<T>) {}

    set(newState: IState<T>): void {
        this.state = newState;
    }
    getState(): IState<T> {
        return this.state;
    }
    load(data: T): void {
        this.state.load(data);
    }
    exit(): void {
        this.state.exit();
    }
}