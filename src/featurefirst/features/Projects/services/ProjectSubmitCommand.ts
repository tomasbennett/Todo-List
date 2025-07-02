import { ICommandCriteria, ISubmitCommand } from "../../../models/CommandModel";
import { IIDGenerator } from "../../../models/IGenerator";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { IProject, ProjectSchema } from "../models/ProjectsModel";

export class ProjectSubmitCommand implements ISubmitCommand {

    constructor(
        private projIDGenerator: IIDGenerator,
        private projHTMLCreator: ICommandCriteria<IProject>,
        private projLocalStorage: ILocalStorageRegistry<IProject>
    ) {

    }

    execute(criteria: SubmitEvent): void {

        const form: HTMLFormElement = criteria.target as HTMLFormElement;
        const projTitleInput: HTMLInputElement = form.querySelector("input[name='title']") as HTMLInputElement;

        const obj: Record<string, unknown> = {};
        
        obj["id"] = this.projIDGenerator.generate();
        obj["title"] = projTitleInput.value;

        if (ProjectSchema.safeParse(obj).success) {
            this.projLocalStorage.set(obj["id"] as number, obj as IProject);
            this.projHTMLCreator.execute(obj as IProject);

        }
    }
}