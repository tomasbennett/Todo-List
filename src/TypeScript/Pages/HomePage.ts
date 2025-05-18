import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { UpcomingPageCommand, CalendarPageCommand } from "./SwitchPageCommands";

import { IComponent, IComponentRemovable, IComponentEventListener, IComponentInteractive } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";


export class HomeScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new HomeScreen(this.stateManager);
    }
}

class HomeScreen extends ScreenTemplate {
    private calendarButton: IComponentEventListener;
    private upcomingButton: IComponentEventListener;


    constructor(stateManager: IPageStateManager) {
        super(stateManager);

        this.calendarButton = new CalendarPageComponent();
        this.upcomingButton = new UpcomingPageComponent();


        this.components = [];
        this.componentsRemovable = [];
        this.componentsEvent = [this.calendarButton, this.upcomingButton];
    }
}




export class HomePage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new HomeScreenFactory(stateManager))
    }
}



export class CalendarPageComponent implements IComponentEventListener {
    private calendarButton: HTMLElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.calendarButton = document.getElementById("calendar-option")!;

        this.clickEvent = new ClickEventObserver();
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();
        
    }

    addEventListeners(stateManager: IPageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));
        this.clickEvent.setEvent(new CalendarPageCommand(stateManager));

        this.calendarButton.addEventListener("click", this.triggerObserver);
    }

    removeEventListeners(): void {
        this.calendarButton.removeEventListener("click", this.triggerObserver);
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.calendarButton;
    }

}

export class UpcomingPageComponent implements IComponentEventListener {
    private upcomingButton: HTMLElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.upcomingButton = document.getElementById("upcoming-option")!;

        this.clickEvent = new ClickEventObserver()
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();
        
    }

    addEventListeners(stateManager: IPageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));
        this.clickEvent.setEvent(new UpcomingPageCommand(stateManager));

        this.upcomingButton.addEventListener("click", this.triggerObserver);
    }

    removeEventListeners(): void {
        this.upcomingButton.removeEventListener("click", this.triggerObserver);
    }
    
    render(): void {
    }

    getHTML(): HTMLElement {
        return this.upcomingButton;
    }

}




