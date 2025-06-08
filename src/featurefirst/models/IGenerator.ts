export interface IGenerator<T> {
    generate(): T;
}


export type IIDGenerator = IGenerator<number>;


export interface IGeneratorCriteria<T, K> {
    generate(criteria: K): T;
}

export type ISymbolIDGenerator = IGeneratorCriteria<string[], HTMLElement>;


export interface IRandomSelect<T> {
    pickRandom(arr: T[]): T | undefined;
}


export type IIDRandomSelect = IRandomSelect<string>;