import { DialogOpenClose } from "./DialogPages/DialogStartUp/DialogAdd";
import { HomePage } from "./Pages/HomePage";
import { HomePageCommand } from "./Pages/SwitchPageCommands";
import { ICommand } from "./Utility/EventObserver";
import { IPageStateManager, PageStateManager } from "./Utility/PageState";


const pageStateManager: IPageStateManager = new PageStateManager();
const homePageCommand: ICommand = new HomePageCommand(pageStateManager);
homePageCommand.execute();




const addButton: HTMLElement = document.getElementById("add-button")!;
const closeButton: HTMLElement = document.getElementById("close-dialog")!;
const dialogBox = document.getElementById("new-entry-dialog")! as HTMLDialogElement;

addButton?.addEventListener("click", () => {
    const dialogPageStateManager: IPageStateManager = new PageStateManager();
    const dialogToggler: DialogOpenClose = new DialogOpenClose(dialogBox, closeButton, dialogPageStateManager);
    dialogToggler.open();
});

