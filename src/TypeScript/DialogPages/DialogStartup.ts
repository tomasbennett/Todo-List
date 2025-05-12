import { IPageStateManager } from "../Utility/PageState";
import { TasksPage } from "./DialogTaskPage";


export class DialogOpenClose {

    constructor(private dialogElem: HTMLDialogElement) {}

    open(dialogPageState: IPageStateManager): void {
        this.dialogElem.showModal();
        this.dialogElem.addEventListener('cancel', (e) => {
            e.preventDefault();
            this.close();
        }, { once: true });

        
        dialogPageState.setState(new TasksPage(dialogPageState));
        dialogPageState.load();

    }

    close(): void {
        this.dialogElem.classList.add("closing");

        this.dialogElem.addEventListener("animationend", () => { 
            this.dialogElem.close();
            this.dialogElem.classList.remove("closing");
         }, { once: true });
         
    }


}