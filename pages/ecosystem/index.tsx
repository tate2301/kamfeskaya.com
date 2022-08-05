import EcosystemLayout from 'components/layouts/ecosystem';
import { useEffect } from 'react';
import { annotate } from 'rough-notation';

export default function Ecosystem() {
  useEffect(() => {
    const anonHeading = annotate(document?.querySelector('#eco')!, {
      type: 'circle',
      color: 'orange',
    });
    anonHeading.show();
  }, []);
  return (
    <EcosystemLayout name={'Ecosystem'} bg={'fbpixel'}>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center ">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 dark:text-gray-100 md:text-6xl">
          The <span id="eco">Ecosystem</span>
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600 dark:text-gray-300">
          As a developer I have made myself belive in a concept that in order to
          deliver a sizeable value proposal you need to offer an ecosystem of
          products to your customers. Invite them, make the stay worthwhile and
          reward their participation.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <a href="https://snip.kamfeskaya.com">
              <button
                id="contribute"
                className="w-full px-8 py-3 text-lg font-semibold bg-gray-800 border-2 rounded-full dark:bg-white dark:text-gray-800 dark:border-gray-800 text-zinc-50 "
              >
                I want to contribute
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-screen px-4 pb-12 text-center ">
        <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-50">
          Products
        </h2>
        <p className="text-xl dark:text-gray-200">
          Let me walk you through the catalog
        </p>
      </div>
    </EcosystemLayout>
  );
}
