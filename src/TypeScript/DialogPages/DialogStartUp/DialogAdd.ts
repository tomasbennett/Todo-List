import { IPageStateManager } from "../../Utility/PageState";
import { TasksPage } from "../DialogTaskPage";
import { DialogToggle } from "./DialogAbstract";


export class DialogOpenClose {

    constructor(private dialogElem: HTMLDialogElement, private cancelButton: HTMLElement, private dialogPageState: IPageStateManager) {}

    open(): void {
        this.dialogElem.showModal();
        this.dialogElem.addEventListener('cancel', (e) => {
            e.preventDefault();
            this.close();
        }, { once: true });

        this.cancelButton.addEventListener("click", () => {
            this.close();
        }, { once: true });

        
        this.dialogPageState.setState(new TasksPage(this.dialogPageState));
        this.dialogPageState.load();

    }

    close(): void {
        this.dialogElem.classList.add("closing");

        this.dialogElem.addEventListener("animationend", () => { 
            this.dialogElem.close();
            this.dialogElem.classList.remove("closing");
        }, { once: true });
        
        this.dialogPageState.exit();
    }


}


// export class DialogAdd extends DialogToggle {
//     constructor(dialogElem: HTMLDialogElement, cancelButton: HTMLElement, private dialogPageStateManager: IPageStateManager) {
//         super(dialogElem, cancelButton);
//     }

//     protected addForm(): void {
        
//     }
    
// }