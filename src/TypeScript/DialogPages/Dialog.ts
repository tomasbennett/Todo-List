export class DialogOpenClose {

    constructor(private dialogElem: HTMLDialogElement) {}

    open(): void {
        this.dialogElem.showModal();
        this.dialogElem.addEventListener('cancel', (e) => {
            e.preventDefault();
            this.close();
        }, { once: true });
    }

    close(): void {
        this.dialogElem.classList.add("closing");

        this.dialogElem.addEventListener("animationend", () => { 
            this.dialogElem.close();
            this.dialogElem.classList.remove("closing");
         }, { once: true });
         
    }


}