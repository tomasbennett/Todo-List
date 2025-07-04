import { ICommandCriteria } from "../../../models/CommandModel";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { ITask } from "../models/TaskModels";

export class TaskRemoval implements ICommandCriteria<number> {
    constructor(
        private taskLocalStorage: ILocalStorageRegistry<ITask>,
        
    ) {}

    execute(criteria: number): void {
        throw new Error("Method not implemented.");
    }

}