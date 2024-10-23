import { CalendarCellStatusProp } from "../../interface";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import moment from 'moment';
var timer;
var longPressThreshold = 500;
export function generateVirtualCell(tableCells, rowIndex, columnIndex, rowId, value) {
  tableCells.push({
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    rowId: rowId,
    value: value,
    virtual: true
  });
}
export function generateRealCell(tableCells, rowIndex, columnIndex, rowId, value, dMonth, day, fillRowCells, blockRowCells, occupiedRowCells) {
  var date = dMonth.add(day - 1, 'day').format('YYYY-MM-DD');
  var status = CalendarCellStatusProp.Normal;
  var startDate = date;
  var endDate = date;
  var extra;
  var occupied;
  var fillRowCell = getFillRowCell(fillRowCells, rowId, date);
  var blockRowCell = getBlockRowCell(blockRowCells, rowId, date);
  var occupiedRowCell = getOccupiedRowCell(occupiedRowCells, rowId, date);
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
      extra: occupiedRowCell.extra,
      color: occupiedRowCell.color
    };
  }
  tableCells.push({
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    rowId: rowId,
    date: date,
    startDate: startDate,
    endDate: endDate,
    value: value,
    status: status,
    day: day,
    extra: extra,
    occupied: occupied,
    virtual: false
  });
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
          extra: occupiedRowColumn.extra,
          color: occupiedRowColumn.color
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
  var allMonths = Object.keys(monthDate);
  if (rows.length > 0) {
    var row = rows[0];
    var rowId = row.rowId;
    var value = row.value;
    var rowIndex = -1;
    var fillRowCells = generateFillTableCells(fillRows.filter(function (i) {
      return i.rowId === rowId;
    }));
    var blockRowCells = generateBlockTableCells(blockRows.filter(function (i) {
      return i.rowId === rowId;
    }));
    var occupiedRowCells = generateOccupiedTableCells(occupiedRows.filter(function (i) {
      return i.rowId === rowId;
    }));
    for (var i = 0; i < allMonths.length; i++) {
      rowIndex = rowIndex + 1;
      var month = allMonths[i];
      var dMonth = dayjs(month);

      // first row
      generateVirtualCell(tableCells, rowIndex, 0, rowId, dMonth.format('MMMM YYYY'));
      for (var j = 1; j < 7; j++) {
        generateVirtualCell(tableCells, rowIndex, j, rowId, '');
      }

      // rest row
      var daysInMonth = dMonth.daysInMonth();
      var startDay = dMonth.startOf('month').day();
      rowIndex = rowIndex + 1;
      for (var _j = 0; _j < startDay; _j++) {
        generateVirtualCell(tableCells, rowIndex, _j, rowId, '');
      }
      for (var _j2 = startDay; _j2 < 7; _j2++) {
        generateRealCell(tableCells, rowIndex, _j2, rowId, value, dMonth, _j2 - startDay + 1, fillRowCells, blockRowCells, occupiedRowCells);
      }
      var rowNumber = Math.ceil((daysInMonth - (7 - startDay)) / 7);
      for (var _j3 = 1; _j3 <= rowNumber; _j3++) {
        rowIndex = rowIndex + 1;
        if (_j3 !== rowNumber) {
          for (var k = 0; k < 7; k++) {
            generateRealCell(tableCells, rowIndex, k, rowId, value, dMonth, 7 - startDay + 1 + k + (_j3 - 1) * 7, fillRowCells, blockRowCells, occupiedRowCells);
          }
        } else {
          for (var _k = 0; _k < 7; _k++) {
            var day = 7 - startDay + 1 + _k + (_j3 - 1) * 7;
            if (day > daysInMonth) {
              generateVirtualCell(tableCells, rowIndex, _k, rowId, '');
            } else {
              generateRealCell(tableCells, rowIndex, _k, rowId, value, dMonth, day, fillRowCells, blockRowCells, occupiedRowCells);
            }
          }
        }
      }
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
export function getColumnBackgroundSelectedStyle(rowIndex, columnIndex, selection) {
  var rowStartIndex = selection.rowStartIndex,
    rowEndIndex = selection.rowEndIndex,
    columnStartIndex = selection.columnStartIndex,
    columnEndIndex = selection.columnEndIndex;
  if (rowStartIndex !== rowEndIndex) {
    if (rowEndIndex !== -1 && columnEndIndex !== -1 && (rowIndex === rowStartIndex && columnIndex >= columnStartIndex && columnIndex < 7 || rowIndex > rowStartIndex && rowIndex < rowEndIndex && columnIndex >= 0 && columnIndex < 7 || rowIndex === rowEndIndex && columnIndex >= 0 && columnIndex <= columnEndIndex)) {
      return 'calendar-month-table-row-column-selected-background-container';
    }
  } else {
    if (rowEndIndex !== -1 && columnEndIndex !== -1 && columnIndex >= columnStartIndex && columnIndex <= columnEndIndex && rowIndex >= rowStartIndex && rowIndex <= rowEndIndex) {
      return 'calendar-month-table-row-column-selected-background-container';
    }
  }
  return '';
}
export function getCurrentColumnBorderSelectedStyle(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if (tableCell.date === dayjs().format('YYYY-MM-DD')) {
    return "calendar-month-table-row-column-current-selected-border-container";
  }
  return '';
}
export function getColumnDisabledStyle(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if (tableCell && !tableCell.virtual && dayjs(tableCell.date).isBefore(dayjs().subtract(1, 'day'))) {
    return 'calendar-month-table-row-column-disabled-container';
  }
  return '';
}
export function getColumBlockStyle(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if ((tableCell === null || tableCell === void 0 ? void 0 : tableCell.status) === CalendarCellStatusProp.Block) {
    return 'calendar-month-table-row-column-block-container';
  }
  return '';
}
export function getColumnVirtualStyle(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if (tableCell && tableCell.virtual) {
    return 'calendar-month-table-row-column-virtual-container';
  }
  return '';
}
export function getTableCellVirtualCondition(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  return tableCell === null || tableCell === void 0 ? void 0 : tableCell.virtual;
}
export function getSelectedTableStartEndCell(tableCells, rowStartIndex, rowEndIndex, columnStartIndex, columnEndIndex) {
  // const numberOfColumns = 7; // hard coded 7

  return tableCells.filter(function (i) {
    var isWithinRowRange = i.rowIndex === rowStartIndex && i.columnIndex === columnStartIndex ||
    // Row 3, columns 4 to 6
    i.rowIndex === rowEndIndex && i.columnIndex === columnEndIndex; // Row 4, columns 0 to 2

    return isWithinRowRange;
  });
}
export function getTableColumnCellsByStartAndEnd(tableCells, columnStartIndex, columnEndIndex, rowStartIndex, rowEndIndex) {
  return tableCells.filter(function (i) {
    return i.columnIndex >= columnStartIndex && i.columnIndex <= columnEndIndex && i.rowIndex >= rowStartIndex && i.rowIndex <= rowEndIndex;
  });
}
export function getTableColumnCells(tableCells, rowStartIndex, rowEndIndex, columnStartIndex, columnEndIndex, rowIndex) {
  if (rowStartIndex !== rowEndIndex) {
    if (rowIndex === rowStartIndex) {
      return tableCells.filter(function (i) {
        return i.columnIndex >= columnStartIndex && i.columnIndex < 7 && i.rowIndex === rowIndex;
      });
    } else if (rowIndex > rowStartIndex && rowIndex < rowEndIndex) {
      return tableCells.filter(function (i) {
        return i.columnIndex >= 0 && i.columnIndex < 7 && i.rowIndex === rowIndex;
      });
    } else if (rowIndex === rowEndIndex) {
      return tableCells.filter(function (i) {
        return i.columnIndex >= 0 && i.columnIndex <= columnEndIndex && i.rowIndex === rowIndex;
      });
    } else {
      return [];
    }
  } else {
    return tableCells.filter(function (i) {
      return i.columnIndex >= columnStartIndex && i.columnIndex <= columnEndIndex && i.rowIndex === rowIndex;
    });
  }
}
export function onScrollDate(params, rowHeight, tableCells, props) {
  var number = Math.round(params.scrollTop / rowHeight);
  var tableCell = getTableCell(tableCells, number, 0);
  if (tableCell !== null && tableCell !== void 0 && tableCell.virtual && tableCell !== null && tableCell !== void 0 && tableCell.value) {
    props.setMonthTitle(tableCell.value);
    var dayjsObj = dayjs(tableCell.value, 'MMMM YYYY');
    props.setMonthlyTitleSelectedDate(dayjsObj);
  } else if (tableCell !== null && tableCell !== void 0 && tableCell.date) {
    var date = new Date(tableCell.date);
    var options = {
      year: 'numeric',
      month: 'long'
    };
    var formattedDate = date.toLocaleDateString('en-US', options);
    var _dayjsObj = dayjs(formattedDate, 'MMMM YYYY');
    props.setMonthlyTitleSelectedDate(_dayjsObj);
    props.setMonthTitle(formattedDate);
  }
}
export function showReturnToToday(cellHeight, customScrollTop, todayScrollTop, setShowReturnToday) {
  if (customScrollTop > todayScrollTop + cellHeight || customScrollTop < todayScrollTop - cellHeight * 2) {
    setShowReturnToday(true);
  } else {
    setShowReturnToday(false);
  }
}
export function onMouseDown(rowIndex, columnIndex, selectionVisible, setSelectionVisible, setSelection, tableCells, firstSelection) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if (tableCell && !tableCell.virtual && dayjs(tableCell.date).isAfter(dayjs().subtract(1, 'day'))) {
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
      firstSelection.current = {
        rowStartIndex: rowIndex,
        rowEndIndex: rowIndex,
        rowCurrentIndex: rowIndex,
        columnStartIndex: columnIndex,
        columnEndIndex: columnIndex,
        columnCurrentIndex: columnIndex
      };
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
export function onMouseOver(rowIndex, columnIndex, selectionVisible, selection, setSelection, tableCells, firstSelection) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  if (tableCell && !tableCell.virtual && dayjs(tableCell.date).isAfter(dayjs().subtract(1, 'day'))) {
    if (selectionVisible) {
      var currentRow = selection.rowCurrentIndex;
      var rowStart = rowIndex >= currentRow ? currentRow : rowIndex;
      var rowEnd = !(rowIndex >= currentRow) ? currentRow : rowIndex;
      var currentCol = selection.columnCurrentIndex;
      var columnStart = -1;
      if (rowIndex < firstSelection.current.rowStartIndex) {
        columnStart = columnIndex;
      } else if (rowIndex === firstSelection.current.rowStartIndex) {
        if (columnIndex < firstSelection.current.columnStartIndex) {
          columnStart = columnIndex;
        } else {
          columnStart = firstSelection.current.columnStartIndex;
        }
      } else {
        columnStart = firstSelection.current.columnStartIndex;
      }
      var columnEnd = -1;
      if (rowIndex < firstSelection.current.rowEndIndex) {
        columnEnd = firstSelection.current.columnEndIndex;
      } else if (rowIndex === firstSelection.current.rowEndIndex) {
        if (columnIndex < firstSelection.current.columnEndIndex) {
          columnEnd = firstSelection.current.columnEndIndex;
        } else {
          columnEnd = columnIndex;
        }
      } else {
        columnEnd = columnIndex;
      }

      // const columnStart = rowIndex  firstSelect.rowStartIndex && columnIndex >= firstSelect.columnStartIndex ? firstSelect.columnStartIndex : columnIndex;
      // const columnEnd = !(columnIndex >= currentCol) ? currentCol : columnIndex;

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
        cells: []
      };
      var selectedTableCells = getSelectedTableStartEndCell(tableCells, rowStartIndex, rowEndIndex, columnStartIndex, columnEndIndex);
      if (selectedTableCells.length === 2) {
        selectProp.startDate = selectedTableCells[0].date || '';
        selectProp.endDate = selectedTableCells[1].date || '';
      } else if (selectedTableCells.length === 1) {
        selectProp.startDate = selectedTableCells[0].date || '';
        selectProp.endDate = selectedTableCells[0].date || '';
      }
      for (var i = rowStartIndex; i <= rowEndIndex; i++) {
        var cells = getTableColumnCells(tableCells, rowStartIndex, rowEndIndex, columnStartIndex, columnEndIndex, i);
        for (var j = 0; j < cells.length; j++) {
          var cell = cells[j];
          if (!cell.virtual) {
            var _cell$occupied, _cell$occupied2, _cell$occupied3, _cell$occupied4, _cell$occupied5;
            selectProp.cells.push({
              status: cell.status || CalendarCellStatusProp.Normal,
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
        }
      }
      onSelect(selectProp);
    }
  }
}
export function onSectionRenderJumpToToday(init, todayScrollTop, monthDate, setCustomScrollTop, width) {
  //width / 7 = row height
  if (init.current) return;
  function getRowsUntilThisMonth(year, month) {
    // 获取该月的第一天
    var firstDayOfMonth = new Date(year, month, 1);
    var firstDayOfWeek = firstDayOfMonth.getDay(); // 星期天是0，星期一是1，...
    // 获取该月的最后一天
    var lastDayOfMonth = new Date(year, month + 1, 0);
    var totalDaysInMonth = lastDayOfMonth.getDate(); // 获取该月天数
    // 计算需要多少行（周）
    var totalCells = totalDaysInMonth + firstDayOfWeek; // 天数 + 偏移量
    var numberOfRows = Math.ceil(totalCells / 7); // 每行7天
    return numberOfRows;
  }
  function getRowsUntilToday() {
    // 获取该月的第一天
    var year = dayjs().year(); // Returns the year as a number
    var month = dayjs().month(); // Returns the month (0-based: 0 = January, 11 = December)
    var day = dayjs().date(); // Returns the day of the month
    var firstDayOfMonth = new Date(year, month, 1);
    var firstDayOfWeek = firstDayOfMonth.getDay(); // 星期天是0，星期一是1...
    // 计算今天之前的总单元格数，包括今天
    var totalCellsUntilToday = day + firstDayOfWeek;
    // 计算今天之前的行数
    var rowsUntilToday = Math.ceil(totalCellsUntilToday / 7);
    return rowsUntilToday;
  }
  var months = Object.keys(monthDate);
  var numberOfRow = 0;
  for (var i = 0; i < months.length; i++) {
    for (var j = 0; j < monthDate[months[i]].length; j++) {
      if (monthDate[months[i]][j] === dayjs().format('YYYY-MM-DD')) {
        numberOfRow += getRowsUntilToday();
        var scrollTop = numberOfRow * (width / 7);
        setCustomScrollTop(scrollTop);
        todayScrollTop.current = scrollTop;
        init.current = true;
        return;
      }
    }
    var year = Number(months[i].split('-')[0]);
    var month = Number(months[i].split('-')[1]) - 1;
    numberOfRow += getRowsUntilThisMonth(year, month) + 1; //title take 1 row
  }
}
export function getTableCellStartOccupiedCondition(tableCells, rowIndex, columnIndex) {
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  var tableCellDate = dayjs(tableCell.date);
  if (tableCell.occupied) {
    var _tableCell$occupied, _tableCell$occupied2;
    var occupiedStartDate = dayjs((_tableCell$occupied = tableCell.occupied) === null || _tableCell$occupied === void 0 ? void 0 : _tableCell$occupied.startDate);
    var occupiedEndDate = dayjs((_tableCell$occupied2 = tableCell.occupied) === null || _tableCell$occupied2 === void 0 ? void 0 : _tableCell$occupied2.endDate);
    dayjs.extend(isBetween);
    var isBetweenRange = (tableCellDate.isSame(occupiedStartDate, 'day') || tableCellDate.isAfter(occupiedStartDate, 'day')) && (tableCellDate.isSame(occupiedEndDate, 'day') || tableCellDate.isBefore(occupiedEndDate, 'day'));
    if (isBetweenRange) {
      return true;
    }
    return false;
  }
  return false;
}
function calculateTranslateX(hourColumnWidth, occupiedStartDate, tableCellDate) {
  var hoursDifference = occupiedStartDate.diff(tableCellDate.startOf('day'), 'hour');
  return hoursDifference * hourColumnWidth;
}
export function getTableCellOccupied(tableCells, rowIndex, columnIndex, columnWidth) {
  var _tableCell$occupied3, _tableCell$occupied4;
  var hourColumnWidth = columnWidth / 24;
  var tableCell = getTableCell(tableCells, rowIndex, columnIndex);
  var tableCellDate = dayjs(tableCell.date);
  var occupiedStartDate = (_tableCell$occupied3 = tableCell.occupied) === null || _tableCell$occupied3 === void 0 ? void 0 : _tableCell$occupied3.startDate;
  var occupiedEndDate = (_tableCell$occupied4 = tableCell.occupied) === null || _tableCell$occupied4 === void 0 ? void 0 : _tableCell$occupied4.endDate;
  dayjs.extend(isBetween);
  var isStart = tableCellDate.isSame(occupiedStartDate, 'day');
  var isEnd = tableCellDate.isSame(occupiedEndDate, 'day');
  var isBetweenRange = (tableCellDate.isSame(occupiedStartDate, 'day') || tableCellDate.isAfter(occupiedStartDate, 'day')) && (tableCellDate.isSame(occupiedEndDate, 'day') || tableCellDate.isBefore(occupiedEndDate, 'day'));
  if (isBetweenRange) {
    if (isStart && isEnd) {
      //same day booking
      var widthHours = moment.duration(moment(occupiedEndDate).diff(moment(occupiedStartDate))).asHours();
      var width = hourColumnWidth * widthHours;
      var left = hourColumnWidth * moment(occupiedStartDate).hour();
      return {
        width: width,
        left: left,
        translateX: 0
      };
    }
    if (isStart) {
      var tableCellEndDate = moment(tableCell.date).endOf('day');
      var _widthHours = moment.duration(tableCellEndDate.diff(moment(occupiedStartDate))).asHours();
      var _width = hourColumnWidth * _widthHours;
      var _left = hourColumnWidth * moment(occupiedStartDate).hour();
      return {
        width: _width,
        left: _left,
        borderRadiusCornerRightNoNeed: true,
        translateX: 0
      };
    } else if (isEnd) {
      var tableCellStartDate = moment(tableCell.date).startOf('day');
      var _widthHours2 = -moment.duration(tableCellStartDate.diff(moment(occupiedEndDate))).asHours();
      var _width2 = hourColumnWidth * _widthHours2;
      var right = hourColumnWidth * (24 - moment(occupiedEndDate).hour());
      return {
        width: _width2,
        right: right,
        borderRadiusCornerLeftNoNeed: true,
        translateX: calculateTranslateX(hourColumnWidth, dayjs(occupiedStartDate), dayjs(tableCell.date))
      };
    } else {
      return {
        width: columnWidth,
        borderRadiusCornerBothNoNeed: true,
        translateX: calculateTranslateX(hourColumnWidth, dayjs(occupiedStartDate), dayjs(tableCell.date))
      };
    }
  }
  return {
    width: 0
  };
}
export function getOccupiedBorderStyling(tableCells, rowIndex, columnIndex, columnWidth) {
  var res = getTableCellOccupied(tableCells, rowIndex, columnIndex, columnWidth);
  if (res.borderRadiusCornerRightNoNeed) {
    return {
      borderBottomRightRadius: '0',
      borderTopRightRadius: '0'
    };
  } else if (res.borderRadiusCornerLeftNoNeed) {
    return {
      borderBottomLeftRadius: '0',
      borderTopLeftRadius: '0'
    };
  } else if (res.borderRadiusCornerBothNoNeed) {
    return {
      borderBottomRightRadius: '0',
      borderTopRightRadius: '0',
      borderBottomLeftRadius: '0',
      borderTopLeftRadius: '0'
    };
  }
}
export function onOccupiedClick(tableCells, rowIndex, columnIndex, props) {
  var occupied = getTableCell(tableCells, rowIndex, columnIndex).occupied;
  if (props.onOccupiedClick && occupied) {
    props.onOccupiedClick(occupied.link);
  }
}