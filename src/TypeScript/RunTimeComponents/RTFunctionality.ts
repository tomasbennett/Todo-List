import { LocalStorageStratergy } from "../LocalStorage/LocalStorage";
import { IComponentRemovable } from "../Utility/HTMLElement";
import { TaskLiteral } from "../Utility/StorageSchemas";
import { TaskEntryCompletedInput, TaskEntryCompletedLabel, TaskEntryContainer, TaskEntryDate, TaskEntryDel, TaskEntryDesc, TaskEntryEdit, TaskEntryTitle } from "./RTTasks";

export interface IFetchPrint {
    fetchContainer(): IComponentRemovable;
}


export class FetchPrint<T extends { id: number }> implements IFetchPrint {
    constructor(private localStorage: T, private htmlOperation: new (localStorageObj: T, outerContainer: HTMLElement) => IHTMLOperation, private outerContainer: HTMLElement) {}

    fetchContainer(): IComponentRemovable {
        const operation: IHTMLOperation = new this.htmlOperation(this.localStorage, this.outerContainer)
        const container: IComponentRemovable = operation.renderComponents();

        return container;
    }
}


export interface IHTMLOperation {
    renderComponents(): IComponentRemovable;
}

