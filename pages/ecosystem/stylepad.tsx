import EcosystemLayout from 'components/layouts/ecosystem';

export default function Stylepad() {
  return (
    <EcosystemLayout name={'stylepad'} bg={'burnouts'}>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center ">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 dark:text-gray-100 md:text-6xl">
          The Stylepad
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600 dark:text-gray-300">
          I mean, I am growing up and everyone advices me to have order. I just
          thought I should start with the things I work with on a daily basis.
          Say hello to my Styleguide!
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <a href="https://snip.kamfeskaya.com">
              <button className="w-full px-8 py-3 text-lg font-semibold bg-gray-800 border-2 rounded-full dark:bg-white dark:text-gray-800 dark:border-gray-800 text-zinc-50 ">
                Show me the stuff
              </button>
            </a>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
