import { IComponentRemovable } from "../../../models/IComponentModels";

export class ProjectOption implements IComponentRemovable<string> {
    private option: HTMLOptionElement;

    constructor(
        id: number
    ) {
        this.option = document.createElement("option");
        this.option.value = id.toString();
    }

    remove(): void {
        this.option.remove();
    }
    render(container: HTMLElement): void {
        container.appendChild(this.option);
    }
    setValue(value: string): void {
        this.option.textContent = value;
    }
    getHTML(): HTMLElement {
        return this.option;
    }
}