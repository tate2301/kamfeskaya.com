import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function BlogNavbar() {
  return (
    <div className="container py-4 pt-8 mx-auto">
      <div className="flex flex-col justify-between divide-y dark:divide-gray-600 lg:divide-y-0 lg:flex-row">
        <Link href={'/'}>
          <a className="p-2 text-xl dark:text-gray-200 lg:py-0">
            <span className="font-bold dark:text-white">Kamfeskaya</span> Blog
          </a>
        </Link>
        <div className="flex justify-end p-2 py-2 connect-button lg:py-0">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
