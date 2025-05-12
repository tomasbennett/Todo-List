import { DialogOpenClose } from "./DialogPages/DialogStartup";


const addButton: HTMLElement = document.getElementById("add-button")!;
const closeButton: HTMLElement = document.getElementById("close-dialog")!;

const dialogBox = document.getElementById("new-entry-dialog")! as HTMLDialogElement;
const dialogToggler: DialogOpenClose = new DialogOpenClose(dialogBox);


addButton.addEventListener("click", () => {
    dialogToggler.open();
});

closeButton.addEventListener("click", () => {
    dialogToggler.close();
})



