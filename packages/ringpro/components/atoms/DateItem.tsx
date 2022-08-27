import Link from 'next/link';
import { classNames } from 'packages/ringpro/lib/functions';

const SmallDateItem = ({
  day,
  dayIdx,
  days,
  select,
  isSelected,
}: {
  day: {
    isCurrentMonth: boolean;
    isToday: boolean;
    date: any;
  };
  dayIdx: number;
  isSelected: boolean;
  days: Array<any>;
  [key: string]: any;
}) => {
  return (
    <button
      key={day.date}
      type="button"
      onClick={() => select(dayIdx)}
      className={classNames(
        'py-1.5 hover:bg-gray-100 focus:z-10',
        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
        // @ts-ignore
        (isSelected || day.isToday) && 'font-semibold',
        isSelected && 'text-white',
        !isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
        !isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
        day.isToday && !isSelected && 'text-orange-600',
        dayIdx === 0 && 'rounded-tl-lg',
        dayIdx === 6 && 'rounded-tr-lg',
        dayIdx === days.length - 7 && 'rounded-bl-lg',
        dayIdx === days.length - 1 && 'rounded-br-lg',
      )}
    >
      <Link href={`/ecosystem/ringpro/workspaces/default/date/${day.date}`}>
        <a>
          <time
            dateTime={day.date}
            className={classNames(
              'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
              // @ts-ignore
              isSelected && day.isToday && 'bg-orange-600',
              isSelected && !day.isToday && 'bg-gray-900',
            )}
          >
            {day.date.split('-').pop().replace(/^0/, '')}
          </time>
        </a>
      </Link>
    </button>
  );
};

export { SmallDateItem };
