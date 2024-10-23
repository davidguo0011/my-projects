import dayjs from 'dayjs';
export function reSetScrollLeft(date, props, titleDate) {
  var selectedDate = dayjs(date).startOf('month');
  var firstDate = dayjs(titleDate.firstDate);
  var diffDays = selectedDate.diff(firstDate, 'days');
  var scrollLeft = diffDays * props.columnWidth;
  props.setCustomScrollLeft(scrollLeft > 0 ? scrollLeft : 0);
  props.setShowReturnToToday(false);
}
export function reSetScrollTop(props, selectedDate, monthDate, scrollWidth) {
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
  var months = Object.keys(monthDate);
  var numberOfRow = 0;
  for (var i = 0; i < months.length; i++) {
    if (selectedDate.format('YYYY-MM') === months[i]) {
      var scrollTop = numberOfRow * (scrollWidth / 7);
      props.setCustomScrollTop(scrollTop);
    }
    var year = Number(months[i].split('-')[0]);
    var month = Number(months[i].split('-')[1]) - 1;
    numberOfRow += getRowsUntilThisMonth(year, month) + 1; //title take 1 row
  }
}