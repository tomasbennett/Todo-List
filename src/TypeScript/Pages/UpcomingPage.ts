import { ICommand, ClickEventObserver, ExitPageCommand, CalendarPageCommand, HomePageCommand } from "../Utility/EventObserver";
import { IComponent, IComponentRemovable, IComponentEventListener, IComponentInteractive } from "../Utility/HTMLElement";
import { PageState, IPageStateManager } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";


export class UpcomingScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new UpcomingScreen(this.stateManager);
    }
}

class UpcomingScreen extends ScreenTemplate {
    private calendarButton: IComponentEventListener;
    private homeButton: IComponentEventListener;


    constructor(stateManager: IPageStateManager) {
        super(stateManager);

        this.calendarButton = new CalendarPageComponent();
        this.homeButton = new HomePageComponent();


        this.components = [];
        this.componentsRemovable = [];
        this.componentsEvent = [this.calendarButton, this.homeButton];
    }
}




export class UpcomingPage implements PageState {
    private screenFactory: ScreenFactory;
    private screenTemplate!: ScreenTemplate;

    constructor(stateManager: IPageStateManager) {
        this.screenFactory = new UpcomingScreenFactory(stateManager);
    }

    load(): void {
        this.screenTemplate = this.screenFactory.instantiate();
    }

    exit(): void {
        this.screenTemplate.removeEventListeners();
        this.screenTemplate.remove();
    }
}



export class CalendarPageComponent implements IComponentEventListener {
    private calendarButton: HTMLElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.calendarButton = document.getElementById("calendar-option")!;

        this.clickEvent = new ClickEventObserver()
        
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




