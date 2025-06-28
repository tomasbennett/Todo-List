import { IScreenGroupingCriteria } from "../../../models/OpenCloseModel";
import { ITask } from "./TaskModels";

export type ITaskScreen = IScreenGroupingCriteria<ITask>;

export type ITaskFormScreen = IScreenGroupingCriteria<Partial<ITask>>;