import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { HomePageCommand, CalendarPageCommand } from "./SwitchPageCommands";

import { IComponent, IComponentRemovable } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { CalendarPageComponent, HomePageComponent } from "./HTMLComponents";


export class UpcomingScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new UpcomingScreen(new HomePageComponent(), new CalendarPageComponent(), this.stateManager);
    }
}

class UpcomingScreen extends ScreenTemplate {

    private clickEventCalendarPage: ClickEventObserver;
    private clickEventHomePage: ClickEventObserver;

    constructor(private homeButton: IComponent, private calendarButton: IComponent, stateManager: IPageStateManager) {
        super(stateManager);

        this.clickEventCalendarPage = new ClickEventObserver(this.calendarButton.getHTML(), "click");
        this.clickEventCalendarPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventCalendarPage.setEvent(new CalendarPageCommand(this.stateManager));

        this.clickEventHomePage = new ClickEventObserver(this.homeButton.getHTML(), "click");
        this.clickEventCalendarPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventHomePage.setEvent(new HomePageCommand(this.stateManager));

        this.clickEventObservers = [this.clickEventCalendarPage, this.clickEventHomePage];
        
    }
}




export class UpcomingPage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new UpcomingScreenFactory(stateManager));
    }
}





