// @ts-ignore

import React from 'react';
import CalendarDatePicker from "../CalendarDatePicker";
import "./style.less";
var CalendarMonthTitle = function CalendarMonthTitle(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "calendar-month-title-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-text"
  }, "\xA0", props.monthTitle), /*#__PURE__*/React.createElement("div", {
    className: "calendar-month-title-date-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-date-text"
  }, "Sun"), /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-date-text"
  }, "Mon"), /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-date-text"
  }, "Tue"), /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-date-text"
  }, "Wed"), /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-date-text"
  }, "Thu"), /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-date-text"
  }, "Fri"), /*#__PURE__*/React.createElement("span", {
    className: "calendar-month-title-date-text"
  }, "Sat"))), /*#__PURE__*/React.createElement(CalendarDatePicker, {
    selectedDate: props.monthlyTitleSelectedDate,
    setSelectedDate: props.setMonthlyTitleSelectedDate,
    type: props.type,
    calendarTitleProp: props,
    todayScrollTop: props.todayScrollTop,
    monthDate: props.monthDate,
    scrollWidth: props.scrollWidth
  }));
};
export default CalendarMonthTitle;