import "antd/es/button/style";
import _Button from "antd/es/button";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { generateTableCells, getColumBlockStyle, getColumnBackgroundSelectedStyle, getColumnBorderSelectedStyle, getColumnDisabledStyle, getCurrentColumnBorderSelectedStyle, getTableCell, getTableCellOccupied, getTableCellOccupiedCondition, onMouseDown as _onMouseDown, onMouseOver as _onMouseOver, onMouseUp, onOccupiedClick, returnToToday } from "./util";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { AutoSizer, Grid } from 'react-virtualized';
import "./style.less";
var CalendarDayTable = /*#__PURE__*/forwardRef(function (props, ref) {
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
  var tableCells = generateTableCells(props.monthDate, props.rows, props.fillRows || [], props.blockRows || [], props.occupiedRows || []);
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
    className: "calendar-day-table-container"
  }, /*#__PURE__*/React.createElement(AutoSizer, {
    disableHeight: true
  }, function (_ref) {
    var width = _ref.width;
    return /*#__PURE__*/React.createElement(Grid, {
      className: "calendar-day-date-value-container",
      width: width,
      height: props.columnWidth * props.rows.length,
      columnCount: props.totalDayNumber,
      columnWidth: props.columnWidth,
      rowCount: props.rows.length,
      rowHeight: props.columnWidth,
      clientHeight: props.clientHeight,
      clientWidth: props.clientWidth,
      onScroll: props.onScroll,
      scrollHeight: props.scrollHeight,
      scrollLeft: props.scrollLeft,
      scrollTop: props.scrollTop,
      scrollWidth: props.scrollWidth,
      cellRenderer: function cellRenderer(_ref2) {
        var _getTableCell, _getTableCell$occupie, _getTableCell$occupie2, _getTableCell$occupie3, _getTableCell$occupie4, _getTableCell$occupie5;
        var columnIndex = _ref2.columnIndex,
          key = _ref2.key,
          rowIndex = _ref2.rowIndex,
          style = _ref2.style;
        return /*#__PURE__*/React.createElement("div", {
          key: key,
          className: "calendar-day-table-row-column-container\n                  ".concat(getColumnBackgroundSelectedStyle(rowIndex, columnIndex, selection), "\n                  ").concat(getCurrentColumnBorderSelectedStyle(rowIndex, columnIndex, selection), "\n                  ").concat(getColumnBorderSelectedStyle(rowIndex, columnIndex, selection), "\n                  ").concat(getColumnDisabledStyle(columnIndex, props.subtractDayNumber), "\n                  ").concat(getColumBlockStyle(tableCells, rowIndex, columnIndex)),
          style: style,
          onMouseDown: function onMouseDown() {
            return _onMouseDown(rowIndex, columnIndex, selectionVisible, setSelectionVisible, setSelection, props.subtractDayNumber);
          },
          onMouseOver: function onMouseOver() {
            return _onMouseOver(rowIndex, columnIndex, selectionVisible, selection, setSelection, props.subtractDayNumber);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "calendar-day-table-row-column-content-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "calendar-day-table-row-column-content-wrapper"
        }, (_getTableCell = getTableCell(tableCells, rowIndex, columnIndex)) === null || _getTableCell === void 0 ? void 0 : _getTableCell.value)), getTableCellOccupiedCondition(tableCells, rowIndex, columnIndex) && /*#__PURE__*/React.createElement("div", {
          className: "calendar-day-table-row-column-content-occupied-wrapper",
          style: {
            width: getTableCellOccupied(tableCells, rowIndex, columnIndex, props).width,
            minWidth: getTableCellOccupied(tableCells, rowIndex, columnIndex, props).width,
            left: getTableCellOccupied(tableCells, rowIndex, columnIndex, props).left,
            background: (_getTableCell$occupie = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie === void 0 ? void 0 : _getTableCell$occupie.color
          },
          onClick: function onClick() {
            return onOccupiedClick(tableCells, rowIndex, columnIndex, props);
          },
          onMouseDown: function onMouseDown(e) {
            e.stopPropagation();
          },
          onMouseOver: function onMouseOver(e) {
            e.stopPropagation();
          }
        }, ((_getTableCell$occupie2 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie2 === void 0 ? void 0 : _getTableCell$occupie2.avatar) && /*#__PURE__*/React.createElement("div", {
          className: "calendar-day-table-row-column-content-occupied-image-container"
        }, /*#__PURE__*/React.createElement("img", {
          src: (_getTableCell$occupie3 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie3 === void 0 ? void 0 : _getTableCell$occupie3.avatar,
          alt: "avatar"
        })), /*#__PURE__*/React.createElement("div", {
          className: "calendar-day-table-row-column-content-occupied-text-container"
        }, /*#__PURE__*/React.createElement("span", {
          className: "calendar-day-table-row-column-content-occupied-text-name"
        }, (_getTableCell$occupie4 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie4 === void 0 ? void 0 : _getTableCell$occupie4.name), /*#__PURE__*/React.createElement("span", {
          className: "calendar-day-table-row-column-content-occupied-text"
        }, (_getTableCell$occupie5 = getTableCell(tableCells, rowIndex, columnIndex).occupied) === null || _getTableCell$occupie5 === void 0 ? void 0 : _getTableCell$occupie5.text))));
      }
    });
  }), props.showReturnToToday && /*#__PURE__*/React.createElement("div", {
    className: "calendar-day-table-return-today-container"
  }, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    onClick: function onClick() {
      return returnToToday(props);
    },
    className: "calendar-day-table-return-today-btn"
  }, "Return to today")));
});
export default CalendarDayTable;