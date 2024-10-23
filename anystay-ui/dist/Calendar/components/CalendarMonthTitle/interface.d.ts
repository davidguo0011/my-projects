/// <reference types="react" />
import { CalendarMonthDate } from "../../interface";
import dayjs from 'dayjs';
export interface CalendarMonthTitleProp {
    monthTitle: string;
    type: string;
    setCustomScrollTop: React.Dispatch<React.SetStateAction<number>>;
    todayScrollTop: React.MutableRefObject<number>;
    monthDate: CalendarMonthDate;
    scrollWidth: number;
    monthlyTitleSelectedDate: dayjs.Dayjs;
    setMonthlyTitleSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}
