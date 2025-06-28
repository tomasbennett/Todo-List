import { IOpenClose } from "../../../models/OpenCloseModel";
import { IState } from "../../../models/PageState";


export class NoteDynamicPage implements IState {
    constructor(
        private notesRender: IOpenClose
    ) {}

    load(): void {
        

    }
    exit(): void {
        this.notesRender.close();
    }
}