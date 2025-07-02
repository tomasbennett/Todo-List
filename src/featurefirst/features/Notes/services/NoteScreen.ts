import { homeContentContainer } from "../../../components/MainContainer";
import { ICommand, ICommandCriteria } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IPageMediator } from "../../../models/PageMediator";
import { IState, IStateManager } from "../../../models/PageState";
import { IChangeEventRegistry, IClickEventRegistry, IScreenComponentRegistry } from "../../../models/Registry";
import { NoteContainer, NoteDesc, NoteRemoveBtn, NoteTitle } from "../components/NotesComponents";
import { INoteScreen } from "../models/NoteScreen";
import { INote } from "../models/NotesModel";

//THIS ONE DIDN'T WORK BECUASE OF CIRCULAR REFERENCES CAUSED BETWEEN THIS CLASS NEEDING AN ISTATE AND THE ISTATE NEEDING THIS CLASS IN ORDER TO BE CONSTRUCTED



// export class NoteScreen implements INoteScreen {
//     constructor(
        

//         // private noteSidebarBtn: IComponentRemovable<void>,

//         private noteRemoveEvent: ICommandCriteria<number>,

//         private pageMediator: IPageMediator,
//         private pageStateManager: IStateManager,
//         private defaultPage: HTMLElement,
//         private currPageState: IState
//     ) {}    

//     renderDataToScreen(data: { id: number; title: string; body: string; }): void {
//         const noteTitle: IComponentRemovable<string> = new NoteTitle();
//         noteTitle.setValue(data.title);
//         this.elementRegistry.set(noteTitle.getHTML(), noteTitle);


//         const noteDesc: IComponentRemovable<string> = new NoteDesc();
//         noteDesc.setValue(data.body);
//         this.elementRegistry.set(noteDesc.getHTML(), noteDesc);

//         const noteRemv: IComponentRemovable<string> = new NoteRemoveBtn();
//         noteRemv.setValue("X");
//         this.elementRegistry.set(noteRemv.getHTML(), noteRemv);




        
//         this.clickEventRegistry.set(noteRemv.getHTML(), (e: MouseEvent) => {
//             if (this.pageStateManager.getState() === this.currPageState) {
//                 this.pageMediator.changePage(this.defaultPage);

//             }

//             this.noteRemoveEvent.execute(data.id); 
            
//         });








//         const note: IComponentRemovable<void> = new NoteContainer(noteTitle, noteDesc, noteRemv);
//         this.elementRegistry.set(note.getHTML(), note);
        
//         note.render(homeContentContainer);

//     }
//     removeAll(): void {
//         this.clickEventRegistry.removeAll();
//         this.elementRegistry.removeAll();

//     }

// }