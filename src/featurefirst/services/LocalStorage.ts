import { INote } from "../features/Notes/models/NotesModel";
import { IProject } from "../features/Projects/models/ProjectsModel";
import { ITask } from "../features/Tasks/models/TaskModels";
import { ILocalStorageRegistry } from "../models/Registry";

import SuperJSON from "superjson";

export abstract class LocalStorage<T extends { id: number }> implements ILocalStorageRegistry<T> {
    protected abstract accessType: string;

    set(key: number, val: T): void {
        const all: T[] = this.getAll();
        const idx: number = all.findIndex(x => x.id === key);
        if (idx >= 0) {
            all[idx] = val;
        } else {
            all.push(val);
        }
        localStorage.setItem(this.accessType, SuperJSON.stringify(all));
    }

    getByID(key: number): T {
        return this.getAll().find(item => item.id === key)!;
    }

    getAll(): T[] {
        const raw = localStorage.getItem(this.accessType);
        if (!raw) return [];
        try {
            return SuperJSON.parse(raw);
        } catch {
            console.log('Corrupt data at', this.accessType);
            return [];
        }
    }

    removeByID(key: number): void {
        const filtered = this.getAll().filter(x => x.id !== key);
        localStorage.setItem(this.accessType, SuperJSON.stringify(filtered));
    }

    removeAll(): void {
        localStorage.setItem(this.accessType, SuperJSON.stringify([]));
    }
}


export class TaskLocalStorage extends LocalStorage<ITask> {
    protected accessType: string = "tasks";
}

export class ProjectLocalStorage extends LocalStorage<IProject> {
    protected accessType: string = "projects";
}

export class NoteLocalStorage extends LocalStorage<INote> {
    protected accessType: string = "notes";
}
