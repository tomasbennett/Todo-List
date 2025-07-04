import { ISubmitCommand } from "../../../models/CommandModel";
import { IState } from "../../../models/PageState";
import { ISubmitEventRegistry } from "../../../models/Registry";


export class ProjectsFormState implements IState {

    constructor(
        private form: HTMLFormElement,
        // private formInputVals: ICommand, I'm going to try setting the vals in the event listeners when the dialog is called up
        //I also just realised that for projects the input values don't matter as we can't edit them so as long as they are reset when we
        //submit and when we close the dialog
        private projectSubmitCommand: ISubmitCommand,
        private eventsRegistry: ISubmitEventRegistry
    ) {}

    load(): void {
        this.form.style.display = "flex";
        this.eventsRegistry.set(this.form, (e: SubmitEvent) => {
            this.projectSubmitCommand.execute(e);

        });

    }

    exit(): void {
        this.form.style.display = "none";
        this.form.reset();

        this.eventsRegistry.removeAll();
    }
}