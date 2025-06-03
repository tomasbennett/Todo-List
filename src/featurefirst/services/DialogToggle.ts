// import { IOpenClose } from "../models/OpenCloseModel";
// import { PortableEventListenersObserver } from "../util/PortableEventListeners";


// export class DialogToggle implements IOpenClose {
//     constructor(private dialog: HTMLDialogElement,
//                 private cancelBtn: HTMLButtonElement
//                 // private pageStateManager: IStateManager,
//                 // private dialogPageState: IState
//     ) {}

//     open(cancelEventListener: PortableEventListenersObserver): void {
//         this.dialog.showModal();

//         cancelEventListener.setFeatures(this.cancelBtn);

//         this.dialog.addEventListener("cancel", (e) => { 
//             e.preventDefault();
            
//             this.close(cancelEventListener); 
//         }, {once: true});

//         //ALL THIS SHOULD REALLY SAY IS GIVE ME A PAGE SET TO
//         //OPEN AND SET THE CURRENTLY OPENED PAGE TAB

//         // this.pageStateManager.setState(this.dialogPageState);
//         // this.pageStateManager.load();
//     }
//     close(cancelEventListener: PortableEventListenersObserver): void {
        
//         cancelEventListener.removeFeatures(this.cancelBtn);
        
//         this.dialog.classList.add("closing");

//         this.dialog.addEventListener("animationend", () => { 
//             this.dialog.close();
//             this.dialog.classList.remove("closing");
//         }, { once: true });
//     }
// }