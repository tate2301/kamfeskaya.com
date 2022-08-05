import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function BlogNavbar() {
  return (
    <div className="container py-4 pt-8 mx-auto">
      <div className="flex justify-between px-2">
        <Link href={'/'}>
          <a className="text-xl">
            <span className="font-bold">Kamfeskaya</span> Blog
          </a>
        </Link>
        <div className="px-2 connect-button">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
