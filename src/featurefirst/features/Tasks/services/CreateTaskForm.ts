import { IComponentRemovable } from "../../../models/IComponentModels";
import { IIDGenerator } from "../../../models/IGenerator";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { IStateManager } from "../../../models/PageState";
import { ILocalStorageRegistry, IScreenComponentRegistry, ISubmitEventRegistry } from "../../../models/Registry";
import { IDateToString } from "../../../models/Transformer";
import { ProjectOption } from "../components/ProjectOption";
import { ITask, TaskSchema } from "../models/TaskModels";
import { ITaskFormScreen } from "../models/TaskScreen";

export class TaskForm<Proj extends { id: number, title: string }> implements ITaskFormScreen {
    private title: HTMLInputElement;
    private bodyText: HTMLTextAreaElement;
    private date: HTMLInputElement;
    private priority: HTMLSelectElement;
    private project: HTMLSelectElement;

    constructor(
        private screenElementRegistry: IScreenComponentRegistry,
        private screenSubmitEventsRegistry: ISubmitEventRegistry,
        private form: HTMLFormElement,
        private taskLocalStorage: ILocalStorageRegistry<ITask>,
        
        private projLocalStorage: ILocalStorageRegistry<Proj>,

        private dialogToggle: IOpenClose,

        private stateManager: IStateManager,
        private dateToString: IDateToString,
        private idGen: IIDGenerator
    ) {
        this.title = this.form.querySelector("[name='title']")!;
        this.bodyText = this.form.querySelector("[name='bodyText']")!;
        this.date = this.form.querySelector("[name='dueDate']")!;
        this.priority = this.form.querySelector("[name='priority']")!;
        this.project = this.form.querySelector("[name='project']")!;
    }
    renderDataToScreen(data?: Partial<{ id: number; title: string; body: string; date: Date; priority: "low" | "medium" | "high"; project: number; completed: boolean; }>): void {     
        this.form.style.display = "flex";

        this.title.value = data?.title ?? "";
        this.bodyText.value = data?.body ?? "";
        this.priority.value = data?.priority ?? "low";


        this.date.value = this.dateToString.transform(data?.date ?? new Date()); // Need a class to transfer it to a string

        for (const proj of this.projLocalStorage.getAll()) {
            const projOption: IComponentRemovable<string> = new ProjectOption(proj.id);
            this.screenElementRegistry.set(projOption.getHTML(), projOption);
            projOption.setValue(proj.title);
            projOption.render(this.project);
        }


        this.project.value = data?.project?.toString() ?? "0"; // Need a class to help get a name from an id number

        this.screenSubmitEventsRegistry.set(this.form, (e: SubmitEvent) => {
            e.preventDefault();

            const obj: Record<string, unknown> = {};

            obj["id"] = data?.id ?? this.idGen.generate();
            obj["title"] = this.title.value;
            obj["body"] = this.bodyText.value;
            obj["date"] = new Date(this.date.value);
            obj["priority"] = this.priority.value;
            obj["project"] = Number(this.project.value); //If this guy is --default-- then you should set it as default but it won't pass TaskSchema you should set it to a default negative number instead
            obj["completed"] = data?.completed ?? false;

            if (TaskSchema.safeParse(obj).success) {
                this.taskLocalStorage.set(obj["id"] as number, obj as ITask);
                //GOING TO NEED SOME SORT OF CURRENT SCREEN .LOAD(INSTEAD OF TAKING LOCALSTORAGE.GETALL IT ONLY TAKES THE ONE ITASK)
                


                this.removeAll();

                this.dialogToggle.close();

                this.stateManager.exit();
                this.stateManager.load();
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
    removeAll(): void {
        
        this.form.style.display = "none";
        this.form.reset();
        
        // this.screenElementRegistry.removeAll()
        this.screenElementRegistry.removeAll();
        this.screenSubmitEventsRegistry.removeAll();
    }

}