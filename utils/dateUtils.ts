export function getToday(): string {
    const date = new Date();
    return date.toLocaleDateString('en-CA', {timeZone: 'Asia/Manila',});
        //date format
    //en-CA -YYYY-MM-DD
    //en-US -MM/DD/YYYY
    //en-GB -DD/MM/YYYY
        //TimeZone
    // America/New_York → US Eastern Time
    // America/Los_Angeles → US Pacific Time
    // Asia/Tokyo → Japan Time
    // Europe/London → UK Time
    // Australia/Sydney → Sydney Time
}

export function getDate(offsetDays = 0): string {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);
    return date.toLocaleDateString('en-CA', {timeZone: 'Asia/Manila',});
}

export function getTomorrow(): string {
    return getDate(1);
}

export function getYesterday(): string {
    return getDate(-1);
}

export function formatDate(
    date: Date, locale = 'en-CA'): string {
    return date.toLocaleDateString(locale, {
        timeZone: 'Asia/Manila',
    });
}

export function getDateRange(
    startOffset: number, endOffset: number
) {
    return {
        fromDate: getDate(startOffset), toDate: getDate(endOffset),
    };
}