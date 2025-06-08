import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IClickEventRegistry, IEventRegistry } from "../../../models/Registry";
import { ITask } from "../models/TaskModels";


export class InputCompletedTask implements IComponentEventRemovable<boolean> {
    private inputCompleted: HTMLInputElement;

    constructor(private eventRegistry: IClickEventRegistry) {
        this.inputCompleted = document.createElement("input");
        this.inputCompleted.type = "checkbox";
    }
    setValue(value: boolean): void {
        this.inputCompleted.checked = value;
    }

    getHTML(): HTMLElement {
        return this.inputCompleted;
    }
    
    remove(): void {
        this.inputCompleted.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.inputCompleted);
    }
    addListener(): void {
        this.eventRegistry.set(this.inputCompleted, () => {});
    }
    removeListener(): void {
        this.eventRegistry.removeByID(this.inputCompleted);
    }
}


export class EditTask implements IComponentEventRemovable<void> {
    private taskEntryEdit: HTMLElement;
    private editSVG: SVGElement;
    private editPath: SVGPathElement;

    constructor(private eventRegistry: IClickEventRegistry) {

        const SVG_NS = "http://www.w3.org/2000/svg";

        this.taskEntryEdit = document.createElement("div");
        this.taskEntryEdit.classList.add("task-edit-svg-container", "edit-button");
        
        this.editSVG = document.createElementNS(SVG_NS, "svg");
        this.editSVG.setAttribute("viewBox", "0 0 122.88 122.88")
        
        this.editPath = document.createElementNS(SVG_NS, "path");
        this.editPath.setAttribute("d", "M14.1,0h94.67c7.76,0,14.1,6.35,14.1,14.1v94.67c0,7.75-6.35,14.1-14.1,14.1H14.1c-7.75,0-14.1-6.34-14.1-14.1 V14.1C0,6.34,6.34,0,14.1,0L14.1,0z M81.35,28.38L94.1,41.14c1.68,1.68,1.68,4.44,0,6.11l-7.06,7.06L68.17,35.44l7.06-7.06 C76.91,26.7,79.66,26.7,81.35,28.38L81.35,28.38z M52.34,88.98c-5.1,1.58-10.21,3.15-15.32,4.74c-12.01,3.71-11.95,6.18-8.68-5.37 l5.16-18.2l0,0l-0.02-0.02L64.6,39.01l18.87,18.87l-31.1,31.11L52.34,88.98L52.34,88.98z M36.73,73.36l12.39,12.39 c-3.35,1.03-6.71,2.06-10.07,3.11c-7.88,2.42-7.84,4.05-5.7-3.54L36.73,73.36L36.73,73.36z");
    }
    setValue(value: void): void {
    }

    getHTML(): HTMLElement {
        return this.taskEntryEdit;
    }
    
    remove(): void {
        this.taskEntryEdit.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.taskEntryEdit);
    }
    addListener(): void {
        this.eventRegistry.set(this.taskEntryEdit, () => {});
    }
    removeListener(): void {
        this.eventRegistry.removeByID(this.taskEntryEdit);
    }
}


export class DeleteTask implements IComponentEventRemovable<void> {
    private taskEntryDel: HTMLElement;
    private delSVG: SVGElement;
    private delPath: SVGPathElement;

    constructor(private eventRegistry: IClickEventRegistry) {
        const SVG_NS = "http://www.w3.org/2000/svg";

        this.taskEntryDel = document.createElement("div");
        this.taskEntryDel.classList.add("task-edit-svg-container", "edit-button");
        
        this.delSVG = document.createElementNS(SVG_NS, "svg");
        this.delSVG.setAttribute("viewBox", "0 0 122.88 122.88")
        
        this.delPath = document.createElementNS(SVG_NS, "path");
        this.delPath.setAttribute("d", "M14.1,0h94.67c7.76,0,14.1,6.35,14.1,14.1v94.67c0,7.75-6.35,14.1-14.1,14.1H14.1c-7.75,0-14.1-6.34-14.1-14.1 V14.1C0,6.34,6.34,0,14.1,0L14.1,0z M81.35,28.38L94.1,41.14c1.68,1.68,1.68,4.44,0,6.11l-7.06,7.06L68.17,35.44l7.06-7.06 C76.91,26.7,79.66,26.7,81.35,28.38L81.35,28.38z M52.34,88.98c-5.1,1.58-10.21,3.15-15.32,4.74c-12.01,3.71-11.95,6.18-8.68-5.37 l5.16-18.2l0,0l-0.02-0.02L64.6,39.01l18.87,18.87l-31.1,31.11L52.34,88.98L52.34,88.98z M36.73,73.36l12.39,12.39 c-3.35,1.03-6.71,2.06-10.07,3.11c-7.88,2.42-7.84,4.05-5.7-3.54L36.73,73.36L36.73,73.36z");
    }
    setValue(value: void): void {
        
    }

    getHTML(): HTMLElement {
        return this.taskEntryDel;
    }
    
    remove(): void {
        this.taskEntryDel.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.taskEntryDel);
    }
    addListener(): void {
        this.eventRegistry.set(this.taskEntryDel, () => {});
    }
    removeListener(): void {
        this.eventRegistry.removeByID(this.taskEntryDel);
    }
}


export class TaskContainer implements IComponentRemovable<ITask> {
    private container: HTMLElement;

    // private inputComplete: IComponentEventRemovable;
    // private editTask: IComponentEventRemovable;
    // private delTask: IComponentEventRemovable;

    private label: HTMLElement;
    private title: HTMLElement;
    private description: HTMLElement;
    private date: HTMLElement;

    constructor(
        private inputComplete: IComponentEventRemovable<boolean>,
        private editTask: IComponentEventRemovable<void>,
        private delTask: IComponentEventRemovable<void> 
    ) {
        this.container = document.createElement("div");
        this.container.classList.add("task-entry-container", "mod-container");

        // this.editTask = new EditTask();
        // this.delTask = new DeleteTask();
        
        this.label = document.createElement("label");

        // this.inputComplete = new InputCompletedTask();

        this.title = document.createElement("p");
        
        

        this.description = document.createElement("p");
        this.description.classList.add("task-entry-description");
        

        this.date = document.createElement("p");
        this.date.classList.add("due-date");
        
    }
    setValue(value: { body: string; title: string; id: number; date: Date; priority: "low" | "medium" | "high"; completed: boolean; }): void {
        
        this.container.setAttribute("data-importance", value.priority);
        this.container.setAttribute("data-id", value.id.toString());

        this.title.classList.add("task-entry-title", value.completed ? "complete" : "incomplete");
        this.title.textContent = value.title;
        this.description.textContent = value.body;
        this.date.textContent = value.date.toDateString();
    }
    
    remove(): void {
        this.container.remove();
    }
    render(outerContainer: HTMLElement): void {
        this.delTask.render(this.container);
        this.editTask.render(this.container);

        this.container.appendChild(this.date);
        this.container.appendChild(this.description);
        this.container.appendChild(this.title);
        
        this.inputComplete.render(this.label);

        this.container.appendChild(this.label);

        outerContainer.appendChild(this.container);
    }
    getHTML(): HTMLElement {
        return this.container;
    }
}