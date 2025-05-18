import { IComponent } from "../Utility/HTMLElement";

export class CalendarPageComponent implements IComponent {
    private calendarButton: HTMLElement;

    constructor() {
        this.calendarButton = document.getElementById("calendar-option")!;
    }

    render(): void {
    }

    getHTML(): HTMLElement {
        return this.calendarButton;
    }

}

export class UpcomingPageComponent implements IComponent {
    private upcomingButton: HTMLElement;

    constructor() {
        this.upcomingButton = document.getElementById("upcoming-option")!;
    }
    
    render(): void {
    }

    getHTML(): HTMLElement {
        return this.upcomingButton;
    }

}


export class HomePageComponent implements IComponent {
    private homeButton: HTMLElement;

    constructor() {
        this.homeButton = document.getElementById("home-option")!;
    }


    render(): void {
    }

    getHTML(): HTMLElement {
        return this.homeButton;
    }

}