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
        this.editSVG.appendChild(this.editPath);
        this.taskEntryEdit.appendChild(this.editSVG);

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
        this.taskEntryDel.classList.add("task-del-svg-container");
        
        this.delSVG = document.createElementNS(SVG_NS, "svg");
        this.delSVG.setAttribute("viewBox", "0 0 122.88 122.88")
        
        this.delPath = document.createElementNS(SVG_NS, "path");
        this.delPath.setAttribute("d", "M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z");
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
        this.delSVG.appendChild(this.delPath);
        this.taskEntryDel.appendChild(this.delSVG);

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


        if (value.completed) {
            this.title.classList.remove("incomplete");
            this.title.classList.add("complete");
        } else {
            this.title.classList.remove("complete");
            this.title.classList.add("incomplete");
        }

        this.title.classList.add("task-entry-title");
        this.title.textContent = value.title;
        this.description.textContent = value.body;
        this.date.textContent = value.date.toDateString();
    }
    
    remove(): void {
        this.container.remove();
    }
    render(outerContainer: HTMLElement): void {
        this.container.appendChild(this.label);
        this.inputComplete.render(this.label);
        this.container.appendChild(this.title);
        this.container.appendChild(this.description);
        this.container.appendChild(this.date);
        this.editTask.render(this.container);

        this.delTask.render(this.container);

        


        outerContainer.appendChild(this.container);
    }
    getHTML(): HTMLElement {
        return this.container;
    }
}