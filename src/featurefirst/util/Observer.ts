import { ICommand } from "../models/CommandModel";
import { IObserver } from "../models/IObserver";

export class ConcreteObserver implements IObserver {
    private commands: Array<ICommand>;

    constructor() {
        this.commands = [];
    }

    set(command: ICommand): void {
        this.commands.push(command);
    }
    execute(): void {
        this.commands.forEach(command => { command.execute() });
    }
}