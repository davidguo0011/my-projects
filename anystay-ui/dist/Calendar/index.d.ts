import { CalendarProp } from "./interface";
import React from 'react';
import 'react-virtualized/styles.css';
import './style.less';
declare const Calendar: React.ForwardRefExoticComponent<CalendarProp & React.RefAttributes<HTMLInputElement>>;
export default Calendar;
