import { SafeParseReturnType, ZodType, boolean } from "zod";
import { LocalStorageStratergy, TasksLocalStorage } from "../../LocalStorage/LocalStorage";
import { ICommand } from "../EventObserver";
import { TaskLiteral, TaskSchema } from "../StorageTypes";



export class UploadToLocalStorage<T extends { id: number }> implements ICommand {
    constructor(private formTransfer: ICommand<Record<string, unknown>>, 
                private recordMod: new (r: Record<string, unknown>, id: number) => IRecordMod,
                private schema: ZodType<T>,
                private localStorageStrat: LocalStorageStratergy<T>) {}

    execute(): void {
        const record: Record<string, unknown> = this.formTransfer.execute();

        const recordMods: IRecordMod = new this.recordMod(record, 2);
        const updated: Record<string, unknown> = recordMods.modify();

        const check: ICommand<boolean> = new SchemaCheck(updated, this.schema);

        if (check) {
            this.localStorageStrat.save(updated as T);

        } else {
            console.error("The task check has failed!!!");

        }

    }
}





export class SchemaCheck<T> implements ICommand<boolean> {
    constructor(private obj: Record<string, unknown>, private schema: ZodType<T>) {}

    execute(): boolean {
        const result: SafeParseReturnType<T, T> = this.schema.safeParse(this.obj);
        return result.success;
    }

}


export class FormRecordTransfer implements ICommand<Record<string, unknown>> {
    constructor(private htmlForm: HTMLFormElement) {}

    execute(): Record<string, unknown> {
        const data: FormData = new FormData(this.htmlForm);
        const rawData: Record<string, unknown> = Object.fromEntries(data.entries()) as Record<string, unknown>;

        return rawData;
    }
}




// interface IRecordModFactory {
//     create(record: Record<string, unknown>, id: number): IRecordMod;
// }



export interface IRecordMod {
    modify(): Record<string, unknown>;
}



// class GenericRecordModFactory<Mod extends IRecordMod> implements IRecordModFactory {
//     constructor(private ModCtor: new (r: Record<string, unknown>, id: number) => Mod) {}
  
//     create(record: Record<string, unknown>, id: number): IRecordMod {
//         return new this.ModCtor(record, id);
//     }
//   }





export class TaskRecordMods implements IRecordMod {

    constructor(private obj: Record<string, unknown>, private id: number) {}

    modify(): Record<string, unknown> {
        this.obj["id"] = this.id;
        this.obj["dueDate"] = new Date(this.obj["dueDate"] as string);
        if (typeof this.obj["completed"] == "boolean") {
            this.obj["completed"] = this.obj["completed"];

        } else if (typeof this.obj["completed"] == "string") {
            this.obj["completed"] = this.obj["completed"].toLowerCase() == "true";

        } else {
            this.obj["completed"] = false;
            
        }

        return this.obj;
    }

}