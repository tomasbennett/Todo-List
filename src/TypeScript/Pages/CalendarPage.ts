import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { HomePageCommand, UpcomingPageCommand } from "./SwitchPageCommands";

import { IComponent, IComponentRemovable, IComponentEventListener, IComponentInteractive } from "../Utility/HTMLElement";
import { PageState, IPageStateManager } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";


export class CalendarScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new CalendarScreen(this.stateManager);
    }
}

class CalendarScreen extends ScreenTemplate {
    private homeButton: IComponentEventListener;
    private upcomingButton: IComponentEventListener;


    constructor(stateManager: IPageStateManager) {
        super(stateManager);

        this.homeButton = new HomePageComponent();
        this.upcomingButton = new UpcomingPageComponent();


        this.components = [];
        this.componentsRemovable = [];
        this.componentsEvent = [this.homeButton, this.upcomingButton];
    }
}




export class CalendarPage implements PageState {
    private screenFactory: ScreenFactory;
    private screenTemplate!: ScreenTemplate;

    constructor(stateManager: IPageStateManager) {
        this.screenFactory = new CalendarScreenFactory(stateManager);
    }

    load(): void {
        this.screenTemplate = this.screenFactory.instantiate();
    }

    exit(): void {
        this.screenTemplate.removeEventListeners();
        this.screenTemplate.remove();
    }
}



export class HomePageComponent implements IComponentEventListener {
    private homeButton: HTMLElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.homeButton = document.getElementById("home-option")!;

        this.clickEvent = new ClickEventObserver()
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();
        
    }

    addEventListeners(stateManager: IPageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));
        this.clickEvent.setEvent(new HomePageCommand(stateManager));

        this.homeButton.addEventListener("click", this.triggerObserver);
    }

    removeEventListeners(): void {
        this.homeButton.removeEventListener("click", this.triggerObserver);
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.homeButton;
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




