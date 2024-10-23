function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import "./style.less";
import moment from 'moment';
export function generateMonthDate(totalDayNumber, subtractDayNumber) {
  var startDay = moment().subtract(subtractDayNumber, 'days');
  var dates = [];
  for (var i = 0; i < totalDayNumber; i++) {
    dates.push(startDay.clone().add(i, 'days'));
  }
  var groupedByMonth = {};
  dates.forEach(function (date) {
    var v = date.format('YYYY-MM-DD');
    var month = date.format('YYYY-MM');
    if (!groupedByMonth[month]) {
      groupedByMonth[month] = [];
    }
    groupedByMonth[month].push(v);
  });
  return groupedByMonth;
}
export function generateMonthDateForMonthly(totalMonthNumber, subtractMonthNumber) {
  var startDay = moment().subtract(subtractMonthNumber, 'month');
  var dates = [];

  // Loop through each month based on the totalMonthNumber
  for (var monthIndex = 0; monthIndex < totalMonthNumber; monthIndex++) {
    var currentMonthStart = startDay.clone().add(monthIndex, 'months').startOf('month');
    var currentMonthEnd = currentMonthStart.clone().endOf('month');

    // Loop through all days of the current month
    var currentDate = currentMonthStart.clone();
    while (currentDate.isSameOrBefore(currentMonthEnd)) {
      dates.push(currentDate.clone());
      currentDate.add(1, 'days');
    }
  }
  var groupedByMonth = {};

  // Group the dates by month (formatted as YYYY-MM)
  dates.forEach(function (date) {
    var formattedDate = date.format('YYYY-MM-DD');
    var month = date.format('YYYY-MM');
    if (!groupedByMonth[month]) {
      groupedByMonth[month] = [];
    }
    groupedByMonth[month].push(formattedDate);
  });
  return groupedByMonth;
}
export function onCustomDayScroll(sp, customScrollLeft, setCustomScrollLeft, onScroll, setShowReturnToToday, subtractDayNumber, columnWidth) {
  setCustomScrollLeft(sp.scrollLeft);
  onScroll(_objectSpread(_objectSpread({}, sp), {}, {
    scrollLeft: sp.scrollLeft
  }));
  if (customScrollLeft !== (subtractDayNumber - 2) * columnWidth) {
    setShowReturnToToday(true);
  }
}
export function onCustomMonthScroll(sp, setCustomScrollTop, onScroll) {
  setCustomScrollTop(sp.scrollTop);
  onScroll(_objectSpread(_objectSpread({}, sp), {}, {
    scrollTop: sp.scrollTop
  }));
}