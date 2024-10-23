import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import CalendarDayDate from "./components/CalendarDayDate";
import CalendarDayTable from "./components/CalendarDayTable";
import CalendarDayTitle from "./components/CalendarDayTitle";
import CalendarMonthTable from "./components/CalendarMonthTable";
import CalendarMonthTitle from "./components/CalendarMonthTitle";
import { DEFAULT_COLUMN_WIDTH, DEFAULT_DATE_ROW_HEIGHT, DEFAULT_STEP_DAY_NUMBER, DEFAULT_SUBTRACT_DAY_NUMBER, DEFAULT_SUBTRACT_MONTH_NUMBER, DEFAULT_TABLE_HEIGHT, DEFAULT_TITLE_ROW_HEIGHT, DEFAULT_TOTAL_DAY_NUMBER, DEFAULT_TOTAL_MONTH_NUMBER, DEFAULT_TYPE } from "./constant";
import { CalendarType } from "./interface";
import { generateMonthDate, generateMonthDateForMonthly, onCustomDayScroll, onCustomMonthScroll } from "./util";
import dayjs from 'dayjs';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ScrollSync } from 'react-virtualized';
import 'react-virtualized/styles.css';
import "./style.less";
var Calendar = /*#__PURE__*/forwardRef(function (props, ref) {
  var totalDayNumber = props.totalDayNumber || DEFAULT_TOTAL_DAY_NUMBER;
  var totalMonthNumber = props.totalMonthNumber || DEFAULT_TOTAL_MONTH_NUMBER;
  var subtractDayNumber = props.subtractDayNumber || DEFAULT_SUBTRACT_DAY_NUMBER;
  var subtractMonthNumber = props.subtractMonthNumber || DEFAULT_SUBTRACT_MONTH_NUMBER;
  var stepDayNumber = props.stepDayNumber || DEFAULT_STEP_DAY_NUMBER;
  var columnWidth = props.columnWidth || DEFAULT_COLUMN_WIDTH;
  var titleRowHeight = props.titleRowHeight || DEFAULT_TITLE_ROW_HEIGHT;
  var dateRowHeight = props.dateRowHeight || DEFAULT_DATE_ROW_HEIGHT;
  var type = props.type || DEFAULT_TYPE;
  var tableHeight = props.tableHeight || DEFAULT_TABLE_HEIGHT;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    monthDate = _useState2[0],
    setMonthDate = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    monthDateForMonthly = _useState4[0],
    setMonthDateForMonthly = _useState4[1];
  var _useState5 = useState((subtractDayNumber - 2) * columnWidth),
    _useState6 = _slicedToArray(_useState5, 2),
    customScrollLeft = _useState6[0],
    setCustomScrollLeft = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    customScrollTop = _useState8[0],
    setCustomScrollTop = _useState8[1];
  var todayScrollTop = useRef(0);
  var _useState9 = useState(''),
    _useState10 = _slicedToArray(_useState9, 2),
    monthTitle = _useState10[0],
    setMonthTitle = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showReturnToToday = _useState12[0],
    setShowReturnToToday = _useState12[1];
  var tableRef = useRef(null);
  var _useState13 = useState(dayjs()),
    _useState14 = _slicedToArray(_useState13, 2),
    monthlyTitleSelectedDate = _useState14[0],
    setMonthlyTitleSelectedDate = _useState14[1];
  useEffect(function () {
    var date = generateMonthDate(totalDayNumber, subtractDayNumber);
    setMonthDate(date);
  }, []);
  useEffect(function () {
    var date = generateMonthDateForMonthly(totalMonthNumber, subtractMonthNumber);
    setMonthDateForMonthly(date);
  }, []);

  // @ts-ignore
  useImperativeHandle(ref, function () {
    return {
      forceClearSelect: function forceClearSelect() {
        if (tableRef.current) {
          // @ts-ignore
          tableRef.current.forceClearSelect();
        }
      }
    };
  });
  return /*#__PURE__*/React.createElement(_ConfigProvider, {
    theme: {
      token: {
        colorPrimary: '#1d1d1f'
      }
    }
  }, Object.keys(monthDate).length > 0 && type === CalendarType.Day && /*#__PURE__*/React.createElement(ScrollSync, null, function (_ref) {
    var clientHeight = _ref.clientHeight,
      clientWidth = _ref.clientWidth,
      _onScroll = _ref.onScroll,
      scrollHeight = _ref.scrollHeight,
      scrollTop = _ref.scrollTop,
      scrollWidth = _ref.scrollWidth;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "calendar-container"
    }, /*#__PURE__*/React.createElement(CalendarDayTitle, {
      monthDate: monthDate,
      columnWidth: columnWidth,
      titleRowHeight: titleRowHeight,
      clientHeight: clientHeight,
      clientWidth: clientWidth,
      onScroll: function onScroll(sp) {
        onCustomDayScroll(sp, customScrollLeft, setCustomScrollLeft, _onScroll, setShowReturnToToday, subtractDayNumber, columnWidth);
      },
      scrollHeight: scrollHeight,
      scrollLeft: customScrollLeft,
      scrollTop: scrollTop,
      scrollWidth: scrollWidth,
      setCustomScrollLeft: setCustomScrollLeft,
      showReturnToToday: showReturnToToday,
      setShowReturnToToday: setShowReturnToToday,
      type: type
    }), /*#__PURE__*/React.createElement(CalendarDayDate, {
      monthDate: monthDate,
      totalDayNumber: totalDayNumber,
      stepDayNumber: stepDayNumber,
      columnWidth: columnWidth,
      dateRowHeight: dateRowHeight,
      clientHeight: clientHeight,
      clientWidth: clientWidth,
      onScroll: function onScroll(sp) {
        onCustomDayScroll(sp, customScrollLeft, setCustomScrollLeft, _onScroll, setShowReturnToToday, subtractDayNumber, columnWidth);
      },
      scrollHeight: scrollHeight,
      scrollLeft: customScrollLeft,
      scrollTop: scrollTop,
      scrollWidth: scrollWidth,
      setCustomScrollLeft: setCustomScrollLeft
    }), /*#__PURE__*/React.createElement(CalendarDayTable, {
      ref: tableRef,
      monthDate: monthDate,
      rows: props.rows,
      columnWidth: columnWidth,
      totalDayNumber: totalDayNumber,
      subtractDayNumber: subtractDayNumber,
      fillRows: props.fillRows,
      blockRows: props.blockRows,
      occupiedRows: props.occupiedRows,
      onSelect: props.onSelect,
      onOccupiedClick: props.onOccupiedClick,
      clientHeight: clientHeight,
      clientWidth: clientWidth,
      onScroll: function onScroll(sp) {
        onCustomDayScroll(sp, customScrollLeft, setCustomScrollLeft, _onScroll, setShowReturnToToday, subtractDayNumber, columnWidth);
      },
      scrollHeight: scrollHeight,
      scrollLeft: customScrollLeft,
      scrollTop: scrollTop,
      scrollWidth: scrollWidth,
      setCustomScrollLeft: setCustomScrollLeft,
      showReturnToToday: showReturnToToday,
      setShowReturnToToday: setShowReturnToToday
    }));
  }), Object.keys(monthDateForMonthly).length > 0 && type === CalendarType.Month && /*#__PURE__*/React.createElement(ScrollSync, null, function (_ref2) {
    var clientHeight = _ref2.clientHeight,
      clientWidth = _ref2.clientWidth,
      _onScroll2 = _ref2.onScroll,
      scrollHeight = _ref2.scrollHeight,
      scrollWidth = _ref2.scrollWidth,
      scrollLeft = _ref2.scrollLeft;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "calendar-container"
    }, /*#__PURE__*/React.createElement(CalendarMonthTitle, {
      monthTitle: monthTitle,
      monthDate: monthDateForMonthly,
      type: type,
      setCustomScrollTop: setCustomScrollTop,
      todayScrollTop: todayScrollTop,
      scrollWidth: scrollWidth,
      monthlyTitleSelectedDate: monthlyTitleSelectedDate,
      setMonthlyTitleSelectedDate: setMonthlyTitleSelectedDate
    }), /*#__PURE__*/React.createElement(CalendarMonthTable, {
      todayScrollTop: todayScrollTop,
      ref: tableRef,
      monthDate: monthDateForMonthly,
      rows: props.rows,
      tableHeight: tableHeight,
      fillRows: props.fillRows,
      blockRows: props.blockRows,
      occupiedRows: props.occupiedRows,
      onSelect: props.onSelect,
      monthTitle: monthTitle,
      setMonthTitle: setMonthTitle,
      clientHeight: clientHeight,
      clientWidth: clientWidth,
      setMonthlyTitleSelectedDate: setMonthlyTitleSelectedDate,
      onScroll: function onScroll(sp) {
        onCustomMonthScroll(sp, setCustomScrollTop, _onScroll2);
      },
      onOccupiedClick: props.onOccupiedClick,
      setCustomScrollTop: setCustomScrollTop,
      customScrollTop: customScrollTop,
      scrollHeight: scrollHeight,
      scrollLeft: scrollLeft,
      scrollTop: customScrollTop,
      scrollWidth: scrollWidth,
      setShowReturnToToday: setShowReturnToToday,
      showReturnToToday: showReturnToToday
    }));
  }));
});
export default Calendar;