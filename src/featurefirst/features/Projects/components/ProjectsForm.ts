import { IComponentRemovable } from "../../../models/IComponentModels";

export const projectsForm: HTMLFormElement = document.getElementById("form-project-state")! as HTMLFormElement;

export const projectsFormBtn: HTMLElement = document.getElementById("dialog-project-theme")!;


export class ProjectFormBtnComponent implements IComponentRemovable<string> {
    private projFormBtn: HTMLElement;

    constructor() {
        this.projFormBtn = document.createElement("p");
        this.projFormBtn.id = "dialog-project-theme";
        this.projFormBtn.classList.add("dialog-theme-selection");
        this.projFormBtn.setAttribute("data-page", "unselected");
    }

    remove(): void {
        this.projFormBtn.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.projFormBtn);
    }
    setValue(value: string): void {
        this.projFormBtn.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.projFormBtn;
    }

}