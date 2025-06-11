import { IEventBus } from "../models/IEventBus";
import { IPageChangeMemento } from "../models/Memento";
import { IPageMediator } from "../models/PageMediator";
import { IState, IStateManager } from "../models/PageState";
import { IClickEventRegistry, IEventRegistry, ILocalStorageRegistry } from "../models/Registry";

import { ClickEventRegistry } from "../util/EventRegistry";
import { PageRegistry } from "../util/PageRegistry";
import { ChangePageMemento } from "../util/PageStateMemento";


export class PageMediator<T extends { id: number }> implements IPageMediator<T, "click"> {
    constructor(
        private stateManager: IStateManager<T>,
        private eventRegistry: IEventRegistry<HTMLElement, "click">,
        private eventBus: IEventBus<HTMLElement, "click">
    ) {}

    setLivePages(pages: Map<HTMLElement, (e: HTMLElementEventMap["click"]) => void>): void {
        for (const [key, val] of pages) {
            this.eventRegistry.set(key, val);
            this.eventBus.addListener(key);
        }
    }
    changePage(newPageKey: HTMLElement): void {
        this.stateManager.exit();
        
    }
    pageReset(): void {
        throw new Error("Method not implemented.");
    }
}
// export class PageMediator implements IPageMediator {
//     private pageObs: PageRegistry;
//     private eventObs: IClickEventRegistry;
//     private stateManager: IPageChangeMemento;

//     constructor(firstElem: HTMLElement, firstPage: IState) {
//         this.pageObs = new PageRegistry(new Map<HTMLElement, IState>());
//         this.eventObs = new ClickEventRegistry(new Map<HTMLElement, () => void>());
//         this.stateManager = new ChangePageMemento();

//         this.pageObs.set(firstElem, firstPage);
//         this.stateManager.changeState(firstElem);
//         firstPage.load(); //Should be in a factory pattern
//     }

//     setLivePages(pages: Map<HTMLElement, IState>): void {
//         for (const [key, val] of pages) {
//             this.pageObs.set(key, val);

//             this.eventObs.set(key, () => { this.changePage(key); });
//         }
//     }

//     changePage(newPageKey: HTMLElement): void {
//         const prevKey: HTMLElement = this.stateManager.getLatestState()!;
//         this.pageObs.getByID(prevKey).exit();
//         this.eventObs.set(this.stateManager.getLatestState()!, () => { this.changePage(prevKey); });

//         this.stateManager.changeState(newPageKey);
//         this.pageObs.getByID(newPageKey).load();
//         this.eventObs.removeByID(newPageKey);
//     }

//     pageReset(): void {
//         this.eventObs.removeAll();
//     }
// }