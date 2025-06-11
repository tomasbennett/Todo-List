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
        private eventsRegistry: IClickEventRegistry,

        private projID: number,
        private localStorage: ILocalStorageRegistry<IProject>
    ) {
        this.innerContainer = document.createElement("div");
        this.innerContainer.classList.add("sidebar-option");
        this.innerContainer.setAttribute("data-project-id", this.projID.toString());


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
        this.eventsRegistry.set(this.removeButton, (e: MouseEvent) => {
            e.stopPropagation();

            const project: IProject = this.localStorage.getByID(this.projID);

            //Creating an observer when you enter the project 
            //Please remove my html content from the screen
            //Remove my IProject element from the Projects and go through each of the tasks that belong to me and set them to --default--
            //Finally if the screenState is set to me, i.e. when we create a new screenState through the event listener above,
            //We will add to this observer of ours a specific command that will take the screenState from way up above and .exit()
            //Then it will finally .load() HOMESCREEN

            //Actual DOING:
            //DELETING PROJECT:
            //IN ALL CASES THIS.REMOVELISTENER();
            //IN ALL CASES THIS.REMOVE();
            //IN THE CASE OF THE OBSERVER WE NEED TO PLUG IN observer: IObserver
            //observer.execute() WILL REGULAR this.currentState.exit
            //Meaning we should probably make the command take a pageStateManager

        });
    }
    removeListener(): void {
        this.eventsRegistry.removeByID(this.innerContainer);
        this.eventsRegistry.removeByID(this.removeButton);
    }
}