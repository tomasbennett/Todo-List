import { IPageChangeMemento } from "../models/Memento";

export class ChangePageMemento implements IPageChangeMemento {
    private currentPage?: HTMLElement;

    changeState(nextPage: HTMLElement): void {
        this.currentPage = nextPage;
    }

    getLatestState(): HTMLElement | undefined {
        return this.currentPage;
    }
}