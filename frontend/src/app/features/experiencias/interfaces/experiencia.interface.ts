export interface CalendarEvent {
    type: string;
    titleKey?: string;
    image: string;
}

export interface CalendarDay {
    number: number;
    date: Date;
    event: CalendarEvent | null;
    isPadding?: boolean; // Para rellenar vacíos al inicio del mes
}