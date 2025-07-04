export interface ICommand {
    execute(): void;
}

export interface ICommandCriteria<T> {
    execute(criteria: T): void;
}

export type ISubmitCommand = ICommandCriteria<SubmitEvent>;

export type IObjectCommand = ICommandCriteria<Record<string, unknown>>;