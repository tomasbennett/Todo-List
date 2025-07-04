import { IPageChangeMemento } from "../models/Memento";

export class ChangePageMemento implements IPageChangeMemento {
    private currentPage?: HTMLElement;

    changeState(nextPage: HTMLElement): void {
        if (this.currentPage) {
            this.currentPage?.setAttribute("data-page", "unselected");

        }
        this.currentPage = nextPage;
        this.currentPage?.setAttribute("data-page", "selected");
    }

    getLatestState(): HTMLElement | undefined {
        return this.currentPage;
    }
}