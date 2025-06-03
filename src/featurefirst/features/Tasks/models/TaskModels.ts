import { z } from "zod";

export const PRIORITY_VALUES = ["low", "medium", "high"] as const;
export type Priority = (typeof PRIORITY_VALUES)[number];

export const TaskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    body: z.string().min(1),
    date: z.date(),
    priority: z.enum(PRIORITY_VALUES),
    completed: z.boolean()
});


export type ITask = z.infer<typeof TaskSchema>