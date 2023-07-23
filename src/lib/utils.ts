export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function getTodaysDateToString(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDateModifiedByMonthsToString(numberOfMonths: number): string {
  let dateTimeObject = new Date();
  dateTimeObject.setMonth(dateTimeObject.getMonth() + numberOfMonths);
  return dateTimeObject.toISOString().split("T")[0];
}

export function getDateModifiedByDaysToString(numberOfDays: number): string {
  let dateTimeObject = new Date();
  dateTimeObject.setDate(dateTimeObject.getDate() + numberOfDays);
  return dateTimeObject.toISOString().split("T")[0];
}

