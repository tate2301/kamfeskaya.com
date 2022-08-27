/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react';
import {
  generateMonthsTable,
  getTodayInDateFormat,
} from 'packages/ringpro/lib/functions';
import MonthHeader from '../atoms/MonthHeader';
import ScheduledListItem from '../atoms/ScheduledListIttem';
import { SmallDateItem } from '../atoms/DateItem';

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    address: '0x585865b1bd74b773B8FeF871289ac895742B22bC',
  },
];

export default function SummaryViewCalendar() {
  const [days, setDays] = useState<Array<object | any>>([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [selected, setSelected] = useState(-1);

  const updateYearAndMonth = (year: number, month: number) => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(0);
    } else if (month === -1) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setYear(year);
      setMonth(month);
    }
  };

  useEffect(() => {
    const days_map = generateMonthsTable(year, month);
    setDays(days_map);
  }, [year, month]);

  const selectDate = (idx: number) => {
    setSelected(idx);
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-16 px-4">
        <div className="col-span-3"></div>
        <div className="col-span-2 ">
          <div className="mt-10 text-center ">
            <MonthHeader
              month_selected={month}
              year_selected={year}
              updateMonth={updateYearAndMonth}
            />
            <div className="grid grid-cols-7 mt-6 text-xs leading-6 text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-px mt-2 text-sm bg-gray-200 rounded-lg shadow isolate ring-1 ring-gray-200">
              {days.map((day: any, dayIdx) => (
                <SmallDateItem
                  dayIdx={dayIdx}
                  key={day}
                  day={day}
                  days={days}
                  select={selectDate}
                  isSelected={
                    selected >= 0
                      ? dayIdx === selected
                      : day.date === getTodayInDateFormat()
                  }
                />
              ))}
            </div>
            <button
              type="button"
              className="w-full px-4 py-2 mt-8 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md shadow focus:outline-none hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Add event
            </button>
          </div>
          <div className="mt-4 text-sm leading-6 divide-y divide-gray-100">
            {meetings.map((meeting: any) => (
              <ScheduledListItem key={meeting.id} meeting={meeting} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
