import { PortableEventListenersObserver } from "../util/PortableEventListeners";

export interface IOpenClose {
    open(cancelEventListener: PortableEventListenersObserver): void;

    close(cancelEventListener: PortableEventListenersObserver): void;
}