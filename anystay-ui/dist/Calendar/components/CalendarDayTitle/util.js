import "./style.less";
import dayjs from 'dayjs';
export function generateTitleCells(props) {
  var titleCells = [];
  for (var i = 0; i < Object.keys(props.monthDate).length; i++) {
    var key = Object.keys(props.monthDate)[i];
    var dates = props.monthDate[key];
    titleCells.push({
      month: key,
      dates: dates
    });
  }
  return titleCells;
}
export function getTitleDate(cells) {
  var firstDate = dayjs(cells[0].dates[0]).format('D MMM YYYY');
  var lastDate = dayjs(cells[cells.length - 1].dates[cells[cells.length - 1].dates.length - 1]).format('D MMM YYYY');
  return {
    firstDate: firstDate,
    lastDate: lastDate
  };
}
export function getDateName(titleCell) {
  var value = titleCell.month;
  return "".concat(dayjs(value).format('MMMM'), " ").concat(dayjs(value).format('YYYY'));
}
export function getBorderStyle(props, titleCell) {
  if (Object.keys(props.monthDate).length > 1) {
    var lastKey = Object.keys(props.monthDate)[Object.keys(props.monthDate).length - 1];
    if (titleCell.month !== lastKey) {
      return 'calendar-day-title-text-border';
    }
  }
  return '';
}
export function getScrollDate(params, props, titleDate) {
  var number = Math.round(params.scrollLeft / props.columnWidth);
  return dayjs(titleDate.firstDate).add(number + 2, 'day');
}