import { dialogSidePageOptionsContainer } from "../../../components/DialogComponent";
import { ICommandCriteria } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IPageChangeMemento } from "../../../models/Memento";
import { IOpenClose } from "../../../models/OpenCloseModel";
import { ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { TaskFormBtnComponent } from "../components/TasksFormComponents";
import { ITask } from "../models/TaskModels";
import { ITaskFormScreen } from "../models/TaskScreen";

export class EditTaskCommand implements ICommandCriteria<number> {


    constructor(
        private dialogToggle: IOpenClose,

        private taskLocalStorage: ILocalStorageRegistry<ITask>,

        private taskFormScreen: ITaskFormScreen,

        private taskSidebarPageOption: IScreenComponentRegistry,

        private pageChangeMemento: IPageChangeMemento

    ) {}

    execute(criteria: number): void {
        const task: ITask = this.taskLocalStorage.getByID(criteria);

        const taskSidebarOption: IComponentRemovable<string> = new TaskFormBtnComponent();
        this.taskSidebarPageOption.set(taskSidebarOption.getHTML(), taskSidebarOption);
        taskSidebarOption.setValue("Task");


        this.pageChangeMemento.changeState(taskSidebarOption.getHTML()); //GET THE SIDEBAR OPTION UP AND ACTIVE IN BLUE
        taskSidebarOption.render(dialogSidePageOptionsContainer);


        
        this.taskFormScreen.renderDataToScreen(task);

        this.dialogToggle.open();

    }

}