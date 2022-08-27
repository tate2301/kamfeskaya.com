/* eslint-disable @next/next/no-img-element */

import { CalendarIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import ScheduledItemMenu from './ScheduledItemMenu';

export default function ScheduledListItem({
  meeting,
}: {
  meeting: {
    avatar: string;
    name: string;
    address: string;
    date: string;
    time: string;
    id: number;
  };
}) {
  return (
    <li key={meeting.id} className="relative flex py-6 space-x-6 xl:static">
      <img
        src={meeting.avatar}
        alt=""
        className="flex-none rounded-full h-14 w-14"
      />
      <div className="flex-auto">
        <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
          {meeting.name}
        </h3>
        <dl className="flex flex-col mt-2 text-gray-500">
          <div className="flex items-start space-x-3">
            <dt className="mt-0.5">
              <span className="sr-only">Date</span>
              <CalendarIcon
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <time dateTime={meeting.date + meeting.time}>
                {meeting.date} at {meeting.time}
              </time>
            </dd>
          </div>
          <div className="flex items-start mt-2 space-x-3">
            <dt className="mt-0.5">
              <span className="sr-only">Issue</span>
              <InfoCircledIcon
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <p>There is no tagged issue</p>
            </dd>
          </div>
        </dl>
      </div>
      <ScheduledItemMenu />
    </li>
  );
}
