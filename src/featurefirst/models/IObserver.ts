import { ICommand } from "./CommandModel";

export interface IObserver {
    set(command: ICommand): void;

    execute(): void;
}