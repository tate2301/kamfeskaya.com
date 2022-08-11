import { ArrowRightIcon } from '@radix-ui/react-icons';
import EcosystemLayout from 'components/layouts/ecosystem';

export default function Ecosystem() {
  return (
    <EcosystemLayout name={'Telescope 🔭'} bg={'fbpixel'}>
      <div className="flex flex-col justify-center px-4 py-12 ">
        <h2 className="py-6 text-4xl font-semibold text-radix-slate-slate12 dark:text-gray-100 md:text-6xl">
          The Kamfeskaya <br /> <span id="eco">Ecosystem</span>
        </h2>
        <p className="max-w-xl pb-4 text-lg font-base dark:text-gray-300">
          Glad you made it here mate! I am on journey, to build a $50k MRR
          product ecosystem. Why? Because I want to give everyone the proof that
          we can all build digital products that are worthwhile, we can all
          change the world.
        </p>
        <div className="flex gap-4 pt-8">
          <a href="https://mailbox.kamfeskaya.com">
            <button
              id="contribute"
              className="flex items-center w-full gap-4 px-6 py-3 font-medium border-2 rounded-md bg-radix-slate-slate12 dark:bg-white dark:text-gray-800 dark:border-gray-800 text-zinc-50 "
            >
              I want to contribute <ArrowRightIcon />
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col px-4 py-12 ">
        <h2 className="text-2xl font-medium lg:text-4xl text-radix-slate-slate12 dark:text-gray-50">
          Wanna see the stuff?
        </h2>
        <p className="text-xl dark:text-gray-200">
          Let me walk you through the catalog
        </p>
      </div>
    </EcosystemLayout>
  );
}
