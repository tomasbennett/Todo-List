import { IComponentRemovable } from "../../../models/IComponentModels";

export const tasksForm: HTMLFormElement = document.getElementById("form-task-state")! as HTMLFormElement;

export const tasksFormBtn: HTMLElement = document.getElementById("dialog-task-theme")!;


export class TaskFormComponent implements IComponentRemovable<void> {
    private formElement: HTMLFormElement;

    constructor() {
        this.formElement = document.getElementById("form-task-state")! as HTMLFormElement;
    }

    remove(): void {
        this.formElement.style.display = "none";
    }
    render(container: HTMLElement): void {
        this.formElement.style.display = "flex";
    }

    setValue(value: void): void {
    }

    getHTML(): HTMLElement {
        return this.formElement;
    }
}