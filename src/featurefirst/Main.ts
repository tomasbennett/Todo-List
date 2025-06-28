import { INote } from "./features/Notes/models/NotesModel";
import { IProject } from "./features/Projects/models/ProjectsModel";
import { ProjectRemovalCommand } from "./features/Projects/services/ProjectClickEvent";
import { ProjectHTMLCreator } from "./features/Projects/services/ProjectHTMLCreator";
import { AllSymbolID } from "./features/Projects/util/AllSymbolIDs";
import { fourWeeksFromToday } from "./features/Tasks/components/SetDates";
import { tasksCalendarBtn, tasksHomeBtn, tasksUpcomingBtn } from "./features/Tasks/components/TaskDateFilters";
import { IDateRangeCheck } from "./features/Tasks/models/DateRangeModel";
import { IDateRangeScreen } from "./features/Tasks/models/DateRangeScreen";
import { ITask } from "./features/Tasks/models/TaskModels";
import { ITaskScreen } from "./features/Tasks/models/TaskScreen";
import { DateRangeSelectorScreen } from "./features/Tasks/services/CreateDateRangeScreen";
import { RenderTasks } from "./features/Tasks/services/CreateTaskHTML";
import { CalendarState } from "./features/Tasks/states/CalendarState";
import { HomeState } from "./features/Tasks/states/HomeState";
import { UpcomingState } from "./features/Tasks/states/UpcomingState";
import { DateToString } from "./features/Tasks/util/DateToText";
import { DateRangeCheck } from "./features/Tasks/util/DatesFilter";
import { ICommandCriteria } from "./models/CommandModel";
import { IComponentRemovable } from "./models/IComponentModels";
import { IIDGenerator, IIDRandomSelect, ISymbolIDGenerator } from "./models/IGenerator";
import { IPageChangeMemento } from "./models/Memento";
import { IPageMediator } from "./models/PageMediator";
import { IState, IStateManager } from "./models/PageState";
import { IClickEventRegistry, ILocalStorageRegistry } from "./models/Registry";
import { IDateToString } from "./models/Transformer";
import { NoteLocalStorage, ProjectLocalStorage, TaskLocalStorage } from "./services/LocalStorage";
import { PageMediator } from "./services/PageMediator";
import { PageStateManager } from "./states/PageStateManager";
import { ClickEventRegistry, InputChangeEventRegistry } from "./util/EventRegistry";
import { IDGenertor } from "./util/IDGenerator";
import { PickRandomID } from "./util/IDRandomSelect";
import { ChangePageMemento } from "./util/PageStateMemento";
import { ScreenRegistry } from "./util/ScreenRegistry";


const taskLocalStorage: ILocalStorageRegistry<ITask> = new TaskLocalStorage();
const projLocalStorage: ILocalStorageRegistry<IProject> = new ProjectLocalStorage();
const noteLocalStorage: ILocalStorageRegistry<INote> = new NoteLocalStorage();



//********************************** THESE WILL BE UTIL CLASSES */

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










//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */

const taskRenderScreen: ITaskScreen = new RenderTasks(
    new ClickEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>()),
    new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>())
);

const dateSelectorScreen: IDateRangeScreen = new DateRangeSelectorScreen(
    new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>()),
    new InputChangeEventRegistry(new Map<HTMLInputElement, (e: Event) => void>()),
    dateToStr,
    taskRenderScreen,
    taskLocalStorage,
    dateCheck
);




//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */








//********************************** THESE WILL BE MAIN PAGE CLASSES */

// const homeScreenState: IState = new HomeState(
//     taskRenderScreen,
//     taskLocalStorage
// );


const mainPageClickEvents: IClickEventRegistry = new ClickEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>());
const mainPageStateManager: IStateManager = new PageStateManager();
const mainPageMemento: IPageChangeMemento = new ChangePageMemento();
const mainPageMediator: IPageMediator = new PageMediator(
    mainPageClickEvents,
    mainPageStateManager,
    mainPageMemento,
    new Map<HTMLElement, IState>([
        [tasksHomeBtn, new HomeState(
            taskRenderScreen,
            taskLocalStorage
        )]
    ])
);




mainPageMediator.setLivePages(new Map<HTMLElement, IState>([
    [tasksCalendarBtn, new CalendarState(dateSelectorScreen)],
    [tasksUpcomingBtn, new UpcomingState(taskRenderScreen, taskLocalStorage, dateCheck)]
]));

//********************************** THESE WILL BE MAIN PAGE CLASSES */












//********************************** THESE WILL BE THE PROJECT PAGE EVENTS AND REGISTRY */

const projRemovalCommand: ICommandCriteria<IComponentRemovable<void>> = new ProjectRemovalCommand(
    projLocalStorage,
    mainPageClickEvents,
    taskLocalStorage
);



const projHTMLCreation: ICommandCriteria<IProject> = new ProjectHTMLCreator(
    allSymbolIDs,
    idRandomSelect,
    mainPageClickEvents,
    projRemovalCommand,
    mainPageStateManager,
    mainPageMediator,
    tasksHomeBtn,
    taskRenderScreen,
    taskLocalStorage
);




//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */










//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */


noteLocalStorage.getAll().forEach((note) => {
    
});

projLocalStorage.getAll().forEach((proj) => {
    projHTMLCreation.execute(proj);
});
