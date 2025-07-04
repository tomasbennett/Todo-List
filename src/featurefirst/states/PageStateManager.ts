import { IState, IStateCriteria, IStateManager, IStateManagerCriteria } from "../models/PageState";

export class PageStateManager implements IStateManager {
    private state!: IState;

    constructor() {}

    set(newState: IState): void {
        this.state = newState;
    }
    getState(): IState {
        return this.state;
    }
    load(): void {
        this.state.load();
    }
    exit(): void {
        this.state.exit();
    }
}

export class PageStateManagerCriteria<LoadInData extends { id: number }> implements IStateManagerCriteria<LoadInData> {
    constructor(private state: IStateCriteria<LoadInData>) {}

    set(newState: IStateCriteria<LoadInData>): void {
        this.state = newState;
    }
    load(data: LoadInData): void {
        this.state.load(data);
    }
    exit(): void {
        this.state.exit();
    }
}

//WHEN YOU COME BACK, MAKE ALL TASK FORM SCREENS INTO ISTATES, each should accept no data in load()
//MAKE A SUBMIT COMMAND FOR EACH TASK, NOTE AND PROJECT that you can pass through to the ISTATE and attach the form to
//MAKE SCREENS THAT WHEN TASK IS EDITED CAN BE RUN WITH .LOAD(task: ITASK) that goes towards filling the task form
//MAKE SUBMIT COMMAND ATTACH TO THAT
//MAKE PAGE MEDIATOR THAT CONNECTS THE FUNCTIONALITY OF PAGES
//MAKE ALL PROJECT, NOTES AND HOME/TASK PAGE ELEMENTS CHANGE THE PAGE WHEN CLICKED
//MAKE A DELETION MECHANISM SEND US BACK TO THE HOME PAGE
//MAKE A WAY OF ATTACHING NEW ELEMENTS TO THE USERS LOCALSTORAGE IF THEY DON'T ALREADY HAVE A KEY NAMED PROJECT, TASK OR NOTES THERE 