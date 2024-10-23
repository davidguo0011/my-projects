import "./style.less";
import { CalendarCellStatusProp } from "../../interface";
import moment from 'moment';
var timer;
var longPressThreshold = 500;
export function getColumnBackgroundSelectedStyle(rowIndex, columnIndex, selection) {
  var rowStartIndex = selection.rowStartIndex,
    rowEndIndex = selection.rowEndIndex,
    columnStartIndex = selection.columnStartIndex,
    columnEndIndex = selection.columnEndIndex;
  if (rowEndIndex !== -1 && columnEndIndex !== -1 && columnIndex >= columnStartIndex && columnIndex <= columnEndIndex && rowIndex >= rowStartIndex && rowIndex <= rowEndIndex) {
    return 'calendar-day-table-row-column-selected-background-container';
  }
  return '';
}
export function getColumnBorderSelectedStyle(rowIndex, columnIndex, selection) {
  var rowStartIndex = selection.rowStartIndex,
    rowEndIndex = selection.rowEndIndex,
    columnStartIndex = selection.columnStartIndex,
    columnEndIndex = selection.columnEndIndex;
  var obj = {
    top: false,
    left: false,
    right: false,
    bottom: false
  };
  var value = '';
  if (!(columnEndIndex === -1 || rowEndIndex === -1)) {
    obj.top = rowIndex === rowStartIndex && columnIndex >= columnStartIndex && columnIndex <= columnEndIndex;
    obj.left = columnIndex === columnStartIndex && rowIndex >= rowStartIndex && rowIndex <= rowEndIndex;
    obj.right = columnIndex === columnEndIndex && rowIndex >= rowStartIndex && rowIndex <= rowEndIndex;
    obj.bottom = rowIndex === rowEndIndex && columnIndex >= columnStartIndex && columnIndex <= columnEndIndex;
  }
  if (obj.top) {
    value += " calendar-day-table-row-column-selected-border-top-container";
  }
  if (obj.bottom) {
    value += " calendar-day-table-row-column-selected-border-bottom-container";
  }
  if (obj.left) {
    value += " calendar-day-table-row-column-selected-border-left-container";
  }
  if (obj.right) {
    value += " calendar-day-table-row-column-selected-border-right-container";
  }
  return value;
}
export function getCurrentColumnBorderSelectedStyle(rowIndex, columnIndex, selection) {
  var rowCurrentIndex = selection.rowCurrentIndex,
    columnCurrentIndex = selection.columnCurrentIndex;
  if (rowCurrentIndex !== -1 && columnCurrentIndex !== -1 && rowIndex === rowCurrentIndex && columnIndex === columnCurrentIndex) {
    return "calendar-day-table-row-column-current-selected-border-container";
  }
  return '';
}
export function getColumnDisabledStyle(columnIndex, subtractDayNumber) {
  if (columnIndex < subtractDayNumber) {
    return 'calendar-day-table-row-column-disabled-container';
  }
  return '';
}
export function getColumBlockStyle(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if ((tableCell === null || tableCell === void 0 ? void 0 : tableCell.status) === CalendarCellStatusProp.Block) {
    return 'calendar-day-table-row-column-block-container';
  }
  return '';
}
export function onMouseDown(rowIndex, columnIndex, selectionVisible, setSelectionVisible, setSelection, subtractDayNumber) {
  if (columnIndex > subtractDayNumber - 1) {
    if (!selectionVisible) {
      setSelectionVisible(true);
      setSelection({
        rowStartIndex: rowIndex,
        rowEndIndex: rowIndex,
        rowCurrentIndex: rowIndex,
        columnStartIndex: columnIndex,
        columnEndIndex: columnIndex,
        columnCurrentIndex: columnIndex
      });
      timer = setTimeout(function () {
        clearSelection(setSelectionVisible);
      }, longPressThreshold);
    } else {
      clearTimeout(timer);
      clearSelection(setSelectionVisible);
    }
  }
}
export function clearSelection(setSelectionVisible) {
  var hideSelection = function hideSelection() {
    setSelectionVisible(false);
    document.removeEventListener('mouseup', hideSelection);
  };
  document.addEventListener('mouseup', hideSelection);
}
export function onMouseOver(rowIndex, columnIndex, selectionVisible, selection, setSelection, subtractDayNumber) {
  if (columnIndex > subtractDayNumber - 1) {
    if (selectionVisible) {
      var currentRow = selection.rowCurrentIndex;
      var currentCol = selection.columnCurrentIndex;
      var rowStart = rowIndex >= currentRow ? currentRow : rowIndex;
      var rowEnd = !(rowIndex >= currentRow) ? currentRow : rowIndex;
      var columnStart = columnIndex >= currentCol ? currentCol : columnIndex;
      var columnEnd = !(columnIndex >= currentCol) ? currentCol : columnIndex;
      setSelection({
        rowStartIndex: rowStart,
        rowEndIndex: rowEnd,
        rowCurrentIndex: currentRow,
        columnStartIndex: columnStart,
        columnEndIndex: columnEnd,
        columnCurrentIndex: currentCol
      });
    }
  }
}
export function onMouseUp(selection, tableCells, onSelect) {
  var rowStartIndex = selection.rowStartIndex,
    rowEndIndex = selection.rowEndIndex,
    columnStartIndex = selection.columnStartIndex,
    columnEndIndex = selection.columnEndIndex;
  if (rowStartIndex > -1 && rowEndIndex > -1 && columnStartIndex > -1 && columnEndIndex > -1) {
    if (onSelect) {
      var selectProp = {
        startDate: '',
        endDate: '',
        rows: []
      };
      var tableRowCells = getTableRowCells(tableCells, rowStartIndex, rowEndIndex, columnStartIndex);
      selectProp.rows = tableRowCells.map(function (i) {
        return {
          id: i.rowId,
          cells: []
        };
      });
      var tableColumnCells = getTableColumnCells(tableCells, columnStartIndex, columnEndIndex, rowStartIndex);
      selectProp.startDate = tableColumnCells[0].date;
      selectProp.endDate = tableColumnCells[tableColumnCells.length - 1].date;
      for (var i = rowStartIndex; i <= rowEndIndex; i++) {
        var cells = getTableColumnCells(tableCells, columnStartIndex, columnEndIndex, i);
        var _loop = function _loop() {
          var cell = cells[j];
          var index = selectProp.rows.findIndex(function (item) {
            return item.id === cell.rowId;
          });
          if (index > -1) {
            var _cell$occupied, _cell$occupied2, _cell$occupied3, _cell$occupied4, _cell$occupied5;
            selectProp.rows[index].cells.push({
              status: cell.status,
              value: cell.value,
              extra: cell.extra || '',
              occupied: {
                link: ((_cell$occupied = cell.occupied) === null || _cell$occupied === void 0 ? void 0 : _cell$occupied.link) || '',
                name: ((_cell$occupied2 = cell.occupied) === null || _cell$occupied2 === void 0 ? void 0 : _cell$occupied2.name) || '',
                text: ((_cell$occupied3 = cell.occupied) === null || _cell$occupied3 === void 0 ? void 0 : _cell$occupied3.text) || '',
                avatar: ((_cell$occupied4 = cell.occupied) === null || _cell$occupied4 === void 0 ? void 0 : _cell$occupied4.avatar) || '',
                extra: ((_cell$occupied5 = cell.occupied) === null || _cell$occupied5 === void 0 ? void 0 : _cell$occupied5.extra) || ''
              }
            });
          }
        };
        for (var j = 0; j < cells.length; j++) {
          _loop();
        }
      }
      onSelect(selectProp);
    }
  }
}
export function generateDatesFromStartAndEnd(startDate, endDate) {
  var start = moment(startDate).startOf('day');
  var end = moment(endDate).startOf('day');
  var dateArray = [];
  while (start <= end) {
    dateArray.push(start.format('YYYY-MM-DD'));
    start.add(1, 'days');
  }
  return dateArray;
}
export function generateFillTableCells(fillRows) {
  var fillRowCells = [];
  for (var i = 0; i < fillRows.length; i++) {
    var fillRow = fillRows[i];
    for (var j = 0; j < fillRow.columns.length; j++) {
      var fillRowColumn = fillRow.columns[j];
      var startDate = fillRowColumn.startDate;
      var endDate = fillRowColumn.endDate;
      var dates = generateDatesFromStartAndEnd(startDate, endDate);
      for (var k = 0; k < dates.length; k++) {
        fillRowCells.push({
          rowId: fillRow.rowId,
          date: dates[k],
          startDate: startDate,
          endDate: endDate,
          value: fillRowColumn.value,
          extra: fillRowColumn.extra
        });
      }
    }
  }
  return fillRowCells;
}
export function generateBlockTableCells(blockRows) {
  var blockRowCells = [];
  for (var i = 0; i < blockRows.length; i++) {
    var blockRow = blockRows[i];
    for (var j = 0; j < blockRow.columns.length; j++) {
      var blockRowColumn = blockRow.columns[j];
      var startDate = blockRowColumn.startDate;
      var endDate = blockRowColumn.endDate;
      var dates = generateDatesFromStartAndEnd(startDate, endDate);
      for (var k = 0; k < dates.length; k++) {
        blockRowCells.push({
          rowId: blockRow.rowId,
          date: dates[k],
          startDate: startDate,
          endDate: endDate,
          value: blockRowColumn.value,
          extra: blockRowColumn.extra
        });
      }
    }
  }
  return blockRowCells;
}
export function getFillRowCell(fillRowCells, rowId, date) {
  var _fillRowCells$filter;
  return (_fillRowCells$filter = fillRowCells.filter(function (i) {
    return i.rowId === rowId && i.date === date;
  })) === null || _fillRowCells$filter === void 0 ? void 0 : _fillRowCells$filter[0];
}
export function getBlockRowCell(blockRowCells, rowId, date) {
  var _blockRowCells$filter;
  return (_blockRowCells$filter = blockRowCells.filter(function (i) {
    return i.rowId === rowId && i.date === date;
  })) === null || _blockRowCells$filter === void 0 ? void 0 : _blockRowCells$filter[0];
}
export function generateOccupiedTableCells(occupiedRows) {
  var occupiedRowCells = [];
  for (var i = 0; i < occupiedRows.length; i++) {
    var occupiedRow = occupiedRows[i];
    for (var j = 0; j < occupiedRow.columns.length; j++) {
      var occupiedRowColumn = occupiedRow.columns[j];
      var startDate = occupiedRowColumn.startDate;
      var endDate = occupiedRowColumn.endDate;
      var dates = generateDatesFromStartAndEnd(startDate, endDate);
      for (var k = 0; k < dates.length; k++) {
        occupiedRowCells.push({
          rowId: occupiedRow.rowId,
          date: dates[k],
          startDate: startDate,
          endDate: endDate,
          link: occupiedRowColumn.link,
          name: occupiedRowColumn.name,
          text: occupiedRowColumn.text,
          avatar: occupiedRowColumn.avatar,
          color: occupiedRowColumn.color,
          extra: occupiedRowColumn.extra
        });
      }
    }
  }
  return occupiedRowCells;
}
export function getOccupiedRowCell(occupiedRowCells, rowId, date) {
  var matches = occupiedRowCells.filter(function (i) {
    return i.rowId === rowId && i.date === date;
  });
  return matches === null || matches === void 0 ? void 0 : matches[(matches === null || matches === void 0 ? void 0 : matches.length) - 1];
}
export function generateTableCells(monthDate, rows, fillRows, blockRows, occupiedRows) {
  var tableCells = [];
  var fillRowCells = generateFillTableCells(fillRows);
  var blockRowCells = generateBlockTableCells(blockRows);
  var occupiedRowCells = generateOccupiedTableCells(occupiedRows);
  var allMonthDates = Object.values(monthDate).flat();
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var rowId = row.rowId;
    for (var j = 0; j < allMonthDates.length; j++) {
      var column = allMonthDates[j];
      var value = row.value;
      var status = CalendarCellStatusProp.Normal;
      var startDate = column;
      var endDate = column;
      var extra = void 0;
      var occupied = void 0;
      var fillRowCell = getFillRowCell(fillRowCells, rowId, column);
      var blockRowCell = getBlockRowCell(blockRowCells, rowId, column);
      var occupiedRowCell = getOccupiedRowCell(occupiedRowCells, rowId, column);
      if (fillRowCell) {
        value = fillRowCell.value;
        status = CalendarCellStatusProp.Normal;
        startDate = fillRowCell.startDate;
        endDate = fillRowCell.endDate;
        extra = fillRowCell.extra;
      }
      if (blockRowCell) {
        value = blockRowCell.value;
        status = CalendarCellStatusProp.Block;
        startDate = blockRowCell.startDate;
        endDate = blockRowCell.endDate;
        extra = blockRowCell.extra;
      }
      if (occupiedRowCell) {
        occupied = {
          startDate: occupiedRowCell.startDate,
          endDate: occupiedRowCell.endDate,
          link: occupiedRowCell.link,
          name: occupiedRowCell.name,
          text: occupiedRowCell.text,
          avatar: occupiedRowCell.avatar,
          color: occupiedRowCell.color,
          extra: occupiedRowCell.extra
        };
      }
      tableCells.push({
        rowIndex: i,
        columnIndex: j,
        rowId: rowId,
        date: column,
        startDate: startDate,
        endDate: endDate,
        value: value,
        status: status,
        extra: extra,
        occupied: occupied
      });
    }
  }
  return tableCells;
}
export function getTableCell(tableCells, rowIndex, columnIndex) {
  var _tableCells$filter;
  return (_tableCells$filter = tableCells.filter(function (i) {
    return i.rowIndex === rowIndex && i.columnIndex === columnIndex;
  })) === null || _tableCells$filter === void 0 ? void 0 : _tableCells$filter[0];
}
export function getTableRowCells(tableCells, rowStartIndex, rowEndIndex, columnIndex) {
  return tableCells.filter(function (i) {
    return i.rowIndex >= rowStartIndex && i.rowIndex <= rowEndIndex && i.columnIndex === columnIndex;
  });
}
export function getTableColumnCells(tableCells, columnStartIndex, columnEndIndex, rowIndex) {
  return tableCells.filter(function (i) {
    return i.columnIndex >= columnStartIndex && i.columnIndex <= columnEndIndex && i.rowIndex === rowIndex;
  });
}
export function returnToToday(props) {
  props.setCustomScrollLeft((props.subtractDayNumber - 2) * props.columnWidth);
  props.setShowReturnToToday(false);
}
export function getTableCellOccupiedCondition(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if (tableCell.occupied) {
    var startDate = moment(tableCell.occupied.startDate);
    var date = moment(tableCell.date);
    return startDate.isSame(date, 'day');
  }
  return false;
}
export function getTableCellOccupied(tableCells, rowIndex, columnIndex, props) {
  var _tableCell$occupied, _tableCell$occupied2;
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  var startDate = (_tableCell$occupied = tableCell.occupied) === null || _tableCell$occupied === void 0 ? void 0 : _tableCell$occupied.startDate;
  var endDate = (_tableCell$occupied2 = tableCell.occupied) === null || _tableCell$occupied2 === void 0 ? void 0 : _tableCell$occupied2.endDate;
  var date = tableCell.date;
  var widthHours = moment.duration(moment(endDate).diff(moment(startDate))).asHours();
  var hourColumnWidth = props.columnWidth / 24;
  var width = hourColumnWidth * widthHours;
  var leftHours = moment.duration(moment(startDate).diff(moment(date))).asHours();
  var left = hourColumnWidth * leftHours;
  return {
    width: width,
    left: left
  };
}
export function onOccupiedClick(tableCells, rowIndex, columnIndex, props) {
  var occupied = getTableCell(tableCells, rowIndex, columnIndex).occupied;
  if (props.onOccupiedClick && occupied) {
    props.onOccupiedClick(occupied.link);
  }
}