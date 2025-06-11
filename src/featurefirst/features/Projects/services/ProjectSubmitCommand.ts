import { ICommandCriteria, ISubmitCommand } from "../../../models/CommandModel";
import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
import { IIDGenerator } from "../../../models/IGenerator";
import { IProject, ProjectSchema } from "../models/ProjectsModel";

export class ProjectSubmitCommand implements ISubmitCommand {

    constructor(
        private projIDGenerator: IIDGenerator,
        private projHTMLCreator: ICommandCriteria<IProject>
    ) {

    }

    execute(criteria: SubmitEvent): void {
        const form: HTMLFormElement = criteria.target as HTMLFormElement;
        const projTitleInput: HTMLInputElement = form.querySelector("input[name='title']") as HTMLInputElement;

        const obj: Record<string, unknown> = {};
        obj["id"] = this.projIDGenerator.generate();
        obj["title"] = projTitleInput.value;

        if (ProjectSchema.safeParse(obj)) {
            this.projHTMLCreator.execute(obj as IProject);
        }


    }
}