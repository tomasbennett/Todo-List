// import { ICommand, ICommandCriteria } from "../../../models/CommandModel";
// import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
// import { IOpenClose } from "../../../models/OpenCloseModel";
// import { IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
// import { NoteContainer, NoteDesc, NoteRemoveBtn, NoteTitle } from "../components/NotesComponents";
// import { INote, NoteSchema } from "../models/NotesModel";

import { ICommandCriteria } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IPageMediator } from "../../../models/PageMediator";
import { IState, IStateManager } from "../../../models/PageState";
import { IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { NoteSidebarBtn } from "../components/NoteSidebarButtons";
import { noteSidebarContainer } from "../components/NoteSidebarContainer";
import { INote } from "../models/NotesModel";
import { NoteDynamicPage } from "../states/NotePageState";
import { NoteRemovalCommand } from "./NoteRemovalCommand";

// export class NotesRender implements IOpenClose<INote> {
//     private noteTitle: IComponentRemovable<string>;
//     private noteDesc: IComponentRemovable<string>;
//     private noteRemoveBtn: IComponentEventRemovable<string, [number]>;

//     private noteContainer: IComponentRemovable<void>;



//     constructor(
//         private openPageEvents: IClickEventRegistry,
//         //This is instantiated whenever the page is loaded
//         //Providing a new event registry whenever we open
//         // and then removing it when we close
//         private removeBtnCommand: ICommandCriteria<HTMLElement>,
//         private idContainer: HTMLElement
//     ) {
//         this.noteTitle = new NoteTitle();
//         this.noteDesc = new NoteDesc();

//         this.noteRemoveBtn = new NoteRemoveBtn(
//             this.openPageEvents,
//             this.removeBtnCommand,
//             this.idContainer
//         );

//         this.noteContainer = new NoteContainer(
//             this.noteTitle, 
//             this.noteDesc,
//             this.noteRemoveBtn
//         );
//     }

//     open(data: { id: number; title: string; body: string; } | undefined): void {
//         this.noteTitle.setValue(data?.title ?? "Exp Title");
//         this.noteDesc.setValue(data?.body ?? "Exp body text");
//         this.noteRemoveBtn.setValue("X");

//         this.noteRemoveBtn.addListener(data?.id ?? 1);

//         this.noteContainer.render(document.getElementById("home-content-container")!);

//     }
//     close(): void {
//         this.openPageEvents.removeAll();
//         this.noteContainer.remove();
//     }
// }


export class NoteSidebarScreen implements ICommandCriteria<INote> {
    constructor(
        private pageMediator: IPageMediator,
        private pageEventRegistry: IClickEventRegistry,
        private pageStateManager: IStateManager,

        private noteLocalStorage: ILocalStorageRegistry<INote>,

        private screenRegistry: IScreenComponentRegistry,
        private clickEventRegistry: IClickEventRegistry,

        private defaultHomePage: HTMLElement

    ) {}
    execute(criteria: { id: number; title: string; body: string; }): void {
        
        const noteSidebar: IComponentRemovable<string> = new NoteSidebarBtn();
        noteSidebar.setValue(criteria.title);
        
        noteSidebar.render(noteSidebarContainer);
        
        
        //AFTER MAKING THE HTML 

        const noteRemovalCommand: ICommandCriteria<number> = new NoteRemovalCommand(
            noteSidebar,
            this.noteLocalStorage,
            this.pageEventRegistry
        );

        // const noteScreen: INoteScreen = new NoteScreen(
        //     this.screenRegistry,
        //     this.clickEventRegistry,
        //     noteRemovalCommand,
        //     this.pageMediator,
        //     this.pageStateManager,
        //     this.defaultHomePage
        // );

        const notesGenericState: IState = new NoteDynamicPage(
            this.noteLocalStorage,
            criteria.id,
            this.screenRegistry,
            this.clickEventRegistry,
            this.pageStateManager,
            noteRemovalCommand,
            this.pageMediator,
            this.defaultHomePage
        )

        this.pageMediator.setLivePages(new Map<HTMLElement, IState>([
            [noteSidebar.getHTML(), notesGenericState]
            
        ]));




    }

}