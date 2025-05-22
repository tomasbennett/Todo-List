import { LocalStorageStratergy } from "../LocalStorage/LocalStorage";
import { IComponentRemovable } from "../Utility/HTMLElement";
import { TaskLiteral } from "../Utility/StorageSchemas";
import { TaskEntryCompletedInput, TaskEntryCompletedLabel, TaskEntryContainer, TaskEntryDate, TaskEntryDel, TaskEntryDesc, TaskEntryEdit, TaskEntryTitle } from "./RTTasks";

export interface IFetchPaste {
    fetchData(): IterableIterator<IComponentRemovable>;
}



export class TaskFetch implements IFetchPaste {
    constructor(private taskLocalStorage: TaskLiteral[]) {}

    *fetchData(): IterableIterator<IComponentRemovable> {
        const homeContainer: HTMLElement = document.getElementById("home-content-container")!;

        for (const obj of this.taskLocalStorage) {
            const container: IComponentRemovable = new TaskEntryContainer(homeContainer, obj["priority"], obj["id"].toString());

            const label: IComponentRemovable = new TaskEntryCompletedLabel(container.getHTML());
            const input: IComponentRemovable = new TaskEntryCompletedInput(label.getHTML());
            
            const title: IComponentRemovable = new TaskEntryTitle(container.getHTML(), obj["completed"] ? "complete" : "incomplete", obj["title"]);
            const desc: IComponentRemovable = new TaskEntryDesc(container.getHTML(), obj["bodyText"]);

            const dueDate: IComponentRemovable = new TaskEntryDate(container.getHTML(), obj["dueDate"].toDateString());

            const editSVG: IComponentRemovable = new TaskEntryEdit(container.getHTML());
            const delSVG: IComponentRemovable = new TaskEntryDel(container.getHTML());

            label.render();
            input.render();
            title.render();
            desc.render();
            dueDate.render();

            editSVG.render();
            delSVG.render();

            yield container;
        }
    }
}