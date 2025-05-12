import { DialogOpenClose } from "./DialogPages/DialogStartup";
import { HomePage } from "./Pages/HomePage";
import { DialogPageStateManager } from "./Utility/DialogPageState";
import { IPageStateManager, PageStateManager } from "./Utility/PageState";


const addButton: HTMLElement = document.getElementById("add-button")!;
const closeButton: HTMLElement = document.getElementById("close-dialog")!;

const dialogBox = document.getElementById("new-entry-dialog")! as HTMLDialogElement;


const dialogToggler: DialogOpenClose = new DialogOpenClose(dialogBox);


addButton.addEventListener("click", () => {
    dialogToggler.open(new DialogPageStateManager());
});

closeButton.addEventListener("click", () => {
    dialogToggler.close();
})


const pageStateManager: IPageStateManager = new PageStateManager();
pageStateManager.setState(new HomePage(pageStateManager));

