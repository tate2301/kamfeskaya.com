import EcosystemLayout from 'components/layouts/ecosystem';

export default function Divider() {
  return (
    <EcosystemLayout name="fbpixel">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 md:text-6xl">
          Finally, a Web3 operating system in the browser.
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600">
          A Facebook Pixel SDK for the next generation of developers. Track your
          website events on all browsers, including Safari.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <button className="w-full px-6 py-3 font-mono font-semibold border-2 rounded-full bg-gray-50 text-zinc-800 border-zinc-300">
              yarn add @pagka/fbpixel
            </button>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
