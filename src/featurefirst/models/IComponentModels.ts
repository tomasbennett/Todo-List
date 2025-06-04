export interface IComponent {
    render(container: HTMLElement): void;

    getHTML(): HTMLElement;
}

export interface IComponentRemovable extends IComponent{
    remove(): void;
}

export interface IComponentEventListener extends IComponent {
    // setEvent(...event: IEventCommand[]): void;

    addListener(): void;

    removeListener(): void;
}

export interface IComponentEventRemovable extends IComponentRemovable, IComponentEventListener {}


// export abstract class ComponentEventTemplate implements IComponentEventListener {
//     constructor() {
//     }
    
//     abstract addListener(): void;

//     abstract removeListener(): void;

//     abstract render(): void;

//     abstract getHTML(): HTMLElement;

// }
