import EcosystemLayout from 'components/layouts/reblur';

export default function Shot() {
  return (
    <EcosystemLayout name="snip">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 dark:text-gray-100 md:text-6xl">
          Web3 Engineering patterns that make you say wtf!
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600 dark:text-gray-300">
          We are building a bank-of-knowledge for developers looking to build in
          the web3 space. We are experimenting on new ideas and concepts that
          will enhance the user experience for Web3 products.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <a href="#">
              <button className="w-full px-8 py-3 text-lg font-semibold bg-gray-800 border-2 rounded-full dark:bg-white dark:text-gray-800 text-zinc-50 ">
                Browse
              </button>
            </a>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
