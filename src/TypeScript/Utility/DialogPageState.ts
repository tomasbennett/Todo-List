import { PageState } from "./PageState";


export class DialogPageStateManager {
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








