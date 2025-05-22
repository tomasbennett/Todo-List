import { IRecordMod } from "./UploadForm";

export class NoteRecordMods implements IRecordMod {

    constructor(private obj: Record<string, unknown>, private id: number) {}

    modify(): Record<string, unknown> {
        this.obj["id"] = this.id;

        return this.obj;
    }

}