function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { generateTitleCells, getBorderStyle, getDateName, getScrollDate, getTitleDate } from "./util";
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { AutoSizer, Grid } from 'react-virtualized';
import CalendarDatePicker from "../CalendarDatePicker";
import "./style.less";
var CalendarDayTitle = function CalendarDayTitle(props) {
  var titleCells = generateTitleCells(props);
  var titleDate = getTitleDate(titleCells);
  var _useState = useState(dayjs()),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "calendar-day-title-container"
  }, /*#__PURE__*/React.createElement(AutoSizer, {
    disableHeight: true
  }, function (_ref) {
    var width = _ref.width;
    return /*#__PURE__*/React.createElement(Grid, {
      width: width,
      height: props.titleRowHeight,
      columnCount: titleCells.length,
      columnWidth: function columnWidth(_ref2) {
        var index = _ref2.index;
        return props.columnWidth * titleCells[index].dates.length;
      },
      rowCount: 1,
      rowHeight: props.titleRowHeight,
      clientHeight: props.clientHeight,
      clientWidth: props.clientWidth,
      onScroll: function onScroll(params) {
        var date = getScrollDate(params, props, titleDate);
        setSelectedDate(date);
        props.onScroll(params);
      },
      scrollHeight: props.scrollHeight,
      scrollLeft: props.scrollLeft,
      scrollTop: props.scrollTop,
      scrollWidth: props.scrollWidth,
      style: {
        overflow: 'hidden'
      },
      cellRenderer: function cellRenderer(_ref3) {
        var columnIndex = _ref3.columnIndex,
          key = _ref3.key,
          style = _ref3.style;
        return /*#__PURE__*/React.createElement("span", {
          key: key,
          className: "calendar-day-title-text\n                ".concat(getBorderStyle(props, titleCells[columnIndex])),
          style: style
        }, "\xA0", getDateName(titleCells[columnIndex]));
      }
    });
  }), /*#__PURE__*/React.createElement(CalendarDatePicker, {
    selectedDate: selectedDate,
    setSelectedDate: setSelectedDate,
    titleDate: titleDate,
    calendarTitleProp: props,
    type: props.type,
    monthDate: props.monthDate
  }));
};
export default CalendarDayTitle;