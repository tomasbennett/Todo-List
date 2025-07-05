import { addBtn, cancelBtn, dialogElem, dialogSidePageOptionsContainer } from "./components/DialogComponent";
import { NotesFormBtnComponent, notesForm, notesFormBtn } from "./features/Notes/components/NotesForm";
import { INote } from "./features/Notes/models/NotesModel";
import { NoteSidebarScreen } from "./features/Notes/services/NoteSidebar";
import { NoteSubmitCommand } from "./features/Notes/services/NoteSubmitCommand";
import { NotesFormState } from "./features/Notes/states/NotesFormState";
import { ProjectFormBtnComponent, projectsForm, projectsFormBtn } from "./features/Projects/components/ProjectsForm";
import { IProject } from "./features/Projects/models/ProjectsModel";
import { ProjectRemovalCommand } from "./features/Projects/services/ProjectClickEvent";
import { ProjectHTMLCreator } from "./features/Projects/services/ProjectHTMLCreator";
import { ProjectSubmitCommand } from "./features/Projects/services/ProjectSubmitCommand";
import { ProjectsFormState } from "./features/Projects/states/ProjectsFormState";
import { AllSymbolID } from "./features/Projects/util/AllSymbolIDs";
import { fourWeeksFromToday, nextWeek } from "./features/Tasks/components/SetDates";
import { tasksCalendarBtn, tasksHomeBtn, tasksUpcomingBtn } from "./features/Tasks/components/TaskDateFilters";
import { TaskFormBtnComponent, tasksForm, tasksFormBtn } from "./features/Tasks/components/TasksFormComponents";
import { IDateRangeCheck } from "./features/Tasks/models/DateRangeModel";
import { IDateRangeScreen } from "./features/Tasks/models/DateRangeScreen";
import { ITask } from "./features/Tasks/models/TaskModels";
import { ITaskFormScreen, ITaskScreen } from "./features/Tasks/models/TaskScreen";
import { DateRangeSelectorScreen } from "./features/Tasks/services/CreateDateRangeScreen";
import { TaskForm } from "./features/Tasks/services/CreateTaskForm";
import { RenderTasks } from "./features/Tasks/services/CreateTaskHTML";
import { EditTaskCommand } from "./features/Tasks/services/EditTaskCommand";
import { CalendarState } from "./features/Tasks/states/CalendarState";
import { HomeState } from "./features/Tasks/states/HomeState";
import { TaskFormState } from "./features/Tasks/states/TaskFormState";
import { UpcomingState } from "./features/Tasks/states/UpcomingState";
import { DateToString } from "./features/Tasks/util/DateToText";
import { DateRangeCheck } from "./features/Tasks/util/DatesFilter";
import { ICommand, ICommandCriteria, ISubmitCommand } from "./models/CommandModel";
import { IDialogShutdownEditCommand } from "./models/DialogShutDownEditCommand";
import { IComponentRemovable } from "./models/IComponentModels";
import { IIDGenerator, IIDRandomSelect, ISymbolIDGenerator } from "./models/IGenerator";
import { IPageChangeMemento } from "./models/Memento";
import { IOpenClose } from "./models/OpenCloseModel";
import { IPageMediator } from "./models/PageMediator";
import { IState, IStateManager } from "./models/PageState";
import { IChangeEventRegistry, IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry, ISubmitEventRegistry } from "./models/Registry";
import { IDateToString } from "./models/Transformer";
import { DialogShutdownCommand, DialogShutdownEdit } from "./services/DialogShutDownCommands";
import { DialogToggle } from "./services/DialogToggle";
import { NoteLocalStorage, ProjectLocalStorage, TaskLocalStorage } from "./services/LocalStorage";
import { PageMediator } from "./services/PageMediator";
import { PageStateManager } from "./states/PageStateManager";
import { ClickEventRegistry, FormSubmitEventRegistry, InputChangeEventRegistry, PageEventRegistry } from "./util/EventRegistry";
import { IDGenertor } from "./util/IDGenerator";
import { PickRandomID } from "./util/IDRandomSelect";
import { ChangePageMemento } from "./util/PageStateMemento";
import { ScreenRegistry } from "./util/ScreenRegistry";


const taskLocalStorage: ILocalStorageRegistry<ITask> = new TaskLocalStorage();
const projLocalStorage: ILocalStorageRegistry<IProject> = new ProjectLocalStorage();
const noteLocalStorage: ILocalStorageRegistry<INote> = new NoteLocalStorage();



//********************************** THESE WILL BE UTIL CLASSES */

const homeScreenRegistry: IScreenComponentRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
const homeClickEventRegistry: IClickEventRegistry = new ClickEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>());
const homeChangeEventRegistry: IChangeEventRegistry = new InputChangeEventRegistry(new Map<HTMLInputElement, (e: Event) => void>());


const dateRangeScreenRegistry: IScreenComponentRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
const dateChangeEventRegistry: IChangeEventRegistry = new InputChangeEventRegistry(new Map<HTMLInputElement, (e: Event) => void>());




const dateToStr: IDateToString = new DateToString();
const dateCheck: IDateRangeCheck = new DateRangeCheck();

let taskIDGenerator: IIDGenerator;
let projIDGenerator: IIDGenerator;
let noteIDGenerator: IIDGenerator; //THIS NEEDS TO BE ONE ONLY IF THE ARRAY OF PROJECTS/TASKS/NOTES ARE EMPTY OR NO KEYS IN LOCAL STORAGE

const allSymbolIDs: ISymbolIDGenerator = new AllSymbolID();
const idRandomSelect: IIDRandomSelect = new PickRandomID();

//********************************** THESE WILL BE UTIL CLASSES */


const existingKeys: string[] = ["projects", "notes", "tasks"];

if (existingKeys.some((key) => localStorage.getItem(key) == null)) {
    taskIDGenerator = new IDGenertor(1);
    projIDGenerator = new IDGenertor(1);
    noteIDGenerator = new IDGenertor(1);

    //IF ALL THE KEYS ARE HERE THEN: LOAD WHATEVER WE HAVE IN THERE:
    //IF THERE ARE KEYS MISSING THEN: INITIATE NEW KEYS WITH EMPTY ARRAYS AS VALUES:
    noteLocalStorage.removeAll();
    taskLocalStorage.removeAll();
    projLocalStorage.removeAll();

    const defaultNotes: INote[] = [
        {
            id: noteIDGenerator.generate(),
            title: "Default Note Title 1!!!",
            body: "This is the first note's default body, I can only imagine how long this is going to take"
        },
        {
            id: noteIDGenerator.generate(),
            title: "Default Note Title 2!!!",
            body: "Defaults only appear when there is no keys HOWEVER (Read Note 3 Body)"
        },
        {
            id: noteIDGenerator.generate(),
            title: "Default Note Title 3!!!",
            body: "The id generator will revert to 1 every time the page is opened even if there is an existing precedent of ids meaning it will override them"
        }
    ];
    
    const defaultProj: IProject[] = [
        {
            id: projIDGenerator.generate(),
            title: "Personal"
        },
        {
            id: projIDGenerator.generate(),
            title: "Studies"
        },
        {
            id: projIDGenerator.generate(),
            title: "List 1"
        }
    
    ];
    
    const defaultTasks: ITask[] = [
        {
            id: taskIDGenerator.generate(),
            title: "Random 1 Task",
            body: "I have a body of text here as an example...",
            priority: "high",
            project: 0,
            date: new Date(),
            completed: true
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 2 Task",
            body: "For the actual date of today...",
            priority: "low",
            project: 0,
            date: new Date(2025, 6, 27),
            completed: false
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 3 Task",
            body: "For four weeks ahead of today...",
            priority: "medium",
            project: 0,
            date: fourWeeksFromToday(),
            completed: true
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 4 Task",
            body: "Set for project 1 default connect...",
            priority: "low",
            project: defaultProj[0]?.id ?? 0,
            date: new Date(2000, 7, 17),
            completed: false
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 5 Task",
            body: "Set for project 2 default connect...",
            priority: "low",
            project: defaultProj[1]?.id ?? 0,
            date: new Date(2025, 12, 31),
            completed: false
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 6 Task",
            body: "Set for project 3 default connect...",
            priority: "medium",
            project: defaultProj[2]?.id ?? 0,
            date: new Date(2012, 9, 18),
            completed: true
        },
        {
            id: taskIDGenerator.generate(),
            title: "Upcoming Check",
            body: "I have a body of text here as an example for the upcoming slot...",
            priority: "low",
            project: 1,
            date: nextWeek(),
            completed: false
        },
    
    ]
    
    defaultNotes.forEach((note) => {
        noteLocalStorage.set(note.id, note);
    });

    defaultProj.forEach((proj) => {
        projLocalStorage.set(proj.id, proj);
    });

    defaultTasks.forEach((task) => {
        taskLocalStorage.set(task.id, task);
    });

} else {
    const taskIDMax: number = taskLocalStorage.getAll().reduce((acc, curr) => { return Math.max(curr.id, acc) }, 0) + 1;
    const projIDMax: number = projLocalStorage.getAll().reduce((acc, curr) => { return Math.max(curr.id, acc) }, 0) + 1;
    const noteIDMax: number = noteLocalStorage.getAll().reduce((acc, curr) => { return Math.max(curr.id, acc) }, 0) + 1;

    taskIDGenerator = new IDGenertor(taskIDMax);
    projIDGenerator = new IDGenertor(projIDMax);
    noteIDGenerator = new IDGenertor(noteIDMax);

}









const mainPageClickEvents: IClickEventRegistry = new PageEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>());
const mainPageStateManager: IStateManager = new PageStateManager();
const mainPageMemento: IPageChangeMemento = new ChangePageMemento();

//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */




const dialogPageClickEventRegistry: IClickEventRegistry = new ClickEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>());
const dialogPageStateManager: IStateManager = new PageStateManager();
const dialogPageMemento: IPageChangeMemento = new ChangePageMemento();

const dialogSidebarPageRegistry: IScreenComponentRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());

const dialogAddRemovalCommand: ICommand = new DialogShutdownCommand(
    dialogPageStateManager,
    dialogSidebarPageRegistry
)

const dialogAddToggle: IOpenClose = new DialogToggle(
    dialogElem,
    cancelBtn,
    dialogAddRemovalCommand
    //ADDITIONAL LOGIC AFTER CLOSING THE DIALOG FOR THIS IS THAT WE WANT TO:
    // SO ANY HTMLELEMENT BEING REGISTRED WITH THE PAGE SHOULD SHOW UP WITH DISPLAY FLEX
    //LETS TRY AND MAKE THE PAGE SIMULATION OF COLOURS WORK WITH THE PAGE MEDIATOR
);


const dialogScreenRegistry: IScreenComponentRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
const dialogSubmitEventRegistry: ISubmitEventRegistry = new FormSubmitEventRegistry(new Map<HTMLFormElement, (e: SubmitEvent) => void>());




const taskFormScreen: ITaskFormScreen = new TaskForm<IProject>(
    dialogScreenRegistry,
    dialogSubmitEventRegistry,
    tasksForm,
    taskLocalStorage,
    projLocalStorage,
    dialogAddToggle,
    mainPageStateManager,
    dateToStr,
    taskIDGenerator
);



const dialogShutDownEditCommand: IDialogShutdownEditCommand<ITask> = new DialogShutdownEdit<ITask>(dialogSidebarPageRegistry);

const dialogEditToggle: IOpenClose = new DialogToggle(
    dialogElem,
    cancelBtn,
    dialogShutDownEditCommand
);

const taskFormScreenEdit: ITaskFormScreen = new TaskForm<IProject>(
    dialogScreenRegistry,
    dialogSubmitEventRegistry,
    tasksForm,
    taskLocalStorage,
    projLocalStorage,
    dialogEditToggle,
    mainPageStateManager,
    dateToStr,
    taskIDGenerator
);

dialogShutDownEditCommand.setTaskFormScreen(taskFormScreenEdit);







const taskEditCommand: ICommandCriteria<number> = new EditTaskCommand(
    dialogEditToggle,
    taskLocalStorage,
    taskFormScreenEdit,
    dialogSidebarPageRegistry,
    dialogPageMemento
);




const taskRenderScreen: ITaskScreen = new RenderTasks(
    taskLocalStorage,
    homeChangeEventRegistry,
    homeClickEventRegistry,
    homeScreenRegistry,
    taskEditCommand
);

const dateSelectorScreen: IDateRangeScreen = new DateRangeSelectorScreen(
    dateRangeScreenRegistry,
    dateChangeEventRegistry,
    dateToStr,
    taskRenderScreen,
    taskLocalStorage,
    dateCheck
);



const defaultPage: Map<HTMLElement, IState> = new Map<HTMLElement, IState>([
    [tasksHomeBtn, new HomeState(
        taskRenderScreen,
        taskLocalStorage
    )]
]);

const mainPageMediator: IPageMediator = new PageMediator(
    mainPageClickEvents,
    mainPageStateManager,
    mainPageMemento,
    defaultPage
);




mainPageMediator.setLivePages(new Map<HTMLElement, IState>([
    [tasksCalendarBtn, new CalendarState(dateSelectorScreen)],
    [tasksUpcomingBtn, new UpcomingState(taskRenderScreen, taskLocalStorage, dateCheck)]
]));

//********************************** THESE WILL BE MAIN PAGE CLASSES */

//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */








//********************************** THESE WILL BE MAIN PAGE CLASSES */

// const homeScreenState: IState = new HomeState(
//     taskRenderScreen,
//     taskLocalStorage
// );












//********************************** THESE WILL BE THE PROJECT PAGE EVENTS AND REGISTRY */

const projRemoveClickRegistry: IClickEventRegistry = new ClickEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>());

const projRemovalCommand: ICommandCriteria<IComponentRemovable<void>> = new ProjectRemovalCommand(
    projLocalStorage,
    mainPageClickEvents,
    taskLocalStorage
);

//ISSUE BEING THAT IT IS CAUSING AN ERROR TO DELETE THE FUNDAMENTALS, WORKING WITH EVENT LISTENERS IS AWFUL

const projHTMLCreation: ICommandCriteria<IProject> = new ProjectHTMLCreator(
    allSymbolIDs,
    idRandomSelect,
    projRemoveClickRegistry,
    projRemovalCommand,
    mainPageStateManager,
    mainPageMediator,
    defaultPage,
    taskRenderScreen,
    taskLocalStorage,
    projLocalStorage
);




//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */










//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */



//********************************** THESE WILL BE THE NOTES PAGE EVENTS AND REGISTRY */


const noteSidebarScreen: ICommandCriteria<INote> = new NoteSidebarScreen(
    mainPageMediator,
    mainPageClickEvents,
    mainPageStateManager,
    noteLocalStorage,
    homeScreenRegistry,
    homeClickEventRegistry,
    defaultPage

);

//********************************** THESE WILL BE THE NOTES PAGE EVENTS AND REGISTRY */










noteLocalStorage.getAll().forEach((note) => {
    noteSidebarScreen.execute(note);

});

projLocalStorage.getAll().forEach((proj) => {
    projHTMLCreation.execute(proj);

});








//********************************** ALL THINGS DIALOG */










const taskFormState: IState = new TaskFormState(taskFormScreen);








const projSubmitCommand: ISubmitCommand = new ProjectSubmitCommand(
    projIDGenerator,
    projHTMLCreation,
    projLocalStorage,
    dialogAddToggle
);

const projFormState: IState = new ProjectsFormState(
    projectsForm,
    projSubmitCommand,
    dialogSubmitEventRegistry
);









const noteSubmitCommand: ISubmitCommand = new NoteSubmitCommand(
    noteIDGenerator,
    noteSidebarScreen,
    noteLocalStorage,
    dialogAddToggle
);


const noteFormState: IState = new NotesFormState(
    notesForm,
    noteSubmitCommand,
    dialogSubmitEventRegistry
);










addBtn.addEventListener("click", () => {
    //SHOULD THE PAGE MEDIATOR BELONG INSIDE OF THE EVENT LISTENER: LEADING THEORY IS THAT YES BUT KEEP THE REGISTRIES OUTSIDE AS THE CONSTRUCTOR WILL ALWAYS SET, WE JUST NEED TO
    //CLEAR THE REGISTRY ON CLOSE
    
    
    
    const taskFormBtnComponent: IComponentRemovable<string> = new TaskFormBtnComponent();
    dialogSidebarPageRegistry.set(taskFormBtnComponent.getHTML(), taskFormBtnComponent);
    taskFormBtnComponent.setValue("Task");
    taskFormBtnComponent.render(dialogSidePageOptionsContainer);
    
    const projFormBtnComponent: IComponentRemovable<string> = new ProjectFormBtnComponent();
    dialogSidebarPageRegistry.set(projFormBtnComponent.getHTML(), projFormBtnComponent);
    projFormBtnComponent.setValue("Project");
    projFormBtnComponent.render(dialogSidePageOptionsContainer);
    
    const noteFormBtnComponent: IComponentRemovable<string> = new NotesFormBtnComponent();
    dialogSidebarPageRegistry.set(noteFormBtnComponent.getHTML(), noteFormBtnComponent);
    noteFormBtnComponent.setValue("Note");
    noteFormBtnComponent.render(dialogSidePageOptionsContainer);
    
    
    
    
    
    
    const dialogPageMediator: IPageMediator = new PageMediator(
        dialogPageClickEventRegistry,
        dialogPageStateManager,
        dialogPageMemento,
        new Map<HTMLElement, IState>([
            [taskFormBtnComponent.getHTML(), taskFormState]
        ])
    );

    dialogPageMediator.setLivePages(new Map<HTMLElement, IState>([
        [projFormBtnComponent.getHTML(), projFormState],
        [noteFormBtnComponent.getHTML(), noteFormState]
    ]));


    
    dialogAddToggle.open();
});


//********************************** ALL THINGS DIALOG */