import { SafeParseReturnType, ZodType, boolean } from "zod";
import { LocalStorageStratergy, TasksLocalStorage } from "../../LocalStorage/LocalStorage";
import { ICommand } from "../EventObserver";
import { TaskLiteral, TaskSchema } from "../StorageSchemas";
import { IFetchPaste, TaskFetch } from "../../RunTimeComponents/RTFunctionality";



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

        if (check.execute()) {
            this.localStorageStrat.save(updated as T);

            const taskCreateHTML: IFetchPaste = new TaskFetch([updated as TaskLiteral]);
            for (const i of taskCreateHTML.fetchData()) {
                i.render();
            }

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

        this.htmlForm.reset();

        return rawData;
    }
}








export interface IRecordMod {
    modify(): Record<string, unknown>;
}





