import { IFetchPaste } from "../RunTimeComponents/RTFunctionality";
import { TaskLiteral, NoteLiteral, ProjectLiteral } from "../Utility/StorageSchemas";

import SuperJSON from "superjson";


export abstract class LocalStorageStratergy<T extends { id: number }> {
    protected abstract storageKey: string;

    getAll(): T[] {
        const raw = localStorage.getItem(this.storageKey);
        if (!raw) return [];
        try {
            return SuperJSON.parse(raw);
        } catch {
            console.log('Corrupt data at', this.storageKey);
            return [];
        }
    }

    getById(id: number): T | undefined {
        return this.getAll().find(item => item.id === id);
    }

    save(item: T): void {
        const all = this.getAll();
        const idx = all.findIndex(x => x.id === item.id);
        if (idx >= 0) {
            all[idx] = item;
        } else {
            all.push(item);
        }
        localStorage.setItem(this.storageKey, SuperJSON.stringify(all));
    }

    deleteById(id: number): void {
        const filtered = this.getAll().filter(x => x.id !== id);
        localStorage.setItem(this.storageKey, SuperJSON.stringify(filtered));
    }
}


export class TasksLocalStorage extends LocalStorageStratergy<TaskLiteral> {
    protected storageKey = "tasks";
}


export class NotesLocalStorage extends LocalStorageStratergy<NoteLiteral> {
    protected storageKey = "note";
}

export class ProjectsLocalStorage extends LocalStorageStratergy<ProjectLiteral> {
    protected storageKey = "projects";
}
