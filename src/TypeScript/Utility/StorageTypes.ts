// import { title } from "process";
import { z } from "zod";

export enum Priority {
    "low",
    "medium",
    "high"
}

export const TaskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    bodyText: z.string().min(1),
    dueDate: z.date(),
    priority: z.enum(["low","medium","high"]),
    completed: z.boolean().default(false)
});

export const NoteSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    bodyText: z.string().min(1)
});

export const ProjectSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    tasks: TaskSchema.array()
});


export type TaskLiteral = z.infer<typeof TaskSchema>;
export type NoteLiteral = z.infer<typeof NoteSchema>;
export type ProjectLiteral = z.infer<typeof ProjectSchema>;








// export interface ITasks {
//     id: number;

//     title: string;
//     bodyText: string;

//     dueDate: string;

//     priority: "low" | "medium" | "high";

//     completed: boolean;
// }

// export interface INotes {
//     id: number;

//     title: string;
//     bodyText: string;
// }

// export interface IProjects {
//     id: number;

//     title: string;

//     tasks: ITasks[];
// }