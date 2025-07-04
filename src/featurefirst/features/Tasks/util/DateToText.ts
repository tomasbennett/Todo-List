import { IDateToString } from "../../../models/Transformer";

export class DateToString implements IDateToString {
    constructor() {}

    transform(valueToBeTransformed: Date): string {
        const yyyy = valueToBeTransformed.getFullYear();
        const mm = String(valueToBeTransformed.getMonth() + 1).padStart(2, "0");
        const dd = String(valueToBeTransformed.getDate()).padStart(2, "0");
        
        return `${yyyy}-${mm}-${dd}`;
    }

}