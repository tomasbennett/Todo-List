import { IComponent } from "../Utility/HTMLElement";



export class TasksPageComponent implements IComponent {
    private taskPageButton: HTMLElement;

    constructor() {
        this.taskPageButton = document.getElementById("dialog-task-theme")!;
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.taskPageButton;
    }

}






export class NotePageComponent implements IComponent {
    private notePageButton: HTMLElement;

    constructor() {
        this.notePageButton = document.getElementById("dialog-note-theme")!;
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.notePageButton;
    }

}




export class ProjectsPageComponent implements IComponent {
    private projectsPageButton: HTMLElement;

    constructor() {
        this.projectsPageButton = document.getElementById("dialog-project-theme")!;
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.projectsPageButton;
    }

}