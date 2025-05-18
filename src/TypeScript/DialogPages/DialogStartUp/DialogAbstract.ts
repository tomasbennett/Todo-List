import { IPageStateManager } from "../../Utility/PageState";
import { TasksPage } from "../DialogTaskPage";


export abstract class DialogToggle {

    constructor(private dialogElem: HTMLDialogElement, private cancelButton: HTMLElement) {}

    open(): void {
        this.dialogElem.showModal();
        this.dialogElem.addEventListener('cancel', (e) => {
            e.preventDefault();
            this.close();
        }, { once: true });

        this.cancelButton.addEventListener("click", () => {
            this.close();
        }, { once: true });
    }

    
    protected abstract addForm(): void;


    close(): void {
        this.dialogElem.classList.add("closing");

        this.dialogElem.addEventListener("animationend", () => { 
            this.dialogElem.close();
            this.dialogElem.classList.remove("closing");
        }, { once: true });
    }
}