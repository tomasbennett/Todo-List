import { LocalStorageStratergy } from "../LocalStorage/LocalStorage";
import { ClickEventObserver, ICommand } from "../Utility/EventObserver";
import { IComponentRemovable } from "../Utility/HTMLElement";
import { TaskLiteral } from "../Utility/StorageSchemas";
import { TaskEntryCompletedInput, TaskEntryCompletedLabel, TaskEntryContainer, TaskEntryDate, TaskEntryDel, TaskEntryDesc, TaskEntryEdit, TaskEntryTitle } from "./Components/RTTasks";

export interface IFetchPrint {
    fetchContainer(): IComponentRemovable;
}


export class FetchPrint<T extends { id: number }> implements IFetchPrint {
    constructor(private localStorage: T, private htmlOperation: new (localStorageObj: T, outerContainer: HTMLElement) => IHTMLOperation, private outerContainer: HTMLElement, private clickEventObserver: ClickEventObserver[]) {}

    fetchContainer(): IComponentRemovable {
        const operation: IHTMLOperation = new this.htmlOperation(this.localStorage, this.outerContainer, this.clickEventObserver)
        const container: IComponentRemovable = operation.renderComponents();

        return container;
    }
}


export interface IHTMLOperation {
    renderComponents(): IComponentRemovable;
}




export class EditBtnCommand implements ICommand {
    execute(e: MouseEvent | UIEvent | Event | AnimationEvent | InputEvent | FocusEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent): void {
        throw new Error("Method not implemented.");
    }
}