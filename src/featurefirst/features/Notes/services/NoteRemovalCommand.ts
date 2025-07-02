import { ICommandCriteria } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IPageMediator } from "../../../models/PageMediator";
import { IClickEventRegistry, ILocalStorageRegistry } from "../../../models/Registry";
import { INote } from "../models/NotesModel";

export class NoteRemovalCommand implements ICommandCriteria<number> {
    constructor(
        private noteSidebarBtn: IComponentRemovable<string>,
        private noteLocalStorage: ILocalStorageRegistry<INote>,
        private pageEventRegistry: IClickEventRegistry
    ) {}

    execute(criteria: number): void {
        this.noteLocalStorage.removeByID(criteria);
        this.noteSidebarBtn.remove();
        this.pageEventRegistry.removeByID(this.noteSidebarBtn.getHTML());


        //NEED TO DO THE IF CHECK FOR PAGE STATE SOMEWHERE TO CHANGE TO ANOTHER PAGE BEFORE THIS HAPPENS


    }
}