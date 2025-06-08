import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IClickEventRegistry } from "../../../models/Registry";

export class NoteTitle implements IComponentRemovable<string> {
    private noteTitle: HTMLElement;
    
    constructor() {
        this.noteTitle = document.createElement("div");
        this.noteTitle.classList.add("note-title");
    }
    
    remove(): void {
        this.noteTitle.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.noteTitle);
    }
    setValue(value: string): void {
        this.noteTitle.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.noteTitle;
    }
}


export class NoteDesc implements IComponentRemovable<string> {
    private noteDesc: HTMLElement;
    
    constructor() {
        this.noteDesc = document.createElement("div");
        this.noteDesc.classList.add("note-body");
    }
    
    remove(): void {
        this.noteDesc.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.noteDesc);
    }
    setValue(value: string): void {
        this.noteDesc.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.noteDesc;
    }
}


export class NoteRemoveBtn implements IComponentEventRemovable<string> {
    private noteRemoveBtn: HTMLButtonElement;
    
    constructor(private eventRegistry: IClickEventRegistry) {
        this.noteRemoveBtn = document.createElement("button");
        this.noteRemoveBtn.type = "button";
        this.noteRemoveBtn.classList.add("note-del-btn");
    }
    addListener(): void {
        this.eventRegistry.set(this.noteRemoveBtn, () => {});
    }
    removeListener(): void {
        this.eventRegistry.removeByID(this.noteRemoveBtn);
    }
    
    remove(): void {
        this.noteRemoveBtn.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.noteRemoveBtn);
    }
    setValue(value: string): void {
        this.noteRemoveBtn.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.noteRemoveBtn;
    }
}








export class NoteContainer implements IComponentRemovable<void> {
    private innerContainer: HTMLElement;


    
    constructor(
        private noteTitle: IComponentRemovable<string>,
        private noteBody: IComponentRemovable<string>,
        private noteRemoveBtn: IComponentEventRemovable<string>

    ) {
        this.innerContainer = document.createElement("div");
        this.innerContainer.classList.add("note-container");

        this.noteRemoveBtn.setValue("X");
    }
    
    remove(): void {
        this.innerContainer.remove();
    }
    render(container: HTMLElement): void {
        this.noteRemoveBtn.render(this.innerContainer);
        this.noteTitle.render(this.innerContainer);
        this.noteBody.render(this.innerContainer);

        container.appendChild(this.innerContainer);
    }
    setValue(value: void): void {
    }
    getHTML(): HTMLElement {
        return this.innerContainer;
    }
}