import { ICommand, ClickEventObserver, ExitPageCommand } from "../Utility/EventObserver";

import { IComponent, IComponentRemovable } from "../Utility/HTMLElement";
import { PageState, IPageStateManager, PageStateTemplate } from "../Utility/PageState";
import { ScreenFactory, ScreenTemplate } from "../Utility/Screens";
import { IFetchPrint, IHTMLOperation, FetchPrint } from "../RunTimeComponents/RTFunctionality";
import { LocalStorageStratergy, ProjectsLocalStorage, TasksLocalStorage } from "../LocalStorage/LocalStorage";
import { ProjectLiteral, TaskLiteral } from "../Utility/StorageSchemas";
import { UploadToLocalStorage } from "../Utility/RecordModifier/UploadForm";
import { TasksHTMLOperations } from "../RunTimeComponents/Functionality/TasksToHTML";


export class HomeScreenFactory extends ScreenFactory {

    create(): ScreenTemplate {
        const localStorageHomeTasks: LocalStorageStratergy<TaskLiteral> = new TasksLocalStorage();
        const homeScreen: ScreenTemplate = new ScreenTemplate(this.stateManager);
        
        const homeContainer: HTMLElement = document.getElementById("home-content-container")!;
        
        for (const task of localStorageHomeTasks.getAll()) {
            const conversion: IFetchPrint = new FetchPrint<TaskLiteral>(task, TasksHTMLOperations, homeContainer);
            const removableComponent: IComponentRemovable = conversion.fetchContainer();
            homeScreen.setComponent(removableComponent);
            homeScreen.setRemove(removableComponent);
        } //No changing, we make a static page that implements the projects and notes!!!

        const taskModification: ClickEventObserver<"click"> = new ClickEventObserver(document.body, "click");
        taskModification.setEvent(); //Task Completed Command
        taskModification.setEvent(); //Task Edit Command
        taskModification.setEvent(); //Task Del Command

        homeScreen.setEventListener(taskModification);
        homeScreen.setEventRemove(taskModification);

        return homeScreen;
    }
}

// class HomeScreen extends ScreenTemplate {
//     private clickEventUpcomingPage: ClickEventObserver;
//     private clickEventCalendarPage: ClickEventObserver;

//     constructor(private upcomingButton: IComponent, private calendarButton: IComponent, stateManager: IPageStateManager) {
//         super(stateManager);

//         this.clickEventUpcomingPage = new ClickEventObserver(this.upcomingButton.getHTML(), "click");
//         this.clickEventUpcomingPage.setEvent(new ExitPageCommand(this.stateManager));
//         this.clickEventUpcomingPage.setEvent(new UpcomingPageCommand(this.stateManager));

//         this.clickEventCalendarPage = new ClickEventObserver(this.calendarButton.getHTML(), "click");
//         this.clickEventCalendarPage.setEvent(new ExitPageCommand(this.stateManager));
//         this.clickEventCalendarPage.setEvent(new CalendarPageCommand(this.stateManager));

//         this.clickEventObservers = [this.clickEventCalendarPage, this.clickEventUpcomingPage];



//         const localStorageFetchTasks: LocalStorageStratergy<TaskLiteral> = new TasksLocalStorage();
//         for (const i of localStorageFetchTasks.getAll()) {
//             const fetch: IFetchPrint = new FetchPrint<TaskLiteral>(i, TasksHTMLOperations, document.getElementById("home-content-container")!);
//             const container: IComponentRemovable = fetch.fetchContainer();
//             this.components.push(container);
//             this.componentsRemovable.push(container);
//         }

//         const localStorageFetchProjects: LocalStorageStratergy<ProjectLiteral> = new ProjectsLocalStorage();
//         for (const i of localStorageFetchProjects.getAll()) {
//             const fetch: IFetchPrint = new FetchPrint<ProjectLiteral>(i, , document.getElementById("")!);
//             const container: IComponentRemovable = fetch.fetchContainer();
//             this.components.push(container);
//             this.componentsRemovable.push(container);
//         }




//     }
// }




export class HomePage extends PageStateTemplate {
    constructor(stateManager: IPageStateManager) {
        super(new HomeScreenFactory(stateManager))
    }
}







