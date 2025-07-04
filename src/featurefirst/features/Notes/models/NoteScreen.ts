import { IScreenGroupingCriteria } from "../../../models/OpenCloseModel";
import { INote } from "./NotesModel";

export type INoteScreen = IScreenGroupingCriteria<INote>;

export type INoteFormScreen = IScreenGroupingCriteria<INote | undefined>;