import { IState } from "./PageState";

export interface IPageMediator {
    setLivePages(pages: Map<HTMLElement, IState>): void;

    changePage(newPageKey: HTMLElement, val: IState): void;

    pageReset(): void;
}