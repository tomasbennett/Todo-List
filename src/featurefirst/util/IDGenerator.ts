import { IIDGenerator } from "../models/IGenerator";

export class IDGenertor implements IIDGenerator {
    constructor(private startNum: number) {}

    generate(): number {
        return this.startNum++;
    }
}