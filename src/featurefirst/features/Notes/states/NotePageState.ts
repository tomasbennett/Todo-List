import { homeContentContainer } from "../../../components/MainContainer";
import { mainTitle } from "../../../components/MainTitle";
import { ICommandCriteria } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IPageMediator } from "../../../models/PageMediator";

import { IState, IStateManager } from "../../../models/PageState";
import { IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { NoteTitle, NoteDesc, NoteRemoveBtn, NoteContainer } from "../components/NotesComponents";
import { INote } from "../models/NotesModel";


export class NoteDynamicPage implements IState {
    constructor(
        // private noteSidebarComponent: IComponentRemovable<string>, //Maybe this needs to be passed throuhg to the noteRenderScreen instead or the ID should be atleast???
        private noteLocalStorage: ILocalStorageRegistry<INote>,
        private noteID: number,

        private elementRegistry: IScreenComponentRegistry,
        private clickEventRegistry: IClickEventRegistry,

        private pageStateManager: IStateManager,

        private noteRemovalCommand: ICommandCriteria<number>,
        private pageMediator: IPageMediator,
        private defaultPage: HTMLElement
        

    ) {}

    load(): void {

        mainTitle.textContent = "";

        const note: INote = this.noteLocalStorage.getByID(this.noteID);


        const noteTitle: IComponentRemovable<string> = new NoteTitle();
        noteTitle.setValue(note.title);
        this.elementRegistry.set(noteTitle.getHTML(), noteTitle);


        const noteDesc: IComponentRemovable<string> = new NoteDesc();
        noteDesc.setValue(note.body);
        this.elementRegistry.set(noteDesc.getHTML(), noteDesc);

        const noteRemv: IComponentRemovable<string> = new NoteRemoveBtn();
        noteRemv.setValue("X");
        this.elementRegistry.set(noteRemv.getHTML(), noteRemv);
        this.clickEventRegistry.set(noteRemv.getHTML(), (e: MouseEvent) => {
            if (this.pageStateManager.getState() === this) {
                this.pageMediator.changePage(this.defaultPage);

            }
            this.noteRemovalCommand.execute(this.noteID);
        });




        const noteFull: IComponentRemovable<void> = new NoteContainer(noteTitle, noteDesc, noteRemv);
        this.elementRegistry.set(noteFull.getHTML(), noteFull);
        



        noteFull.render(homeContentContainer);

        


    }
    exit(): void {
        this.elementRegistry.removeAll();
        this.clickEventRegistry.removeAll();

    }
}