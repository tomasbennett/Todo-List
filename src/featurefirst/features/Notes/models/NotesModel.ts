import { z } from "zod";

export const NoteSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    body: z.string().min(1)
});


export type INote = z.infer<typeof NoteSchema>;