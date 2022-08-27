import { Menu, Transition } from '@headlessui/react';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { classNames } from 'packages/ringpro/lib/functions';
import { Fragment } from 'react';

export default function ScheduledItemMenu() {
  return (
    <Menu
      as="div"
      className="absolute right-0 top-6 xl:relative xl:top-auto xl:right-auto xl:self-center"
    >
      <div>
        <Menu.Button className="flex items-center p-2 -m-2 text-gray-500 rounded-full hover:text-gray-600">
          <span className="sr-only">Open options</span>
          <DotsHorizontalIcon className="w-5 h-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg focus:outline-none w-36 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  )}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  )}
                >
                  Cancel
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
