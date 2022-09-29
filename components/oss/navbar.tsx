import Link from 'next/link';

export default function EcosystemNavbar({ name }: { name: string }) {
  return (
    <div className="p-0 py-4">
      <div className="container flex flex-col items-center justify-between mx-auto divide-y lg:divide-y-0 lg:flex-row">
        <div className="flex items-center w-full p-4 lg:py-0 lg:w-auto">
          <p className="text-xl text-gray-800 dark:text-gray-50">
            <Link href={'/'}>
              <a>
                <span className="font-medium">Kamfeskaya</span> {name}
              </a>
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-end w-full gap-8 p-4 lg:py-0 lg:w-auto"></div>
      </div>
    </div>
  );
}
