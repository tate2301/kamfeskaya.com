import EcosystemLayout from 'components/layouts/ecosystem';

export default function Divider() {
  return (
    <EcosystemLayout name="fbpixel">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 dark:text-gray-100 md:text-6xl">
          Build dope products. Faaast!!
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600 dark:text-gray-200">
          Pseudocoder is not just for developers, it is for creators. Built to
          propell ambitious creators into shoving their success right in the
          face of the haters!
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <button className="w-full px-6 py-3 font-mono font-semibold border-2 rounded-full dark:bg-gray-700 dark:text-gray-100 dark:border-zinc-700 bg-gray-50 text-zinc-800 border-zinc-300">
              Gimme some code!
            </button>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
