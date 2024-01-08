/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Weekends;
(function (Weekends) {
    Weekends["Saturday"] = "Saturday";
    Weekends["Sunday"] = "Sunday";
})(Weekends || (Weekends = {}));
;
function isWeekend(day) {
    return day === Weekends.Saturday || day === Weekends.Sunday;
}
