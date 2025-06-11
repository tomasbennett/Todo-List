import { IEventRegistry } from "./Registry";

export interface IEventBus<T extends HTMLElement, K extends keyof HTMLElementEventMap>  {
    addListener(key: HTMLElement): void;

    removeListener(key: HTMLElement): void;
}


// export abstract class EventBusTemplate<T extends HTMLElement, K extends Event> implements IEventBus {

//     constructor(private eventRegistry: IEventRegistry<T, K>) {}

//     addListener(key: T): void {
//         const func: (e: K) => void = this.eventRegistry.getByID(key)!;
//         key.addEventListener(this.event, func);
        
//     }
//     removeListener(key: T): void {
//         const func: (e: K) => void = this.eventRegistry.getByID(key)!;
//         key.removeEventListener(this.event, func);
//     }

// }