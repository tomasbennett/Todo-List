import { IComponentRemovable } from "../../../models/IComponentModels";

export class NoteSidebarBtn implements IComponentRemovable<string> {
    private noteSidebarBtn: HTMLButtonElement;

    constructor() {
        this.noteSidebarBtn = document.createElement("button");
        this.noteSidebarBtn.classList.add("sidebar-notes-button");
        this.noteSidebarBtn.type = "button";
    }
    
    
    remove(): void {
        this.noteSidebarBtn.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.noteSidebarBtn);
    }
    setValue(value: string): void {
        this.noteSidebarBtn.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.noteSidebarBtn;
    }
}