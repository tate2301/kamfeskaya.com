import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function EcosystemNavbar({ name }: { name: string }) {
  return (
    <div className="p-4">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-50">
            {name}
          </h3>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center h-full">
            <ConnectButton
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
              chainStatus={'icon'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
