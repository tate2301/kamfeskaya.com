import EcosystemLayout from 'components/layouts/reblur';

export default function Themeable() {
  return (
    <EcosystemLayout name="fbpixel">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 md:text-6xl">
          Fuschia, a rainbow 🌈 for your users.
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600">
          Themeable makes it possible to give your users the power to customize
          their experience on your website and applications.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <button className="w-full px-6 py-3 font-semibold border-2 rounded-full bg-gray-50 text-zinc-800 border-zinc-300">
              yarn add @reblur/themeable
            </button>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
