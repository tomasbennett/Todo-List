import { IComponentRemovable } from "./IComponentModels";
import { IState } from "./PageState";

export interface IRegistry<T, K> {
    set(key: T, val: K): void;

    getByID(key: T): K;

    getAll(): K[];

    removeByID(key: T): void;

    removeAll(): void;
}

export interface IMultipleRegistry<T, K> {
    set(key: T, val: K): void;

    getByID(key: T): Array<K>;

    getAll(): Array<K[]>;

    removeByID(key: T): void;

    removeAll(): void;
}


// export type IPageRegistry = IRegistry<HTMLElement, IState>;

export type IEventRegistry<T extends HTMLElement, K extends keyof HTMLElementEventMap> = IRegistry<T, (e: HTMLElementEventMap[K]) => void>;

export type ISubmitEventRegistry = IEventRegistry<HTMLFormElement, "submit">;
export type IChangeEventRegistry = IEventRegistry<HTMLInputElement, "change">;
export type IClickEventRegistry = IEventRegistry<HTMLElement, "click">;

export type IScreenComponentRegistry = IRegistry<HTMLElement, IComponentRemovable<any>>; 

export interface ILocalStorageRegistry<T extends { id: number }> extends IRegistry<number, T> {}

// export type IScreenComponents = IRegistry<HTMLElement, IComponentRemovab>;

// export type IScreenEvents = IRegistry<HTMLElement, IComp


// export abstract class MapRegistryTemplate<T, K> implements IRegistry<T, K> {
//     constructor(protected map: Map<T, K>) {}

//     set(key: T, val: K): void {
//         this.map.set(key, val);
//     }
//     getByID(key: T): K {
//         return this.map.get(key)!;
//     }
//     getAll(): K[] {
//         return Array.from(this.map.values());
//     }
//     removeByID(key: T): void {
//         this.map.delete(key);
//     }
//     removeAll(): void {
//         for (const k of this.map.keys()) {
//             this.removeByID(k);
//         }
//     }
// }
