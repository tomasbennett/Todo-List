import { IIDGenerator } from "../../../models/IGenerator";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { ILocalStorageRegistry, IScreenComponentRegistry, ISubmitEventRegistry } from "../../../models/Registry";
import { IDateToString } from "../../../models/Transformer";
import { ITask, TaskSchema } from "../models/TaskModels";
import { ITaskScreen } from "../models/TaskScreenOpenClose";

export class TaskForm implements ITaskScreen {
    private title: HTMLInputElement;
    private bodyText: HTMLTextAreaElement;
    private date: HTMLInputElement;
    private priority: HTMLSelectElement;
    private project: HTMLSelectElement;

    constructor(
        // private screenElementRegistry: IScreenComponentRegistry,
        private screenEventsRegistry: ISubmitEventRegistry,
        private form: HTMLFormElement,
        private dateToString: IDateToString,
        private taskLocalStorage: ILocalStorageRegistry<ITask>,
        private idGen: IIDGenerator
    ) {
        this.title = this.form.querySelector("[name='title']")!;
        this.bodyText = this.form.querySelector("[name='bodyText']")!;
        this.date = this.form.querySelector("[name='dueDate']")!;
        this.priority = this.form.querySelector("[name='priority']")!;
        this.project = this.form.querySelector("[name='project']")!;
    }

    open(task?: Partial<ITask>): void {
        this.form.style.display = "flex";

        this.title.value = task?.title ?? "";
        this.bodyText.value = task?.body ?? "";
        this.priority.value = task?.priority ?? "low";

        this.date.value = this.dateToString.transform(task?.date ?? new Date()); // Need a class to transfer it to a string
        this.project.value = task?.project ?? "--default--"; // Need a class to help get a name from an id number

        this.screenEventsRegistry.set(this.form, (e: SubmitEvent) => {
            e.preventDefault();

            const obj: Record<string, unknown> = {};

            obj["title"] = this.title.value;
            obj["body"] = this.bodyText.value;
            obj["date"] = new Date(this.date.value);
            obj["priority"] = this.priority.value;
            obj["project"] = this.project.value;
            obj["completed"] = task?.completed ?? false;

            if (TaskSchema.safeParse(obj)) {
                this.taskLocalStorage.set(task?.id ?? this.idGen.generate(), obj as ITask);
                //GOING TO NEED SOME SORT OF CURRENT SCREEN .LOAD(INSTEAD OF TAKING LOCALSTORAGE.GETALL IT ONLY TAKES THE ONE ITASK)

                this.close();
                //Dialog.close(),
                //Remove All page functionalities for dialog pages
                //Remove the buttons on the side, all of them possible???///As set by the class opening them up???
            }
            //const stringToTask
            //Turn values into correct data types
            //add to local storage the ITask
            //There should be a way to pass through to the current screen an ITask and then filter that alone to add it to the page???
            //YOU COULD HAVE SAID WHAT DOES THIS CLASS NEED TO DO ON A BASE LEVEL, private loadValues: ILoadTaskValues WHICH COULD HAVE BEEN GIVEN EITHER AN ADD OR EDIT

        });
    }

    close(): void {
        this.form.style.display = "none";
        this.form.reset();

        // this.screenElementRegistry.removeAll()
        this.screenEventsRegistry.removeAll();
    }

}