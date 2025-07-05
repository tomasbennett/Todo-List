import { ICommand } from "../models/CommandModel";
import { IDialogShutdownEditCommand } from "../models/DialogShutDownEditCommand";
import { IScreenGroupingCriteria } from "../models/OpenCloseModel";
import { IStateManager } from "../models/PageState";
import { IScreenComponentRegistry } from "../models/Registry";

export class DialogShutdownCommand implements ICommand {
    constructor(
        private dialogPageStateManager: IStateManager,
        private pageComponentRegistry: IScreenComponentRegistry,

    ) {}

    execute(): void {
        this.dialogPageStateManager.exit();
        
        this.pageComponentRegistry.removeAll();
    }
}


export class DialogShutdownEdit<Task> implements IDialogShutdownEditCommand<Task> {
    private taskScreen!: IScreenGroupingCriteria<Task>;

    constructor(
        private pageComponentRegistry: IScreenComponentRegistry,

        
    ) {}
    setTaskFormScreen(taskFormScreen: IScreenGroupingCriteria<Task>): void {
        this.taskScreen = taskFormScreen;
    }
    execute(): void {
        this.pageComponentRegistry.removeAll();

        this.taskScreen.removeAll();
    }
}