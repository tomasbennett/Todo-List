import { DialogOpenClose } from "./DialogPages/DialogStartup";
import { HomePage } from "./Pages/HomePage";
import { DialogPageStateManager } from "./Utility/DialogPageState";
import { IPageStateManager, PageStateManager } from "./Utility/PageState";


const addButton: HTMLElement = document.getElementById("add-button")!;
const closeButton: HTMLElement = document.getElementById("close-dialog")!;

const dialogBox = document.getElementById("new-entry-dialog")! as HTMLDialogElement;




addButton.addEventListener("click", () => {
    const dialogPageStateManager: IPageStateManager = new DialogPageStateManager();
    const dialogToggler: DialogOpenClose = new DialogOpenClose(dialogBox, dialogPageStateManager);

    dialogToggler.open();
    
    closeButton.addEventListener("click", () => {
        dialogToggler.close();
    }, { once: true });
});



const pageStateManager: IPageStateManager = new PageStateManager();
pageStateManager.setState(new HomePage(pageStateManager));

