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



export class TaskFormBtnComponent implements IComponentRemovable<string> {
    private taskFormBtn: HTMLElement;

    constructor() {
        this.taskFormBtn = document.createElement("p");
        this.taskFormBtn.id = "dialog-task-theme";
        this.taskFormBtn.classList.add("dialog-theme-selection");
        
    }

    remove(): void {
        this.taskFormBtn.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.taskFormBtn);
    }
    setValue(value: string): void {
        this.taskFormBtn.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.taskFormBtn;
    }

}