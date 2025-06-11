import { ICommand } from "../../../models/CommandModel";
import { IState, IStateManager } from "../../../models/PageState";
import { ILocalStorageRegistry } from "../../../models/Registry";

export class ExitStateCommand<T extends { id: number }> implements ICommand {
    constructor(
        private newState: IState<T>,
        private stateManager: IStateManager<T>,
        private localStorage: ILocalStorageRegistry<T>
    ) {}

    execute(): void {
        this.stateManager.exit();
        this.stateManager.set(this.newState);

        const data: T[] = this.localStorage.getAll();
        
        for (const d of data) {
            this.stateManager.load(d);
        }
    }
    
}