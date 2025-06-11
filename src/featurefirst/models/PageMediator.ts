import { IState } from "./PageState";

export interface IPageMediator<T extends { id: number }, K extends keyof HTMLElementEventMap> {
    setLivePages(pages: Map<HTMLElement, (e: HTMLElementEventMap[K]) => void>): void;

    changePage(newPageKey: HTMLElement): void;

    pageReset(): void;
}