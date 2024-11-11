import { CalendarDayTitleDate } from "./interface";
import { CalendarDayTitleProp } from "../CalendarDayTitle/interface";
import { CalendarMonthTitleProp } from "../CalendarMonthTitle/interface";
import { CalendarMonthDate } from "../../interface";
import dayjs from 'dayjs';
export declare function reSetScrollLeft(date: string, props: CalendarDayTitleProp, titleDate: CalendarDayTitleDate): void;
export declare function reSetScrollTop(props: CalendarMonthTitleProp, selectedDate: dayjs.Dayjs, monthDate: CalendarMonthDate, cellHeightMonthly: number): void;
