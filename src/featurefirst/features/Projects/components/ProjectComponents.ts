import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IIDRandomSelect, ISymbolIDGenerator } from "../../../models/IGenerator";
import { IClickEventRegistry } from "../../../models/Registry";

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


export class ProjectContainer implements IComponentEventRemovable<void> {
    private innerContainer: HTMLElement;

    private svgContainer: HTMLElement;
    private svg: SVGElement;
    private svgUsePath: SVGUseElement;

    private notificationNumber: HTMLElement;
    private removeButton: HTMLElement;
    
    constructor(
        private projectTitle: IComponentRemovable<string>,
        private allSymbols: ISymbolIDGenerator,
        private pickRandomly: IIDRandomSelect,
        private eventsRegistry: IClickEventRegistry
    ) {
        this.innerContainer = document.createElement("div");
        this.innerContainer.classList.add("sidebar-option");

        const XLINK_NS = 'http://www.w3.org/1999/xlink';

        this.svgContainer = document.createElement("div");
        this.svgContainer.classList.add("sidebar-svg-container");

        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        this.svgUsePath = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        
        const symbolIds: string[] = this.allSymbols.generate(document.getElementById("project-svg-img-container")!);
        this.svgUsePath.setAttributeNS(XLINK_NS, "href", `#${this.pickRandomly.pickRandom(symbolIds)}`); 


        this.notificationNumber = document.createElement("div");
        this.notificationNumber.classList.add("sidebar-notification-number-container");
        this.notificationNumber.setAttribute("data-notification", "inactive");

        this.removeButton = document.createElement("div");
        this.removeButton.classList.add("remove-sidebar-option");
        this.removeButton.textContent = "X";
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
        this.innerContainer.appendChild(this.removeButton);

        container.appendChild(this.innerContainer);
    }
    setValue(value: void): void {
    }
    getHTML(): HTMLElement {
        return this.innerContainer;
    }
    addListener(): void {
        this.eventsRegistry.set(this.innerContainer, () => {

        });
        this.eventsRegistry.set(this.removeButton, () => {

        });
    }
    removeListener(): void {
        this.eventsRegistry.removeByID(this.innerContainer);
        this.eventsRegistry.removeByID(this.removeButton);
    }
}