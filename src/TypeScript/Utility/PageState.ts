export interface PageState {
    load(): void;

    exit(): void;
}

export interface IPageStateManager {
    setState(state: PageState): void;

    getState(): PageState;

    load(): void;

    exit(): void;
}

export class PageStateManager implements IPageStateManager {
    private state!: PageState;

    setState(state: PageState): void {
        this.state = state;
    }

    getState(): PageState {
        return this.state;
    }

    load(): void {
        this.state.load();
    }

    exit(): void {
        this.state.exit();
    }
}





