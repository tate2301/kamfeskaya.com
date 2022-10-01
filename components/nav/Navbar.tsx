import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="z-50 w-screen m-0 bg-transparent dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-between max-w-5xl px-4 mx-auto lg:py-4">
        <div className="flex flex-col items-center justify-end w-full lg:flex-row lg:justify-between">
          <div className="flex justify-between gap-8 py-4 text-radix-slate-slate12">
            <Link href={'/'}>
              <a className="text-base ">Home</a>
            </Link>
            {false && (
              <Link href={'/club'}>
                <a className="text-base ">Design</a>
              </Link>
            )}
            <Link href={'/engineering'}>
              <a className="text-base ">Engineering</a>
            </Link>
            <Link href={'/blog'}>
              <a className="text-base ">Blog</a>
            </Link>
          </div>
          <div className="items-center justify-end w-full px-8 mt-4 lg:w-auto lg:mt-0">
            <Link
              href={'mailto:tatendachris@gmail.com?subject=Project inquiry!'}
            >
              <a className="px-8 py-3 text-white rounded-md btn drop-shadow-xl">
                Work with me
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
