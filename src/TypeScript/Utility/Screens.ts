import { ClickEventObserver } from "./EventObserver";
import { IComponent, IComponentRemovable } from "./HTMLElement";

import { IPageStateManager } from "./PageState";

export class ScreenTemplate {
    private components: IComponent[];
    private componentsRemovable: IComponentRemovable[];
    private clickEventObservers: ClickEventObserver[];

    private stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;

        this.components = [];
        this.componentsRemovable = [];
        this.clickEventObservers = [];
    }

    setComponent(...component: IComponent[]): void {
        for (const c of component) {
            this.components.push(c);
        }
    }

    render(): void {
        this.components.forEach((elem) => {elem.render()});
    }

    setRemove(...remove: IComponentRemovable[]): void {
        for (const r of remove) {
            this.componentsRemovable.push(r);
        }
    }

    remove(): void {
        this.componentsRemovable.forEach((elem) => {elem.removeElem()});
    }

    setEventListener(...event: ClickEventObserver[]): void {
        for (const e of event) {
            this.clickEventObservers.push(e);
        }
    }

    addEventListeners(): void {
        this.clickEventObservers.forEach((elem) => {elem.addEventListeners()});
    }

    setEventRemove(...eventRemovable: ClickEventObserver[]): void {
        for (const eRem of eventRemovable) {
            this.clickEventObservers.push(eRem);
        }
    }

    removeEventListeners(): void {
        this.clickEventObservers.forEach((elem) => {elem.removeEventListeners()});
    }
}



export abstract class ScreenFactory {
    protected stateManager: IPageStateManager;

    constructor(stateManager: IPageStateManager) {
        this.stateManager = stateManager;
    }

    instantiate(): ScreenTemplate {
        const screen: ScreenTemplate = this.create();
        screen.render();
        screen.addEventListeners();
        return screen;
    }

    protected abstract create(): ScreenTemplate;
}




