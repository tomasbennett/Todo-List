// import { ClickEventObserver } from "./EventObserver";
// import { IPageStateManager } from "./PageState";

export interface IComponent {
    render(): void;

    getHTML(): HTMLElement;
}

export interface IComponentRemovable extends IComponent {
    removeElem(): void;
}

// export interface IComponentEventListener extends IComponent {
//     addEventListeners(stateManager: IPageStateManager): void;
    
//     removeEventListeners(): void;
// }

// export interface IComponentInteractive extends IComponentEventListener, IComponentRemovable {}










