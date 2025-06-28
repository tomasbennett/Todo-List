// import { ICommand, ICommandCriteria } from "../../../models/CommandModel";
// import { IComponentRemovable } from "../../../models/IComponentModels";
// import { IIDGenerator } from "../../../models/IGenerator";
// import { IPageMediator } from "../../../models/PageMediator";
// import { IState, IStateManager } from "../../../models/PageState";
// import { IClickEventRegistry, ILocalStorageRegistry, ISubmitEventRegistry } from "../../../models/Registry";
// import { ClickEventRegistry } from "../../../util/EventRegistry";
// import { NoteSidebarBtn } from "../components/NoteSidebarButtons";
// import { INote } from "../models/NotesModel";
// import { NotesRender } from "../services/NotesRender";
// import { NoteDynamicPage } from "./NotePageState";


// export class NotesFormState implements IState<INote> {

//     constructor(
//         private eventRegistry: ISubmitEventRegistry,
//         private form: HTMLFormElement,
//         private removeNoteCommand: ICommandCriteria<HTMLElement>,
//         private stateManager: IStateManager<INote>,
//         private idGenerator: IIDGenerator,
//         private localStorage: ILocalStorageRegistry<INote>,
//         private pageEventRegistry: IClickEventRegistry,
//         private pageMediator: IPageMediator<INote>
//     ) {}

//     load(data: INote): void {
//         this.form.style.display = "flex";

//         this.eventRegistry.set(this.form, (e: SubmitEvent) => {
            
//             const noteTitleInput: HTMLInputElement = this.form.querySelector("input[name='title']")!; 
//             const noteBodyInput: HTMLInputElement = this.form.querySelector("input[name='bodyText']")!;

//             const noteSidebarBtn: IComponentRemovable<string> = new NoteSidebarBtn();
//             const id: number = this.idGenerator.generate();
//             noteSidebarBtn.getHTML().setAttribute("data-id", id.toString());
//             noteSidebarBtn.setValue(noteTitleInput.value);
//             noteSidebarBtn.render(document.getElementById("notes-container")!);


            
//             this.pageEventRegistry.set(noteSidebarBtn.getHTML(), (e: MouseEvent) => {
//                 const notePage: IState<INote> = new NoteDynamicPage(new NotesRender(
//                     new ClickEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>()),
//                     this.removeNoteCommand,
//                     noteSidebarBtn.getHTML()
//                 ));
                
//                 this.stateManager.exit();
//                 this.stateManager.set(notePage);
//                 this.stateManager.load(this.localStorage.getByID(id));
//             });
//         });
//     }
//     exit(): void {
//         this.form.style.display = "none";

//         this.eventRegistry.removeByID(this.form);
//     }
// }