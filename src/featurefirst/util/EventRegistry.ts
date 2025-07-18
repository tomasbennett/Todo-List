import { IChangeEventRegistry, IClickEventRegistry, IEventRegistry, ISubmitEventRegistry } from "../models/Registry";


export class PageEventRegistry implements IClickEventRegistry {
    constructor(private map: Map<HTMLElement, (e: MouseEvent) => void>) {}

    set(key: HTMLElement, val: (e: MouseEvent) => void): void {
        this.map.set(key, val);
    }
    getByID(key: HTMLElement): (e: MouseEvent) => void {
        return this.map.get(key)!;
    }
    getAll(): ((e: MouseEvent) => void)[] {
        return Array.from(this.map.values());
    }
    removeByID(key: HTMLElement): void {
        this.map.delete(key);
    }
    removeAll(): void {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
}


export class ClickEventRegistry implements IClickEventRegistry {
    constructor(private map: Map<HTMLElement, (e: MouseEvent) => void>) {}

    getByID(key: HTMLElement): (e: MouseEvent) => void {
        return this.map.get(key)!;
    }

    getAll(): ((e: MouseEvent) => void)[] {
        return Array.from(this.map.values());
    }

    removeAll(): void {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }

    set(key: HTMLElement, val: (e: MouseEvent) => void): void {
        this.map.set(key, val);
        key.addEventListener("click", val);
    }

    removeByID(key: HTMLElement): void {
        const func: (e: MouseEvent) => void = this.map.get(key)!;
        key.removeEventListener("click", func);
        this.map.delete(key);
    }
}

export class FormSubmitEventRegistry implements ISubmitEventRegistry {
    constructor(private map: Map<HTMLFormElement, (e: SubmitEvent) => void>) {}

    set(key: HTMLFormElement, val: (e: SubmitEvent) => void): void {

        this.map.set(key, val);

        key.addEventListener("submit", val);
    }
    getByID(key: HTMLFormElement): (e: SubmitEvent) => void {
        return this.map.get(key)!;
    }
    getAll(): ((e: SubmitEvent) => void)[] {
        return Array.from(this.map.values());
    }
    removeByID(key: HTMLFormElement): void {
        const func: (e: SubmitEvent) => void = this.map.get(key)!;
        key.removeEventListener("submit", func);
        this.map.delete(key);
    }
    removeAll(): void {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }

}

export class InputChangeEventRegistry implements IChangeEventRegistry {
    constructor(private map: Map<HTMLInputElement, (e: Event) => void>) {}

    getByID(key: HTMLInputElement): (e: Event) => void {
        return this.map.get(key)!;
    }

    getAll(): ((e: Event) => void)[] {
        return Array.from(this.map.values());
    }

    removeAll(): void {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }

    set(key: HTMLInputElement, val: (e: Event) => void): void {
        this.map.set(key, val);
        key.addEventListener("change", val);
    }

    removeByID(key: HTMLInputElement): void {
        const func: (e: Event) => void = this.map.get(key)!;
        key.removeEventListener("change", func);
        this.map.delete(key);
    }
}

export class EventBus<T extends HTMLElement, K extends keyof HTMLElementEventMap> implements IEventRegistry<T, K> {
    constructor(
        private map: Map<T, (e: HTMLElementEventMap[K]) => void>
    ) {}
    
    set(key: T, val: (e: HTMLElementEventMap[K]) => void): void {
        this.map.set(key, val);
    }
    getByID(key: T): (e: HTMLElementEventMap[K]) => void {
        return this.map.get(key)!;
    }
    getAll(): ((e: HTMLElementEventMap[K]) => void)[] {
        return Array.from(this.map.values());
    }
    removeByID(key: T): void {
        this.map.delete(key);
    }
    removeAll(): void {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
}