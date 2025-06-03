import { MapRegistryTemplate } from "../models/Registry";

export class EventRegistry extends MapRegistryTemplate<HTMLElement, () => void> {
    set(key: HTMLElement, val: () => void): void {
        super.set(key, val);
        key.addEventListener("click", val);
    }

    removeByID(key: HTMLElement): void {
        super.removeByID(key);
        key.removeEventListener("click", this.getByID(key)!);
    }
}