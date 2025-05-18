import { ICommand, ClickEventObserver } from "../Utility/EventObserver";


export class TaskTransformCommand implements ICommand {


    execute(): void {
        // Raw Form data gets transformed in the component or make a new command type,
        // This can take a certified Record<string, unknown and then check if it's a TaskLiteral and upload it
    }

}