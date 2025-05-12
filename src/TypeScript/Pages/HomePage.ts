import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";
import { IComponent, IComponentRemovable, IComponentEventListener, IComponentInteractive } from "../Utility/HTMLElement";
import { PageState, PageStateManager } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";


export class HomeScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        return new HomeScreen(this.stateManager);
    }
}

class HomeScreen extends ScreenTemplate {

    constructor(stateManager: PageStateManager) {
        super(stateManager);


        this.components = [];
        this.componentsRemovable = [];
        this.componentsEvent = [];
    }
}




export class HomePage implements PageState {
    private screenFactory: ScreenFactory;
    private screenTemplate!: ScreenTemplate;

    constructor(stateManager: PageStateManager) {
        this.screenFactory = new HomeScreenFactory(stateManager);
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

    addEventListeners(stateManager: PageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));

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








export class OnePlayerSelect implements IComponentInteractive {
    private onePlayerSelectButton: HTMLDivElement;

    private clickEvent: ClickEventObserver;
    
    private triggerObserver: () => void;

    constructor() {
        this.onePlayerSelectButton = document.createElement("div");
        this.onePlayerSelectButton.classList.add("Home", "screen", "poneselect");
        this.onePlayerSelectButton.textContent = "This is the Home screen, click to go to Game Screen";

        this.clickEvent = new ClickEventObserver()
        
        this.triggerObserver = () => this.clickEvent.triggerEvent();
    }

    addEventListeners(stateManager: PageStateManager): void {
        this.clickEvent.setEvent(new ExitPageCommand(stateManager));

        this.onePlayerSelectButton.addEventListener("click", this.triggerObserver);
    }

    removeEventListeners(): void {
        this.onePlayerSelectButton.removeEventListener("click", this.triggerObserver);
    }

    render(): void {
        document.body.appendChild(this.onePlayerSelectButton);
    }

    removeElem(): void {
        this.onePlayerSelectButton.remove();
    }

    getHTML(): HTMLElement {
        return this.onePlayerSelectButton;
    }
}


