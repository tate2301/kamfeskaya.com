import EcosystemLayout from 'components/layouts/MarketingPageLayout';

export default function TWizard() {
  return (
    <EcosystemLayout name="twizard">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-slate-800 dark:text-slate-100 md:text-6xl">
          Don&#39;t waste time redesigning the wheel
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-slate-600 dark:text-slate-300">
          Twiz is a collection of ready-made TailwindCSS UI components to save
          you time on your next project.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <button className="w-full px-6 py-3 font-semibold border-2 rounded-full dark:bg-gray-700 bg-gray-50 dark:text-white text-zinc-800 border-zinc-600">
              yarn add @halfstack/twiz-react
            </button>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
