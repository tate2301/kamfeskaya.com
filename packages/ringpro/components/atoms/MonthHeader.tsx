/* eslint-disable no-unused-vars */
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { months } from 'packages/ringpro/lib/constants';

const MonthHeader = ({
  updateMonth,
  month_selected,
  year_selected,
}: {
  updateMonth: (year: number, month: number) => any;
  month_selected: number;
  year_selected: number;
}) => {
  const next = () => {
    updateMonth(year_selected, month_selected + 1);
  };

  const prev = () => {
    updateMonth(year_selected, month_selected - 1);
  };
  return (
    <div className="flex items-center text-gray-900">
      <button
        type="button"
        onClick={prev}
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Previous month</span>
        <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
      </button>
      <div className="flex-auto font-semibold">
        {months[month_selected]} {' ' + year_selected}
      </div>
      <button
        onClick={next}
        type="button"
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Next month</span>
        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default MonthHeader;
