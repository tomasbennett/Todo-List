import { PageState, IPageStateManager } from "./PageState";


export class DialogPageStateManager implements IPageStateManager {
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








