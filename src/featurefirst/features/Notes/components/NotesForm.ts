import { IComponentRemovable } from "../../../models/IComponentModels";

export const notesForm: HTMLFormElement = document.getElementById("form-note-state")! as HTMLFormElement;

export const notesFormBtn: HTMLElement = document.getElementById("dialog-note-theme")!;



export class NotesFormBtnComponent implements IComponentRemovable<string> {
    private noteFormBtn: HTMLElement;

    constructor() {
        this.noteFormBtn = document.createElement("p");
        this.noteFormBtn.id = "dialog-note-theme";
        this.noteFormBtn.classList.add("dialog-theme-selection");
        this.noteFormBtn.setAttribute("data-page", "unselected");
    }

    remove(): void {
        this.noteFormBtn.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.noteFormBtn);
    }
    setValue(value: string): void {
        this.noteFormBtn.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.noteFormBtn;
    }

}