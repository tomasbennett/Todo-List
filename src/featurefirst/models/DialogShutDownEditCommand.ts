import { ICommand } from "./CommandModel";
import { IScreenGroupingCriteria } from "./OpenCloseModel";

export interface IDialogShutdownEditCommand<Task> extends ICommand {
    setTaskFormScreen(taskFormScreen: IScreenGroupingCriteria<Task>): void;
}