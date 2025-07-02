import { ICommandCriteria, ISubmitCommand } from "../../../models/CommandModel";
import { IIDGenerator } from "../../../models/IGenerator";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { INote, NoteSchema } from "../models/NotesModel";

export class NoteSubmitCommand implements ISubmitCommand {
    constructor(
        private noteIDGenerator: IIDGenerator,
        private noteHTMLCreator: ICommandCriteria<INote>,
        private noteLocalStorage: ILocalStorageRegistry<INote>
    ) {}

    execute(criteria: SubmitEvent): void {
        const form: HTMLFormElement = criteria.target as HTMLFormElement;
        const noteTitleInput: HTMLInputElement = form.querySelector("input[name='title']") as HTMLInputElement;
        const noteBodyInput: HTMLInputElement = form.querySelector("input[name='bodyText']") as HTMLInputElement;

        const obj: Record<string, unknown> = {};
        
        obj["id"] = this.noteIDGenerator.generate();
        obj["title"] = noteTitleInput.value;
        obj["body"] = noteBodyInput.value;

        if (NoteSchema.safeParse(obj).success) {
            this.noteLocalStorage.set(obj["id"] as number, obj as INote);
            this.noteHTMLCreator.execute(obj as INote);

        }
    }

}