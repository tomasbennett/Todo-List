import { IRecordMod } from "./UploadForm";

export class ProjectRecordMods implements IRecordMod {

    constructor(private obj: Record<string, unknown>, private id: number) {}

    modify(): Record<string, unknown> {
        this.obj["id"] = this.id;
        this.obj["tasks"] = [];

        return this.obj;
    }

}