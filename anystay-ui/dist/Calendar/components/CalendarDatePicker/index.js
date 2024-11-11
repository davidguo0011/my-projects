import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
// @ts-ignore
import CalendarLeftPng from "../../assets/left.png";
import { reSetScrollLeft, reSetScrollTop } from "./utils";
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import "./style.less";
var CalendarDatePicker = function CalendarDatePicker(props) {
  var minDate = useMemo(function () {
    var monthDateKeys = Object.keys(props.monthDate);
    return dayjs(monthDateKeys[0]);
  }, [props.monthDate]);
  var maxDate = useMemo(function () {
    var monthDateKeys = Object.keys(props.monthDate);
    return dayjs(monthDateKeys[monthDateKeys.length - 1]);
  }, [props.monthDate]);
  return /*#__PURE__*/React.createElement("div", {
    className: "calendar-date-picker-title-action-container"
  }, /*#__PURE__*/React.createElement(_DatePicker, {
    className: 'calendar-date-picker',
    inputReadOnly: true,
    picker: "month",
    value: props.selectedDate,
    allowClear: false,
    showNow: false,
    minDate: minDate,
    maxDate: maxDate,
    suffixIcon: /*#__PURE__*/React.createElement("img", {
      alt: "left",
      src: CalendarLeftPng,
      className: "calendar-date-picker-title-action-operation-image"
    }),
    onChange: function onChange(date) {
      props.setSelectedDate(date);
      if (props.type === 'Day') {
        reSetScrollLeft(date.format('YYYY-MM-DD'), props.calendarTitleProp, props.titleDate);
      } else if (props.type === 'Month') {
        reSetScrollTop(props.calendarTitleProp, date, props.monthDate, props.cellHeightMonthly);
      }
    }
  }));
};
export default CalendarDatePicker;