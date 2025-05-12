export interface ITasks {
    id: number;

    title: string;
    bodyText: string;

    dueDate: string;

    priority: "low" | "medium" | "high";

    completed: boolean;
}

export interface INotes {
    id: number;

    title: string;
    bodyText: string;
}

export interface IProjects {
    id: number;

    title: string;

    tasks: ITasks[];
}