// import { IPageRegistry } from "../models/Registry";
// import { IState } from "../models/PageState";

// export class PageRegistry implements IPageRegistry {
//     constructor(private map: Map<HTMLElement, IState>) {}

//     set(key: HTMLElement, val: IState): void {
//         this.map.set(key, val);
//     }
//     getByID(key: HTMLElement): IState {
//         return this.map.get(key)!;
//     }
//     getAll(): IState[] {
//         return Array.from(this.map.values());
//     }
//     removeByID(key: HTMLElement): void {
//         this.map.delete(key);
//     }
//     removeAll(): void {
//         for (const key of this.map.keys()) {
//             this.removeByID(key);
//         }
//     }

// }