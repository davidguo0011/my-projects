import { CalendarDayTitleDate } from "./interface";
import { CalendarDayTitleProp } from "../CalendarDayTitle/interface";
import { CalendarMonthTitleProp } from "../CalendarMonthTitle/interface";
import { CalendarMonthDate } from "../../interface";
import dayjs from 'dayjs';
import React, { type FC } from 'react';
import './style.less';
interface CalendarDatePickerProps {
    selectedDate: dayjs.Dayjs;
    setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
    titleDate?: CalendarDayTitleDate;
    calendarTitleProp: CalendarDayTitleProp | CalendarMonthTitleProp;
    todayScrollTop?: React.MutableRefObject<number>;
    type: string;
    monthDate: CalendarMonthDate;
    scrollWidth?: number;
}
declare const CalendarDatePicker: FC<CalendarDatePickerProps>;
export default CalendarDatePicker;
