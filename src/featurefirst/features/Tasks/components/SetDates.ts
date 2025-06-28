export const fourWeeksFromToday: () => Date = () => {
    const today: Date = new Date();
    const fourWeeksAhead: Date = new Date(today);
    fourWeeksAhead.setDate(today.getDate() + 28);
    return fourWeeksAhead;
} 

export const nextWeek: () => Date = () => {
    const today: Date = new Date();
    const nextWeekAhead: Date = new Date(today);
    nextWeekAhead.setDate(today.getDate() + 7);
    return nextWeekAhead;
} 