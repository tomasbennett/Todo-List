import { IComponentRemovable } from "../models/IComponentModels";
import { IScreenComponentRegistry } from "../models/Registry";

export class ScreenRegistry implements IScreenComponentRegistry {
    constructor(private map: Map<HTMLElement, IComponentRemovable>) {}

    set(key: HTMLElement, val: IComponentRemovable): void {
        this.map.set(key, val);
    }
    getByID(key: HTMLElement): IComponentRemovable {
        return this.map.get(key)!;
    }
    getAll(): IComponentRemovable[] {
        return Array.from(this.map.values());    
    }
    removeByID(key: HTMLElement): void {
        this.map.get(key)?.remove();
        this.map.delete(key);
    }
    removeAll(): void {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
}