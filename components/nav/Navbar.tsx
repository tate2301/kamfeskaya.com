import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed z-30 w-screen py-8 m-0 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex items-center justify-between max-w-5xl py-4 mx-auto">
        <p className="text-xl font-bold">kamfeskaya.</p>
        <div className="flex gap-8">
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
      </div>
    </div>
  );
}
