import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { UpcomingPageCommand, CalendarPageCommand } from "./SwitchPageCommands";

import { IComponent, IComponentRemovable } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { CalendarPageComponent, UpcomingPageComponent } from "./HTMLComponents";
import { IFetchPaste, TaskFetch } from "../RunTimeComponents/RTFunctionality";
import { LocalStorageStratergy, TasksLocalStorage } from "../LocalStorage/LocalStorage";
import { TaskLiteral } from "../Utility/StorageSchemas";
import { UploadToLocalStorage } from "../Utility/RecordModifier/UploadForm";


export class HomeScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new HomeScreen(new UpcomingPageComponent(), new CalendarPageComponent(), this.stateManager);
    }
}

class HomeScreen extends ScreenTemplate {
    private clickEventUpcomingPage: ClickEventObserver;
    private clickEventCalendarPage: ClickEventObserver;

    constructor(private upcomingButton: IComponent, private calendarButton: IComponent, stateManager: IPageStateManager) {
        super(stateManager);

        this.clickEventUpcomingPage = new ClickEventObserver(this.upcomingButton.getHTML(), "click");
        this.clickEventUpcomingPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventUpcomingPage.setEvent(new UpcomingPageCommand(this.stateManager));

        this.clickEventCalendarPage = new ClickEventObserver(this.calendarButton.getHTML(), "click");
        this.clickEventCalendarPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventCalendarPage.setEvent(new CalendarPageCommand(this.stateManager));

        this.clickEventObservers = [this.clickEventCalendarPage, this.clickEventUpcomingPage];

        const localStorageFetch: LocalStorageStratergy<TaskLiteral> = new TasksLocalStorage();
        const tasks: IFetchPaste = new TaskFetch(localStorageFetch.getAll());

        this.components = [];
        this.componentsRemovable = [];

        for (const i of tasks.fetchData()) {
            this.components.push(i);
            this.componentsRemovable.push(i);
        }

        //return of a method that gives us an array of IComponentRemovable[][]??? 



    }
}




export class HomePage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new HomeScreenFactory(stateManager))
    }
}







