import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-screen m-0 bg-transparent dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-between max-w-5xl mx-auto lg:py-4">
        <div className="flex flex-col items-center justify-end w-full lg:flex-row lg:justify-between">
          <div className="flex justify-between gap-8 py-4 text-radix-slate-slate12">
            <Link href={'/ecosystem'}>
              <a className="text-base ">Product Ecosystem</a>
            </Link>
            <Link href={'https://newsletter.kamfeskaya.com'}>
              <a className="text-base ">Blog</a>
            </Link>
            {false && (
              <Link href={'https://kamos.kamfeskaya.com'}>
                <a className="text-base ">KamOS</a>
              </Link>
            )}
          </div>
          <div className="items-center justify-end hidden w-full px-8 mt-4 lg:w-auto lg:mt-0"></div>
        </div>
      </div>
    </div>
  );
}
