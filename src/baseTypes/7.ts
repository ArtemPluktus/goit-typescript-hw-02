/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekends {
  Saturday = 'Saturday',
  Sunday = 'Sunday'
};

function isWeekend(day: string): boolean {
  return day === Weekends.Saturday || day === Weekends.Sunday;
}