import { IComponentRemovable } from "../Utility/HTMLElement";
import { Priority } from "../Utility/StorageSchemas";

export class TaskEntryContainer implements IComponentRemovable {
    private taskEntryContainer: HTMLElement;

    constructor(private container: HTMLElement, private importance: Priority, private id: string) {
        this.taskEntryContainer = document.createElement("div");
        this.taskEntryContainer.classList.add("task-entry-container")
        this.taskEntryContainer.setAttribute("data-importance", this.importance);
        this.taskEntryContainer.setAttribute("data-id", this.id);

    }
    
    removeElem(): void {
        this.taskEntryContainer.remove();
    }
    render(): void {
        this.container.appendChild(this.taskEntryContainer);
    }
    getHTML(): HTMLElement {
        return this.taskEntryContainer;
    }

}


export class TaskEntryCompletedLabel implements IComponentRemovable {
    private completedLabel: HTMLElement;

    constructor(private container: HTMLElement) {
        this.completedLabel = document.createElement("label");

    }
    
    removeElem(): void {
        this.completedLabel.remove();
    }
    render(): void {
        this.container.appendChild(this.completedLabel);
    }
    getHTML(): HTMLElement {
        return this.completedLabel;
    }
}


export class TaskEntryCompletedInput implements IComponentRemovable {
    private completedInput: HTMLInputElement;

    constructor(private labelContainer: HTMLElement) {
        this.completedInput = document.createElement("input");
        this.completedInput.type = "checkbox";

    }
    
    removeElem(): void {
        this.completedInput.remove();
    }
    render(): void {
        this.labelContainer.appendChild(this.completedInput);
    }
    getHTML(): HTMLElement {
        return this.completedInput;
    }
}












export class TaskEntryTitle implements IComponentRemovable {
    private taskEntryTitle: HTMLElement;

    constructor(private container: HTMLElement, private completed: string, private title: string) {
        this.taskEntryTitle = document.createElement("p");
        this.taskEntryTitle.classList.add("task-entry-title", this.completed);
        this.taskEntryTitle.textContent = this.title;
    }
    
    removeElem(): void {
        this.taskEntryTitle.remove();
    }
    render(): void {
        this.container.appendChild(this.taskEntryTitle);
    }
    getHTML(): HTMLElement {
        return this.taskEntryTitle;
    }

}



export class TaskEntryDesc implements IComponentRemovable {
    private taskEntryDesc: HTMLElement;

    constructor(private container: HTMLElement, private desc: string) {
        this.taskEntryDesc = document.createElement("p");
        this.taskEntryDesc.classList.add("task-entry-description");
        this.taskEntryDesc.textContent = this.desc;
    }
    
    removeElem(): void {
        this.taskEntryDesc.remove();
    }
    render(): void {
        this.container.appendChild(this.taskEntryDesc);
    }
    getHTML(): HTMLElement {
        return this.taskEntryDesc;
    }

}



export class TaskEntryDate implements IComponentRemovable {
    private taskEntryDate: HTMLElement;

    constructor(private container: HTMLElement, private date: string) {
        this.taskEntryDate = document.createElement("p");
        this.taskEntryDate.classList.add("due-date");
        this.taskEntryDate.textContent = this.date;
    }
    
    removeElem(): void {
        this.taskEntryDate.remove();
    }
    render(): void {
        this.container.appendChild(this.taskEntryDate);
    }
    getHTML(): HTMLElement {
        return this.taskEntryDate;
    }

}



export class TaskEntryEdit implements IComponentRemovable {
    private taskEntryEdit: HTMLElement;

    private editSVG: SVGElement;
    private editPath: SVGPathElement;

    constructor(private container: HTMLElement) {
        const SVG_NS = "http://www.w3.org/2000/svg";

        this.taskEntryEdit = document.createElement("div");
        this.taskEntryEdit.classList.add("task-edit-svg-container");
        
        this.editSVG = document.createElementNS(SVG_NS, "svg");
        this.editSVG.setAttribute("viewBox", "0 0 122.88 122.88")
        
        this.editPath = document.createElementNS(SVG_NS, "path");
        this.editPath.setAttribute("d", "M14.1,0h94.67c7.76,0,14.1,6.35,14.1,14.1v94.67c0,7.75-6.35,14.1-14.1,14.1H14.1c-7.75,0-14.1-6.34-14.1-14.1 V14.1C0,6.34,6.34,0,14.1,0L14.1,0z M81.35,28.38L94.1,41.14c1.68,1.68,1.68,4.44,0,6.11l-7.06,7.06L68.17,35.44l7.06-7.06 C76.91,26.7,79.66,26.7,81.35,28.38L81.35,28.38z M52.34,88.98c-5.1,1.58-10.21,3.15-15.32,4.74c-12.01,3.71-11.95,6.18-8.68-5.37 l5.16-18.2l0,0l-0.02-0.02L64.6,39.01l18.87,18.87l-31.1,31.11L52.34,88.98L52.34,88.98z M36.73,73.36l12.39,12.39 c-3.35,1.03-6.71,2.06-10.07,3.11c-7.88,2.42-7.84,4.05-5.7-3.54L36.73,73.36L36.73,73.36z");
    
    }
    
    removeElem(): void {
        this.taskEntryEdit.remove();
    }
    render(): void {
        this.container.appendChild(this.taskEntryEdit);
        this.taskEntryEdit.appendChild(this.editSVG);
        this.editSVG.appendChild(this.editPath);
    }
    getHTML(): HTMLElement {
        return this.taskEntryEdit;
    }

}



export class TaskEntryDel implements IComponentRemovable {
    private taskEntryDel: HTMLElement;

    private delSVG: SVGElement;
    private delPath: SVGPathElement;

    constructor(private container: HTMLElement) {
        const SVG_NS = "http://www.w3.org/2000/svg";

        this.taskEntryDel = document.createElement("div");
        this.taskEntryDel.classList.add("task-edit-svg-container");
        
        this.delSVG = document.createElementNS(SVG_NS, "svg");
        this.delSVG.setAttribute("viewBox", "0 0 109.484 122.88")
        
        this.delPath = document.createElementNS(SVG_NS, "path");
        this.delPath.setAttribute("d", "M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z");
    
    }
    
    removeElem(): void {
        this.taskEntryDel.remove();
    }
    render(): void {
        this.container.appendChild(this.taskEntryDel);
        this.taskEntryDel.appendChild(this.delSVG);
        this.delSVG.appendChild(this.delPath);
    }
    getHTML(): HTMLElement {
        return this.taskEntryDel;
    }

}