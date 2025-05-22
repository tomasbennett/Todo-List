import { IRecordMod } from "./UploadForm";

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