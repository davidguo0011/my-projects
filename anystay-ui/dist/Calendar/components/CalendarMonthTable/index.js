function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import "antd/es/button/style";
import _Button from "antd/es/button";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { onOccupiedClick } from "../CalendarMonthTable/util";
import { generateTableCells, getColumBlockStyle, getColumnBackgroundSelectedStyle, getColumnDisabledStyle, getColumnVirtualStyle, getCurrentColumnBorderSelectedStyle, getOccupiedBorderStyling, getTableCell, getTableCellOccupied, getTableCellStartOccupiedCondition, getTableCellVirtualCondition, onMouseDown as _onMouseDown, onMouseOver as _onMouseOver, onMouseUp, onScrollDate, onSectionRenderJumpToToday, showReturnToToday } from "./util";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AutoSizer, Grid } from 'react-virtualized';
import "./style.less";
var CalendarMonthTable = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    selectionVisible = _useState2[0],
    setSelectionVisible = _useState2[1];
  var _useState3 = useState({
      rowStartIndex: -1,
      rowEndIndex: -1,
      rowCurrentIndex: -1,
      columnStartIndex: -1,
      columnEndIndex: -1,
      columnCurrentIndex: -1
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    selection = _useState4[0],
    setSelection = _useState4[1];
  var firstSelection = useRef({
    rowStartIndex: -1,
    rowEndIndex: -1,
    rowCurrentIndex: -1,
    columnStartIndex: -1,
    columnEndIndex: -1,
    columnCurrentIndex: -1
  });
  var tableCells = generateTableCells(props.monthDate, props.rows, props.fillRows || [], props.blockRows || [], props.occupiedRows || []);
  var init = useRef(false);
  useEffect(function () {
    if (!selectionVisible) {
      onMouseUp(selection, tableCells, props.onSelect);
    }
  }, [selectionVisible]);

  // @ts-ignore
  useImperativeHandle(ref, function () {
    return {
      forceClearSelect: function forceClearSelect() {
        setSelection({
          rowStartIndex: -1,
          rowEndIndex: -1,
          rowCurrentIndex: -1,
          columnStartIndex: -1,
          columnEndIndex: -1,
          columnCurrentIndex: -1
        });
      }
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "calendar-month-table-container",
    style: {
      height: props.tableHeight
    }
  }, /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref) {
    var width = _ref.width,
      height = _ref.height;
    return /*#__PURE__*/React.createElement(Grid, {
      className: "calendar-month-date-value-container",
      width: width,
      height: height,
      columnCount: 7,
      columnWidth: width / 7,
      rowCount: tableCells.length / 7,
      rowHeight: width / 7,
      clientHeight: props.clientHeight,
      clientWidth: props.clientWidth,
      onSectionRendered: function onSectionRendered() {
        onSectionRenderJumpToToday(init, props.todayScrollTop, props.monthDate, props.setCustomScrollTop, width);
      },
      onScroll: function onScroll(params) {
        onScrollDate(params, width / 7, tableCells, props);
        showReturnToToday(width / 7, props.customScrollTop, props.todayScrollTop.current, props.setShowReturnToToday);
        props.onScroll(params);
      },
      scrollHeight: props.scrollHeight,
      scrollLeft: props.scrollLeft,
      scrollTop: props.scrollTop,
      scrollWidth: props.scrollWidth,
      cellRenderer: function cellRenderer(_ref2) {
        var _getTableCell$occupie, _getTableCell$occupie2, _getTableCell$occupie3, _getTableCell$occupie4, _getTableCell$occupie5;
        var columnIndex = _ref2.columnIndex,
          key = _ref2.key,
          rowIndex = _ref2.rowIndex,
          style = _ref2.style;
        var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
        return /*#__PURE__*/React.createElement("div", {
          key: key,
          className: "calendar-month-table-row-column-container\n                  ".concat(getColumnBackgroundSelectedStyle(rowIndex, columnIndex, selection), "\n                  ").concat(getCurrentColumnBorderSelectedStyle(tableCells, rowIndex, columnIndex), "\n                  ").concat(getColumnDisabledStyle(tableCells, rowIndex, columnIndex), "\n                  ").concat(getColumBlockStyle(tableCells, rowIndex, columnIndex), "\n                  ").concat(getColumnVirtualStyle(tableCells, rowIndex, columnIndex)),
          style: style,
          onMouseDown: function onMouseDown() {
            return _onMouseDown(rowIndex, columnIndex, selectionVisible, setSelectionVisible, setSelection, tableCells, firstSelection);
          },
          onMouseOver: function onMouseOver() {
            return _onMouseOver(rowIndex, columnIndex, selectionVisible, selection, setSelection, tableCells, firstSelection);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "calendar-month-table-row-column-content-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "calendar-month-table-row-column-content-wrapper"
        }, getTableCellVirtualCondition(tableCells, rowIndex, columnIndex) && /*#__PURE__*/React.createElement("div", {
          className: "calendar-month-table-row-column-content-virtual-wrapper"
        }, /*#__PURE__*/React.createElement("span", {
          className: "calendar-month-table-row-column-content-virtual-text"
        }, tableCell === null || tableCell === void 0 ? void 0 : tableCell.value)), /*#__PURE__*/React.createElement("p", {
          className: "calendar-month-table-row-column-content-day"
        }, tableCell === null || tableCell === void 0 ? void 0 : tableCell.day), /*#__PURE__*/React.createElement("p", {
          className: "calendar-month-table-row-column-content-price"
        }, !(tableCell !== null && tableCell !== void 0 && tableCell.virtual) && "".concat(tableCell === null || tableCell === void 0 ? void 0 : tableCell.value)))), getTableCellStartOccupiedCondition(tableCells, rowIndex, columnIndex) && /*#__PURE__*/React.createElement("div", {
          className: "calendar-month-table-row-column-content-occupied-wrapper",
          style: _objectSpread({
            width: getTableCellOccupied(tableCells, rowIndex, columnIndex, width / 7).width,
            minWidth: getTableCellOccupied(tableCells, rowIndex, columnIndex, width / 7).width,
            left: getTableCellOccupied(tableCells, rowIndex, columnIndex, width / 7).left,
            background: (_getTableCell$occupie = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie === void 0 ? void 0 : _getTableCell$occupie.color
          }, getOccupiedBorderStyling(tableCells, rowIndex, columnIndex, width / 7)),
          onClick: function onClick() {
            return onOccupiedClick(tableCells, rowIndex, columnIndex, props);
          },
          onMouseDown: function onMouseDown(e) {
            e.stopPropagation();
          },
          onMouseOver: function onMouseOver(e) {
            e.stopPropagation();
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "calendar-month-table-row-column-content-occupied-content-container",
          style: {
            transform: "translateX(".concat(getTableCellOccupied(tableCells, rowIndex, columnIndex, width / 7).translateX, "px)")
          }
        }, ((_getTableCell$occupie2 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie2 === void 0 ? void 0 : _getTableCell$occupie2.avatar) && /*#__PURE__*/React.createElement("div", {
          className: "calendar-month-table-row-column-content-occupied-image-container"
        }, /*#__PURE__*/React.createElement("img", {
          src: (_getTableCell$occupie3 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie3 === void 0 ? void 0 : _getTableCell$occupie3.avatar,
          alt: "avatar"
        })), /*#__PURE__*/React.createElement("div", {
          className: "calendar-month-table-row-column-content-occupied-text-container"
        }, /*#__PURE__*/React.createElement("span", {
          className: "calendar-month-table-row-column-content-occupied-text-name"
        }, (_getTableCell$occupie4 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie4 === void 0 ? void 0 : _getTableCell$occupie4.name), /*#__PURE__*/React.createElement("span", {
          className: "calendar-month-table-row-column-content-occupied-text"
        }, (_getTableCell$occupie5 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie5 === void 0 ? void 0 : _getTableCell$occupie5.text)))));
      }
    });
  }), props.showReturnToToday && /*#__PURE__*/React.createElement("div", {
    className: "calendar-month-table-return-today-container"
  }, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    onClick: function onClick() {
      props.setCustomScrollTop(props.todayScrollTop.current);
    },
    className: "calendar-month-table-return-today-btn"
  }, "Return to today")));
});
export default CalendarMonthTable;