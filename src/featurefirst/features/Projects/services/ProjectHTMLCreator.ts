import { ICommandCriteria } from "../../../models/CommandModel";
import { IComponentRemovable } from "../../../models/IComponentModels";
import { IIDRandomSelect, ISymbolIDGenerator } from "../../../models/IGenerator";
import { IScreenGroupingCriteria } from "../../../models/OpenCloseModel";
import { IPageMediator } from "../../../models/PageMediator";
import { IState, IStateManager } from "../../../models/PageState";
import { IClickEventRegistry, ILocalStorageRegistry } from "../../../models/Registry";
import { ProjectContainer, ProjectRemoveBtn, ProjectTitle } from "../components/ProjectComponents";
import { projContainer } from "../components/ProjectContainer";
import { IProject } from "../models/ProjectsModel";
import { ProjectGenericState } from "../states/ProjectGenericState";

export class ProjectHTMLCreator<Task extends { id: number, project: number }> implements ICommandCriteria<IProject> {

    constructor(
        private allSymbolID: ISymbolIDGenerator,
        private idRandomSelect: IIDRandomSelect, //For building containers we have one instance of these

        private pageClickEventRegistry: IClickEventRegistry, // For setting the click events of a new page we set some of these

        private projRemovalCommand: ICommandCriteria<IComponentRemovable<void>>,
        private pageStateManager: IStateManager,
        private pageMediator: IPageMediator,
        private defaultPage: Map<HTMLElement, IState>,

        private taskRenderScreen: IScreenGroupingCriteria<Task>,
        private taskLocalStorage: ILocalStorageRegistry<Task>,
        private projLocalStorage: ILocalStorageRegistry<IProject>
    ) {}

    execute(criteria: IProject): void {
        const projHTMLTitle: IComponentRemovable<string> = new ProjectTitle();
        projHTMLTitle.setValue(criteria["title"]);

        const projHTMLContainer: IComponentRemovable<void> = new ProjectContainer(
                                                                                        projHTMLTitle,
                                                                                        this.allSymbolID, //This one can be passed through the constructor
                                                                                        this.idRandomSelect,
                                                                                        criteria.id
                                                                                    );


        const projRemoveBtn: IComponentRemovable<string> = new ProjectRemoveBtn();
        projRemoveBtn.setValue("X");

        //NEED TO SET IN THE CLICKEVENTLISTENERS FOR THE PAGES CLICKREGISTRY FOR BOTH THE REMOVE BTN AND CONTAINER, WE MIGHT NEED TO BRING THE REMOVE BTN OUT THE CONTAINER
        //AFTER SET UP BOTH WITH THEIR OWN COMMANDS

        const newProjState: IState = new ProjectGenericState<Task>(
            criteria.id,
            this.projLocalStorage,
            this.taskRenderScreen,
            this.taskLocalStorage
        );


        this.pageMediator.setLivePages(
            new Map<HTMLElement, IState>([
                [projHTMLContainer.getHTML(), newProjState]
            ])
        ); //This does the change page event logic 

        // this.pageClickEventRegistry.set(projHTMLContainer.getHTML(), (e: MouseEvent) => {
        //     this.pageMediator.changePage(e.target as HTMLElement);

        // });
        
        this.pageClickEventRegistry.set(projRemoveBtn.getHTML(), (e: MouseEvent) => {
            e.stopPropagation();

            if (this.pageStateManager.getState() === newProjState) {
                for (const [key, val] of this.defaultPage) {
                    this.pageMediator.changePage(key, val);
                    
                }
                
            }
            
            this.projRemovalCommand.execute(projHTMLContainer);
            
            this.pageClickEventRegistry.removeByID(projRemoveBtn.getHTML());
            
        });
        
        projHTMLContainer.render(projContainer);
        projRemoveBtn.render(projHTMLContainer.getHTML());
    }
}