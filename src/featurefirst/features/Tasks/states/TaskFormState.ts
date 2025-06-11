import { IState } from "../../../models/PageState";
import { ITask } from "../models/TaskModels";


export class TaskFormState implements IState<ITask> {
    constructor(
        private form: HTMLFormElement
    ) {}

    load(): void {
        this.form.style.display = "flex";
    }
    exit(): void {
        this.form.style.display = "none";
    }
}