import { IPageChangeMemento } from "../models/Memento";
import { IPageMediator } from "../models/PageMediator";
import { IState } from "../models/PageState";

import { EventRegistry } from "../util/EventRegistry";
import { PageRegistry } from "../util/PageRegistry";
import { ChangePageMemento } from "../util/PageStateMemento";



export class PageMediator implements IPageMediator {
    private pageObs: PageRegistry;
    private eventObs: EventRegistry;
    private stateManager: IPageChangeMemento;

    constructor(firstElem: HTMLElement, firstPage: IState) {
        this.pageObs = new PageRegistry(new Map<HTMLElement, IState>());
        this.eventObs = new EventRegistry(new Map<HTMLElement, () => void>());
        this.stateManager = new ChangePageMemento();

        this.pageObs.set(firstElem, firstPage);
        this.stateManager.changeState(firstElem);
        firstPage.load(); //Should be in a factory pattern
    }

    setLivePages(pages: Map<HTMLElement, IState>): void {
        for (const [key, val] of pages) {
            this.pageObs.set(key, val);

            this.eventObs.set(key, () => { this.changePage(key); });
        }
    }

    changePage(newPageKey: HTMLElement): void {
        const prevKey: HTMLElement = this.stateManager.getLatestState()!;
        this.pageObs.getByID(prevKey).exit();
        this.eventObs.set(this.stateManager.getLatestState()!, () => { this.changePage(prevKey); });

        this.stateManager.changeState(newPageKey);
        this.pageObs.getByID(newPageKey).load();
        this.eventObs.removeByID(newPageKey);
    }

    pageReset(): void {
        this.eventObs.removeAll();
    }
}