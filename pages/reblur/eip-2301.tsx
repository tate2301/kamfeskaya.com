import EcosystemLayout from 'components/layouts/reblur';

export default function EIP2301() {
  return (
    <EcosystemLayout name="EIP-2301">
      <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 md:text-6xl">
          Authenticated Smart Contracts, ever heard of them?
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600">
          Discreet is a new standard for private smart contracts powered by Sisu
          Network. It enables you to define private storage and enforce
          authentication rules for data access on the blockchain.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <button className="w-full px-6 py-3 font-mono font-semibold border-2 rounded-full bg-gray-50 text-zinc-800 border-zinc-300">
              Dive in
            </button>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
