import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IIDRandomSelect, ISymbolIDGenerator } from "../../../models/IGenerator";
import { IClickEventRegistry, ILocalStorageRegistry } from "../../../models/Registry";
import { IProject } from "../models/ProjectsModel";

export class ProjectTitle implements IComponentRemovable<string> {
    private projectTitle: HTMLElement;

    constructor() {
        this.projectTitle = document.createElement("p");
        this.projectTitle.classList.add("sidebar-option-title");
    }
    
    remove(): void {
        this.projectTitle.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.projectTitle);
    }
    setValue(value: string): void {
        this.projectTitle.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.projectTitle;
    }
}


export class ProjectRemoveBtn implements IComponentRemovable<string> {
    private removeButton: HTMLElement;

    constructor() {
        this.removeButton = document.createElement("div");
        this.removeButton.classList.add("remove-sidebar-option");
    }

    remove(): void {
        this.removeButton.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.removeButton);
    }
    setValue(value: string): void {
        this.removeButton.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.removeButton;
    }

}



export class ProjectContainer implements IComponentRemovable<void> {
    private innerContainer: HTMLElement;

    private svgContainer: HTMLElement;
    private svg: SVGElement;
    private svgUsePath: SVGUseElement;

    private notificationNumber: HTMLElement;
    
    
    constructor(
        private projectTitle: IComponentRemovable<string>,
        private allSymbols: ISymbolIDGenerator,
        private pickRandomly: IIDRandomSelect,

        private projID: number
    ) {
        const randomColours: string[] = ["rgb(216, 76, 100)", "rgb(77, 200, 241)", "rgb(179, 179, 38)"];

        this.innerContainer = document.createElement("div");
        this.innerContainer.classList.add("sidebar-option");

        this.innerContainer.setAttribute("data-page", "unselected");

        this.innerContainer.setAttribute("data-project-id", this.projID.toString());


        const XLINK_NS = 'http://www.w3.org/1999/xlink';

        this.svgContainer = document.createElement("div");
        this.svgContainer.classList.add("sidebar-svg-container");

        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.style.fill = randomColours[Math.floor(Math.random() * 3)];

        this.svgUsePath = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        
        const symbolIds: string[] = this.allSymbols.generate(document.getElementById("project-svg-img-container")!);
        this.svgUsePath.setAttributeNS(XLINK_NS, "href", `#${this.pickRandomly.pickRandom(symbolIds)}`); 


        this.notificationNumber = document.createElement("div");
        this.notificationNumber.classList.add("sidebar-notification-number-container");
        this.notificationNumber.setAttribute("data-notification", "inactive");

        
    }
    
    remove(): void {
        this.innerContainer.remove();
    }
    render(container: HTMLElement): void {
        this.svg.appendChild(this.svgUsePath);
        this.svgContainer.appendChild(this.svg);
        this.innerContainer.appendChild(this.svgContainer);

        this.projectTitle.render(this.innerContainer);
        this.innerContainer.appendChild(this.notificationNumber);
        

        container.appendChild(this.innerContainer);
    }
    setValue(value: void): void {
        
    }
    getHTML(): HTMLElement {
        return this.innerContainer;
    }
}