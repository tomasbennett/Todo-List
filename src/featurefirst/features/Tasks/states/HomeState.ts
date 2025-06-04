import { IState } from "../../../models/PageState";
import { LocalStorage, TaskLocalStorage } from "../../../services/LocalStorage";
import { ITask } from "../models/TaskModels";
import { IScreen } from "";


export class HomeState implements IState {
    private screenRegistry!: IScreen;

    load(): void {
        const localStorage: LocalStorage<ITask> = new TaskLocalStorage();
        const tasks: ITask[] = localStorage.getAll();

        this.screenRegistry = new Screen


    }

    exit(): void {
        
    }

}