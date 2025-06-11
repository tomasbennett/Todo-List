import { z } from "zod";
import { TaskSchema } from "../../Tasks/models/TaskModels";
// import { TaskSchema } from "../../Tasks/models/TaskModels";

export const ProjectSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    // tasks: z.number().positive().array(),
    tasks: TaskSchema.array()
});


export type IProject = z.infer<typeof ProjectSchema>