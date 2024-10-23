// @ts-ignore
import CalendarLeftPng from "../../assets/left.png";
import { generateDateCells, getBorderStyle, getCurrentStyle, getDateNumber, getDateWeekDay, onScrollNext, onScrollPrev } from "./util";
import React from 'react';
import { AutoSizer, Grid } from 'react-virtualized';
import "./style.less";
var CalendarDayDate = function CalendarDayDate(props) {
  var dateCells = generateDateCells(props);
  return /*#__PURE__*/React.createElement("div", {
    className: "calendar-day-date-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calendar-day-date-operation-container",
    onClick: function onClick() {
      return onScrollPrev(props);
    }
  }, /*#__PURE__*/React.createElement("img", {
    alt: "left",
    src: CalendarLeftPng
  })), /*#__PURE__*/React.createElement(AutoSizer, {
    disableHeight: true
  }, function (_ref) {
    var width = _ref.width;
    return /*#__PURE__*/React.createElement(Grid, {
      width: width,
      height: props.dateRowHeight,
      columnCount: dateCells.length,
      columnWidth: props.columnWidth,
      rowCount: 1,
      rowHeight: props.dateRowHeight,
      clientHeight: props.clientHeight,
      clientWidth: props.clientWidth,
      onScroll: props.onScroll,
      scrollHeight: props.scrollHeight,
      scrollLeft: props.scrollLeft,
      scrollTop: props.scrollTop,
      scrollWidth: props.scrollWidth,
      cellRenderer: function cellRenderer(_ref2) {
        var columnIndex = _ref2.columnIndex,
          key = _ref2.key,
          style = _ref2.style;
        return /*#__PURE__*/React.createElement("div", {
          key: key,
          className: "calendar-day-date-value-item-container\n                ".concat(getBorderStyle(props, dateCells[columnIndex])),
          style: style
        }, /*#__PURE__*/React.createElement("div", {
          className: "calendar-day-date-value-item-wrapper\n                  ".concat(getCurrentStyle(dateCells[columnIndex]))
        }, /*#__PURE__*/React.createElement("span", {
          className: "calendar-day-date-value-item-number"
        }, getDateNumber(dateCells[columnIndex])), /*#__PURE__*/React.createElement("span", {
          className: "calendar-day-date-value-item-week"
        }, getDateWeekDay(dateCells[columnIndex]))));
      }
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "calendar-day-date-operation-container calendar-day-date-operation-right-container",
    onClick: function onClick() {
      return onScrollNext(props);
    }
  }, /*#__PURE__*/React.createElement("img", {
    alt: "right",
    src: CalendarLeftPng
  })));
};
export default CalendarDayDate;