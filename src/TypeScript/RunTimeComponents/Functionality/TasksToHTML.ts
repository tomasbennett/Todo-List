import { IComponentRemovable } from "../../Utility/HTMLElement";
import { TaskLiteral } from "../../Utility/StorageSchemas";
import { TaskEntryContainer, TaskEntryCompletedLabel, TaskEntryCompletedInput, TaskEntryTitle, TaskEntryDesc, TaskEntryDate, TaskEntryEdit, TaskEntryDel } from "../Components/RTTasks";
import { IHTMLOperation } from "../RTFunctionality";


export class TasksHTMLOperations implements IHTMLOperation {
    constructor(private localStorageObj: TaskLiteral, private outerContainer: HTMLElement) {}

    renderComponents(): IComponentRemovable {
        const container: IComponentRemovable = new TaskEntryContainer(this.outerContainer, this.localStorageObj["priority"], this.localStorageObj["id"].toString());

        const label: IComponentRemovable = new TaskEntryCompletedLabel(container.getHTML());
        const input: IComponentRemovable = new TaskEntryCompletedInput(label.getHTML());
        
        const title: IComponentRemovable = new TaskEntryTitle(container.getHTML(), this.localStorageObj["completed"] ? "complete" : "incomplete", this.localStorageObj["title"]);
        const desc: IComponentRemovable = new TaskEntryDesc(container.getHTML(), this.localStorageObj["bodyText"]);

        const dueDate: IComponentRemovable = new TaskEntryDate(container.getHTML(), this.localStorageObj["dueDate"].toDateString());

        const editSVG: IComponentRemovable = new TaskEntryEdit(container.getHTML()); //Pass in clickEventObserver, .setEvent in the component
                                                                                     //More importantly we also need to pass through a ScreenTemplate as we aren't returning
                                                                                     //The clickEventObserver // IDEA (1): // 
        const delSVG: IComponentRemovable = new TaskEntryDel(container.getHTML());

        const componentsToRender: IComponentRemovable[] = [label, input, title, desc, dueDate, editSVG, delSVG];

        componentsToRender.forEach(comp => comp.render());

        return container;
    }
}


