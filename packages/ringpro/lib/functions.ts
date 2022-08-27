export const getMonthDays = (index: number): number => {
  let num_days;

  if (index === 7) {
    num_days = 31;
  } else if (index === 1) {
    if (new Date().getFullYear() % 4 === 0) {
      num_days = 29;
    } else {
      num_days = 28;
    }
  } else if (index % 2 === 0 && index < 7) {
    num_days = 31;
  } else if (index % 2 !== 0 && index < 7) {
    num_days = 30;
  } else if (index % 2 !== 0 && index > 7) {
    num_days = 31;
  } else {
    num_days = 30;
  }

  return num_days;
};

export const generateMonthsTable = (year?: number, month?: number) => {
  const index = month ?? new Date().getMonth();

  const monthDays = getMonthDays(index);
  const prevMonthDays = getMonthDays(index - 1);

  const first_day_index = new Date(
    year ?? new Date().getFullYear(),
    month ?? new Date().getMonth(),
    1,
  ).getDay();

  const date_map = [];

  if (first_day_index > 0) {
    const prev_month_cutoff = prevMonthDays - first_day_index;
    for (let i = prev_month_cutoff + 1; i < prevMonthDays + 1; i++) {
      date_map.push({ day: i, current: false, month: index - 1 });
    }
  }

  for (let i = 1; i < monthDays + 1; i++) {
    date_map.push({ day: i, current: true, month: index });
  }

  const last_day_index = new Date(
    year ?? new Date().getFullYear(),
    month ?? new Date().getMonth(),
    monthDays,
  ).getDay();
  if (last_day_index < 6) {
    for (let i = 1; i < 6 - last_day_index + 1; i++) {
      date_map.push({ day: i, current: false, month: index + 1 });
    }
  }

  return date_map.map((d) => ({
    date: `${year}-${d.month}-${d.day}`,
    isCurrentMonth: d.current,
  }));
};

export const getTodayInDateFormat = () => {
  return (
    new Date().getFullYear() +
    '-' +
    new Date().getMonth() +
    '-' +
    new Date().getDate()
  );
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
