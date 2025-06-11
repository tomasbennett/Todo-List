import { ICommandCriteria, IObjectCommand } from "../../../models/CommandModel";
import { IComponentEventListener, IComponentRemovable } from "../../../models/IComponentModels";
import { IIDGenerator } from "../../../models/IGenerator";
import { ILocalStorageRegistry } from "../../../models/Registry";
import { ClickEventRegistry } from "../../../util/EventRegistry";
import { PickRandomID } from "../../../util/IDRandomSelect";
import { ProjectContainer, ProjectTitle } from "../components/ProjectComponents";
import { IProject } from "../models/ProjectsModel";
import { AllSymbolID } from "../util/AllSymbolIDs";

export class ProjectHTMLCreator implements ICommandCriteria<IProject> {

    constructor(
        private localStorage: ILocalStorageRegistry<IProject>
    ) {}

    execute(criteria: IProject): void {
        const projHTMLTitle: IComponentRemovable<string> = new ProjectTitle();
        projHTMLTitle.setValue(criteria["title"]);



        const projHTMLContainer: IComponentEventListener<void> = new ProjectContainer(
                                                                                        projHTMLTitle,
                                                                                        new AllSymbolID(), 
                                                                                        new PickRandomID(), 
                                                                                        new ClickEventRegistry(
                                                                                                                new Map<HTMLElement, Array<(e: MouseEvent) => void>>()
                                                                                                               ),
                                                                                        criteria.id,
                                                                                        this.localStorage
                                                                                        );

        projHTMLContainer.addListener();
        projHTMLContainer.render(document.querySelector("#aside-projects-list-container > .sidebar-inner-container")!);
    }
}