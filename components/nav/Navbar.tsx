import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="relative z-50 w-screen m-0 bg-transparent dark:bg-gray-900 dark:text-slate-100">
      <div className="flex flex-col items-center justify-between px-4 mx-auto mt-4 border rounded-full shadow-xl md:px-8 border-slate-800/10 max-w-min shadow-gray-200/50">
        <div className="flex flex-col items-center justify-end w-full lg:flex-row lg:justify-between">
          <div className="border-b lg:border-0">
            <div className="flex justify-between gap-8 py-2 md:gap-12">
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
          </div>
        </div>
      </div>
    </div>
  );
}
