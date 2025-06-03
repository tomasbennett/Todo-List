import { IState } from "./PageState";

export interface IPageMediator {
    setLivePages(pages: Map<HTMLElement, IState>): void;

    changePage(newPageKey: HTMLElement): void;

    pageReset(): void;
}