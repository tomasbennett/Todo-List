import { ICommand } from "../models/CommandModel";
import { IOpenClose } from "../models/OpenCloseModel";


export class DialogToggle implements IOpenClose {
    constructor(
        private dialog: HTMLDialogElement,
        private cancelBtn: HTMLButtonElement,

        private additionalCloseLogic?: ICommand
    ) {}

    open(): void {

        this.dialog.showModal();

        this.dialog.addEventListener("cancel", (e) => { 
            e.preventDefault();


            this.close(); 
        }, {once: true});

        this.cancelBtn.addEventListener("click", (e) => {
            
            
            this.close(); 
        }, { once: true });
    }
    close(): void {
        
        this.dialog.classList.add("closing");

        this.dialog.addEventListener("animationend", (e) => { 

            this.additionalCloseLogic?.execute();


            this.dialog.close();
            this.dialog.classList.remove("closing");

        }, { once: true });
    }
}