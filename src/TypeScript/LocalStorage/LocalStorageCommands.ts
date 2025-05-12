import { ICommand } from "../Utility/EventObserver";
import { ITasks } from "../Utility/StorageTypes";
import { LocalStorageStratergy } from "./LocalStorage";


export class TasksFormSubmission implements ICommand {
    
    constructor(private form: HTMLFormElement, private taskLocalStorage: LocalStorageStratergy<ITasks>) {}
    
    execute(): void {
        const data = new FormData(this.form);
        const obj: any = Object.fromEntries(data.entries());

        obj["completed"] = false;
        obj["id"] = 1;


        if(this.isTask(obj)) {
            const task: ITasks = obj as ITasks;
            this.taskLocalStorage.save(task);
            return;
        }


        console.log("Didn't pass the isTask() test!");
        
    }

    private isTask(obj: any): boolean {
        return typeof obj?.id === 'number'
            && typeof obj?.title === 'string'
            && typeof obj?.bodyText === 'string'
            && typeof obj?.dueDate === 'string'
            && ['low','medium','high'].includes(obj?.priority)
            && typeof obj?.completed === 'boolean';;
    }

}