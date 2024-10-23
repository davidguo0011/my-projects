import { CalendarDayDateCell, CalendarDayDateProp } from "./interface";
import 'anystay-ui/Calendar/components/CalendarDayDate/style.less';
export declare function generateDateCells(props: CalendarDayDateProp): CalendarDayDateCell[];
export declare function getDateNumber(dateCell: CalendarDayDateCell): number;
export declare function getDateWeekDay(dateCell: CalendarDayDateCell): string;
export declare function getBorderStyle(props: CalendarDayDateProp, dateCell: CalendarDayDateCell): string;
export declare function getCurrentStyle(dateCell: CalendarDayDateCell): string;
export declare function onScrollPrev(props: CalendarDayDateProp): void;
export declare function onScrollNext(props: CalendarDayDateProp): void;
