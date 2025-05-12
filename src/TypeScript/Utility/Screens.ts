import { IComponent, IComponentRemovable, IComponentEventListener } from "./HTMLElement";
import { PageStateManager } from "./PageState";

export class ScreenTemplate {
    protected components!: IComponent[];
    protected componentsRemovable!: IComponentRemovable[];
    protected componentsEvent!: IComponentEventListener[];

    protected stateManager: PageStateManager;

    constructor(stateManager: PageStateManager) {
        this.stateManager = stateManager;
    }

    screenComponents(): IComponent[] {
        return this.components;
    }

    screenComponentsRemovable(): IComponentRemovable[] {
        return this.componentsRemovable;
    }

    screenComponentsEvent(): IComponentEventListener[] {
        return this.componentsEvent;
    }

    render(): void {
        this.components.forEach((elem) => {elem.render()});
    }

    remove(): void {
        this.componentsRemovable.forEach((elem) => {elem.removeElem()});
    }

    addEventListeners(): void {
        this.componentsEvent.forEach((elem) => {elem.addEventListeners(this.stateManager)});
    }

    removeEventListeners(): void {
        this.componentsEvent.forEach((elem) => {elem.removeEventListeners()});
    }
}



export abstract class ScreenFactory {
    protected stateManager: PageStateManager;

    constructor(stateManager: PageStateManager) {
        this.stateManager = stateManager;
    }

    instantiate(): ScreenTemplate {
        const screen: ScreenTemplate = this.create();
        screen.render();
        screen.addEventListeners();
        return screen;
    }

    abstract create(): ScreenTemplate;
}




