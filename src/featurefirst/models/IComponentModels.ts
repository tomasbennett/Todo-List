export interface IComponent<T> {
    render(container: HTMLElement): void;

    setValue(value: T): void;

    getHTML(): HTMLElement;
}

export interface IComponentRemovable<T> extends IComponent<T> {
    remove(): void;
}

export interface IComponentEventListener<T, K extends any[] = []> extends IComponent<T> {
    // setEvent(...event: IEventCommand[]): void;

    addListener(...data: K): void;

    removeListener(): void;
}

export interface IComponentEventRemovable<T, K extends any[] = []> extends IComponentRemovable<T>, IComponentEventListener<T, K> {}


// export abstract class ComponentEventTemplate implements IComponentEventListener {
//     constructor() {
//     }
    
//     abstract addListener(): void;

//     abstract removeListener(): void;

//     abstract render(): void;

//     abstract getHTML(): HTMLElement;

// }
