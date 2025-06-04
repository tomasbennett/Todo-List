import { notesFormBtn } from "./features/Notes/components/NotesForm";
import { NotesFormState } from "./features/Notes/states/NotesFormState";
import { projectsFormBtn } from "./features/Projects/components/ProjectsForm";
import { ProjectsFormState } from "./features/Projects/states/ProjectsFormState";
import { tasksFormBtn } from "./features/Tasks/components/TasksForm";
import { tasksCalendarBtn, tasksHomeBtn, tasksUpcomingBtn } from "./features/Tasks/components/TasksHomeFilters";
import { CalendarState } from "./features/Tasks/states/CalendarState";
import { HomeState } from "./features/Tasks/states/HomeState";
import { TaskFormState } from "./features/Tasks/states/TaskFormState";
import { UpcomingState } from "./features/Tasks/states/UpcomingState";
import { IPageMediator } from "./models/PageMediator";
import { IState } from "./models/PageState";
import { PageMediator } from "./services/PageMediator";




const homePageMap: Map<HTMLElement, IState> = new Map<HTMLElement, IState>([
    [tasksUpcomingBtn, new UpcomingState()],
    [tasksCalendarBtn, new CalendarState()]
]);
const homeMediator: IPageMediator = new PageMediator(tasksHomeBtn, new HomeState());
homeMediator.setLivePages(homePageMap);



// const dialogPageMap: Map<HTMLElement, IState> = new Map<HTMLElement, IState>([
//     [projectsFormBtn, new ProjectsFormState()],
//     [notesFormBtn, new NotesFormState()]
// ]);

// const mediator: IPageMediator = new PageMediator(tasksFormBtn, new TaskFormState());
// mediator.setLivePages(dialogPageMap);







/************************************************************
 * 
 * 
 */


//ADD AN EEVENTLISTENER TO {addBtn} that opens the dialog box

//ADD HTMLELEMENTS TO A PAGE ISTATE
//HAVE A STATE MANAGER THAT MAINTAINS A CURRENTPAGE
//WHENEVER YOU CLICK ONE OF THESE HTML ELEMENTS IT SHOULD RUN A FUNCTION SETTING 
//ONLY THE CURRENT STATE DOESN'T NEED THE EVENT LISTENERS 



//Create a list of html elements that correspond to pages being a class that loads in and loads out certain htmlelements
//This needs to be so that when clicked the html element will load out a given page and load in this page it's related to thus we need

//Setting pages should be a simple functionality that takes the html elements and then the corresponding page, all you should do at that point is
//Be able to add more pages to the map in question and then run a set change page method which makes the function and given an element will set every one of those
//HERE IS WHERE IT BREAKS DOWN!!!
//PROBLEM (1): If we add new pages when do they go straight to the event listeners as well