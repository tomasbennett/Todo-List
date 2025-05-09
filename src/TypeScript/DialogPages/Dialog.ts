export class DialogOpenClose {

    constructor(private dialogElem: HTMLDialogElement) {}

    open(): void {
        this.dialogElem.showModal();
    }

    close(): void {
        this.dialogElem.classList.add("closing");

        this.dialogElem.addEventListener("animationend", () => { 
            this.dialogElem.close();
            this.dialogElem.classList.remove("closing");
         }, { once: true });
         
    }


}