import { IIDRandomSelect } from "../models/IGenerator";

export class PickRandomID implements IIDRandomSelect {
    constructor() {}

    pickRandom(arr: string[]): string | undefined {
        if (arr.length === 0) return undefined;
        const index: number = Math.floor(Math.random() * arr.length);
        return arr[index];
    }
}