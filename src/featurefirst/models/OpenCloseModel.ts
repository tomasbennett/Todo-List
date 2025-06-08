export interface IOpenClose<T> {
    open(data?: T): void;

    close(): void;
}
