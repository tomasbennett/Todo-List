import { IPageChangeMemento } from "../models/Memento";
import { IPageMediator } from "../models/PageMediator";
import { IState, IStateManager } from "../models/PageState";
import { IClickEventRegistry } from "../models/Registry";


// export class PageMediator<T extends { id: number }> implements IPageMediator<T, "click"> {
//     constructor(
//         private stateManager: IStateManager<T>,
//         private eventRegistry: IEventRegistry<HTMLElement, "click">,
//         private eventBus: IEventBus<HTMLElement, "click">
//     ) {}

//     setLivePages(pages: Map<HTMLElement, (e: HTMLElementEventMap["click"]) => void>): void {
//         for (const [key, val] of pages) {
//             this.eventRegistry.set(key, val);
//             this.eventBus.addListener(key);
//         }
//     }
//     changePage(newPageKey: HTMLElement): void {
//         this.stateManager.exit();
        
//     }
//     pageReset(): void {
//         throw new Error("Method not implemented.");
//     }
// }
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

export class PageMediator implements IPageMediator {
    constructor(
        private pageClickEventRegistry: IClickEventRegistry,
        private pageStateManager: IStateManager,
        private pageChangeMemento: IPageChangeMemento,

        private startPage: Map<HTMLElement, IState>
    ) {
        for (const [key, val] of this.startPage) {
            this.pageClickEventRegistry.set(key, this.funcDevelopment(key, val));
            this.pageStateManager.set(val);
            this.pageChangeMemento.changeState(key);
            val.load();

        }
    }

    setLivePages(pages: Map<HTMLElement, IState>): void {
        for (const [key, val] of pages) {
            // const func: (e: MouseEvent) => void = (e) => {
            //     this.pageStateManager.exit();
            //     this.pageStateManager.set(val);
            //     this.pageStateManager.load();
            //     this.changePage(key);
            // }
            const func: (e: MouseEvent) => void = this.funcDevelopment(key, val);

            this.pageClickEventRegistry.set(key, (e: MouseEvent) => {
                func(e);

            });

            key.addEventListener("click", (e: MouseEvent) => {
                func(e);

            });
        }
    }
    changePage(newPageKey: HTMLElement): void {
        const funcRemove: (e: MouseEvent) => void = this.pageClickEventRegistry.getByID(newPageKey);
        newPageKey.removeEventListener("click", funcRemove);
        
        const funcAdd: (e: MouseEvent) => void = this.pageClickEventRegistry.getByID(this.pageChangeMemento.getLatestState()!);
        this.pageChangeMemento.getLatestState()!.addEventListener("click", funcAdd);

        this.pageChangeMemento.changeState(newPageKey);
    }

    pageReset(): void {
        this.pageClickEventRegistry.removeAll();

    }


    private funcDevelopment(key: HTMLElement, val: IState): (e: MouseEvent) => void {
        const func: (e: MouseEvent) => void = (e) => {
            this.pageStateManager.exit();
            this.pageStateManager.set(val);
            this.pageStateManager.load();
            this.changePage(key);
            
        }

        return func;
    }

}