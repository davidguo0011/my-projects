import "./style.less";
import moment from 'moment';
export function generateDateCells(props) {
  var dateCells = [];
  for (var i = 0; i < Object.keys(props.monthDate).length; i++) {
    var key = Object.keys(props.monthDate)[i];
    var dates = props.monthDate[key];
    for (var j = 0; j < dates.length; j++) {
      dateCells.push({
        date: dates[j],
        month: key,
        dateIndex: j
      });
    }
  }
  return dateCells;
}
export function getDateNumber(dateCell) {
  var value = dateCell.date;
  return moment(value).date();
}
export function getDateWeekDay(dateCell) {
  var value = dateCell.date;
  return moment(value).format('ddd');
}
export function getBorderStyle(props, dateCell) {
  if (Object.keys(props.monthDate).length > 1) {
    var lastKey = Object.keys(props.monthDate)[Object.keys(props.monthDate).length - 1];
    if (dateCell.month !== lastKey) {
      var lastDateIndex = props.monthDate[dateCell.month].length - 1;
      if (dateCell.dateIndex === lastDateIndex) return 'calendar-day-date-value-item-border-container';
    }
  }
  return '';
}
export function getCurrentStyle(dateCell) {
  var date = dateCell.date;
  var today = moment().format('YYYY-MM-DD');
  return date === today ? "calendar-day-date-value-item-wrapper-selected-container" : '';
}
export function onScrollPrev(props) {
  var currentScrollLeft = props.scrollLeft;
  currentScrollLeft -= props.stepDayNumber * props.columnWidth;
  var minScrollLeft = 0;
  if (currentScrollLeft < minScrollLeft) {
    currentScrollLeft = minScrollLeft;
  }
  props.setCustomScrollLeft(currentScrollLeft);
}
export function onScrollNext(props) {
  var currentScrollLeft = props.scrollLeft;
  currentScrollLeft += props.stepDayNumber * props.columnWidth;
  var maxScrollLeft = props.totalDayNumber * props.columnWidth - props.clientWidth;
  if (currentScrollLeft > maxScrollLeft) {
    currentScrollLeft = maxScrollLeft;
  }
  props.setCustomScrollLeft(currentScrollLeft);
}