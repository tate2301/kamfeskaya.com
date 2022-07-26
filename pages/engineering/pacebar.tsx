import EcosystemLayout from 'components/layouts/MarketingPageLayout';

export default function Burnouts() {
  return (
    <EcosystemLayout name="Pacebar" bg="fbpixel">
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-slate-800 dark:text-slate-100 md:text-6xl">
          Build your tribe and get more done.
        </h2>
        <p className="max-w-xl pb-4 text-xl text-slate-600 dark:text-slate-200">
          Ever want to know how you’re doing? Stay connected with your fans and
          share life’s big moments 🎉 through Burnouts.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <button className="w-full px-6 py-3 font-semibold rounded-full bg-slate-900 dark:bg-gray-100 text-slate-50 dark:text-zinc-800 border-zinc-300">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
