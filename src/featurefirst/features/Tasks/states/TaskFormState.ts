import { IState } from "../../../models/PageState";
import { ITaskFormScreen } from "../models/TaskScreen";


export class TaskFormState implements IState {
    constructor(
        private taskFormScreen: ITaskFormScreen
    ) {}

    load(): void {
        this.taskFormScreen.renderDataToScreen({});
    }
    exit(): void {
        this.taskFormScreen.removeAll();
    }
}