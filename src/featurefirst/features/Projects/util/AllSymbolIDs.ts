import { ISymbolIDGenerator } from "../../../models/IGenerator";

export class AllSymbolID implements ISymbolIDGenerator {
    constructor() {}
 
    generate(container: HTMLElement): string[] {
        const symbols: SVGSymbolElement[] = Array.from(container.querySelectorAll<SVGSymbolElement>("symbol"));
        return symbols.map(sym => sym.id).filter(id => id.length > 0);
    }
}