import { CalendarMonthDate } from "./interface";
import 'anystay-ui/Calendar/style.less';
import { Dispatch, SetStateAction } from 'react';
import { OnScrollParams } from 'react-virtualized';
export declare function generateMonthDate(totalDayNumber: number, subtractDayNumber: number): CalendarMonthDate;
export declare function generateMonthDateForMonthly(totalMonthNumber: number, subtractMonthNumber: number): CalendarMonthDate;
export declare function onCustomDayScroll(sp: OnScrollParams, customScrollLeft: number, setCustomScrollLeft: Dispatch<SetStateAction<number>>, onScroll: (params: OnScrollParams) => void, setShowReturnToToday: Dispatch<SetStateAction<boolean>>, subtractDayNumber: number, columnWidth: number): void;
export declare function onCustomMonthScroll(sp: OnScrollParams, setCustomScrollTop: Dispatch<SetStateAction<number>>, onScroll: (params: OnScrollParams) => void): void;
