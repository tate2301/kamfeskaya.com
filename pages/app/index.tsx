import Link from 'next/link';

export default function CollaborateApp() {
  return (
    <div className="py-2">
      <div className="min-h-[70vh] flex items-center">
        <div className="flex flex-col items-center w-full max-w-3xl py-12 mx-auto text-center ">
          <p className="text-orange">
            This page is the beginning of a loft of great things.
          </p>
          <h1 className="text-5xl font-bold lg:text-7xl text-slate-800">
            Bringing your ideas to life!
          </h1>
          <p className="mt-4">
            Collaborating with me is the best value for your investment with
            excellent delivery times. Through this platform you will be able to
            request anything you require from my service catalog.
          </p>
          <div className="flex gap-8 mt-4">
            <Link href={'/login'}>
              <a className="px-4 py-2 rounded-lg shadow btn">Get started</a>
            </Link>
            <Link href={'/login'}>
              <a className="px-4 py-2 font-medium rounded-lg text-slate-900">
                My previous work
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
