import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  return (
    <div className="fixed z-30 w-screen py-4 m-0 bg-white shadow dark:shadow-sm dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-between max-w-5xl mx-auto lg:py-4">
        <div className="flex flex-col items-center justify-end w-full lg:flex-row lg:justify-between">
          <div className="flex justify-between w-full gap-8 px-8 py-4 border-b border-gray-300 lg:hidden dark:border-gray-700">
            <Link href={'/ecosystem'}>
              <a className="text-base font-semibold">Product Ecosystem</a>
            </Link>
            <Link href={'/blog'}>
              <a className="text-base font-semibold">Blog</a>
            </Link>
            <Link href={'https://kamos.kamfeskaya.com'}>
              <a className="text-base font-semibold">KamOS</a>
            </Link>
          </div>
          <div className="justify-between hidden gap-8 py-4 lg:flex">
            <Link href={'/ecosystem'}>
              <a className="text-base font-semibold">Product Ecosystem</a>
            </Link>
            <Link href={'/blog'}>
              <a className="text-base font-semibold">Blog</a>
            </Link>
            {false && (
              <Link href={'https://kamos.kamfeskaya.com'}>
                <a className="text-base font-semibold">KamOS</a>
              </Link>
            )}
          </div>
          <div className="flex items-center justify-end w-full px-8 mt-4 lg:w-auto lg:mt-0">
            <div className="flex items-center h-full">
              <ConnectButton
                showBalance={{
                  smallScreen: false,
                  largeScreen: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
