import { IEventBus } from "../models/IEventBus";
import { IEventRegistry } from "../models/Registry";

export class EventBus<T extends HTMLElement, K extends keyof HTMLElementEventMap> implements IEventBus<T, K> {
    constructor(private eventRegistry: IEventRegistry<T, K>, private event: K) {}

    addListener(key: T): void {
        const func: (e: HTMLElementEventMap[K]) => void = this.eventRegistry.getByID(key);
        key.addEventListener(this.event, func);
    }
    removeListener(key: T): void {
        const func: (e: HTMLElementEventMap[K]) => void = this.eventRegistry.getByID(key);
        key.removeEventListener(this.event, func);
    }
}