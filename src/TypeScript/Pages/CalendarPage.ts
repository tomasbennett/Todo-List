import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { HomePageCommand, UpcomingPageCommand } from "./SwitchPageCommands";

import { IComponent, IComponentRemovable } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { HomePageComponent, UpcomingPageComponent } from "./HTMLComponents";


export class CalendarScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new CalendarScreen(new UpcomingPageComponent(), new HomePageComponent(), this.stateManager);
    }
}

class CalendarScreen extends ScreenTemplate {
    private clickEventUpcomingPage: ClickEventObserver;
    private clickEventHomePage: ClickEventObserver;

    constructor(private upcomingButton: IComponent, private homeButton: IComponent, stateManager: IPageStateManager) {
        super(stateManager);


        // this.homeButton = new HomePageComponent();
        // this.upcomingButton = new UpcomingPageComponent();

        this.clickEventUpcomingPage = new ClickEventObserver(this.upcomingButton.getHTML(), "click");
        this.clickEventUpcomingPage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventUpcomingPage.setEvent(new UpcomingPageCommand(this.stateManager));

        this.clickEventHomePage = new ClickEventObserver(this.homeButton.getHTML(), "click");
        this.clickEventHomePage.setEvent(new ExitPageCommand(this.stateManager));
        this.clickEventHomePage.setEvent(new HomePageCommand(this.stateManager));

        this.clickEventObservers = [this.clickEventHomePage, this.clickEventUpcomingPage];
        
    }
}




export class CalendarPage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new CalendarScreenFactory(stateManager))
    }
}





