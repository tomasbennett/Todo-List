import { IOpenClose } from "../../../models/OpenCloseModel";
import { IState } from "../../../models/PageState";
import { INote, NoteSchema } from "../models/NotesModel";

export class NoteDynamicPage implements IState<INote> {
    constructor(
        private notesRender: IOpenClose<INote>
    ) {}

    load(note: INote): void {
        if (NoteSchema.safeParse(note)) {
            this.notesRender.open(note);
        }
        

    }
    exit(): void {
        this.notesRender.close();
    }
}