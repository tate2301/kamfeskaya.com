/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Head from 'next/head';

import { Card } from 'components/Card';
import logoAnimaginary from 'images/logos/animaginary.svg';
import logoCosmos from 'images/logos/cosmos.svg';
import logoHelioStream from 'images/logos/helio-stream.svg';
import logoOpenShuttle from 'images/logos/open-shuttle.svg';
import logoPlanetaria from 'images/logos/planetaria.svg';
import EcosystemLayout from 'components/layouts/reblur';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { SVGProps } from 'react';

const projects = [
  {
    name: 'Burnout Pages',
    description: 'Build your tribe and get more done.',
    link: { href: '/reblur/burnouts', label: 'burnout.page' },
    logo: logoPlanetaria,
  },
  {
    name: 'Telescope',
    description: 'No-BS financial projections to get more done.',
    link: { href: '/reblur/telescope', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Shorty',
    description: 'Use blockchain for everyday things.',
    link: { href: '/reblur/shorty', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Discreet',
    description: 'Private native smart contracts powered by Sisu Network.',
    link: { href: '/reblur/eip-2301', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'FB Pixel',
    description: 'Facebook analytics for 10x developers.',
    link: { href: '/reblur/shorty', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Twizard',
    description: 'Switch between color modes effortlessly with TailwindCSS',
    link: {
      href: '/reblur/twizard',
      label: 'github.com/Pagka/twizard',
    },
    logo: logoOpenShuttle,
  },
  {
    name: 'Web3 wtf',
    description: 'Web3 Engineering patterns that will make you say wtf!',
    link: { href: '/reblur/web3wtf', label: 'github.com' },
    logo: logoAnimaginary,
  },
];

function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <EcosystemLayout name={'Reblur'} bg={'fbpixel'}>
      <Head>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <div className="flex flex-col justify-center px-4 py-12 ">
        <h2 className="py-6 text-4xl font-semibold text-radix-slate-slate12 dark:text-gray-100 md:text-6xl">
          ReblurDAO respects your privacy.
        </h2>
        <p className="pb-4 text-lg font-base dark:text-gray-300">
          Welcome to the next generation internet. Here is an internet where you
          choose who accesses what part of your personal data. An internet where
          your privacy is respected. All of this powered by an ecosystem of
          products backed by the community and not power-hungry{' '}
          <span className="strikethrough">Venture Capitalists</span>.
        </p>
        <div className="flex gap-4 pt-8">
          <Link href="/reblur/contribute">
            <a>
              <button
                id="contribute"
                className="flex items-center w-full gap-4 px-6 py-3 font-medium border-2 rounded-md bg-radix-slate-slate12 dark:bg-white dark:text-gray-800 dark:border-gray-800 text-zinc-50 "
              >
                Get $RBLR tokens <ArrowRightIcon />
              </button>
            </a>
          </Link>
          <Link href="/reblur/contribute">
            <a>
              <button
                id="contribute"
                className="flex items-center w-full gap-4 px-6 py-3 font-medium border-2 rounded-md border-radix-slate-slate12 dark:border-gray- dark:text-gray-100 dark:border-gray-100 text-zinc-800 "
              >
                Read the Whitepaper <ArrowRightIcon />
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="px-4 py-12 mt-12">
        <p className="font-medium text-orange-600">Why Should We?</p>
        <h3 className="text-4xl font-medium lg:text-4xl text-radix-slate-slate12 dark:text-gray-50">
          Building a safer and <br />
          privacy respecting internet.
        </h3>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-bold text-radix-slate-slate12">
              Open Source. Open Standards.
            </h4>
            <p className="pt-4">
              ReblurDAO is built on the ideas of Open Source software and we are
              open about our standards. We believe this way we allow the
              brightest minds to pitch in and help propell technology in the
              right direction. The DAO is built to power all the Open Source
              efforts in the Web3 space.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-bold text-radix-slate-slate12">
              Privacy. Trust. Non-Custodial.
            </h4>
            <p className="pt-4">
              Projects can request private user data in a privacy preserving
              way, using Zero-Knowledge Authorization. All projects are audited
              to ensure their practise with user data aligns with the core
              values of ReblurDAO. Most importantly, the user has full control
              over who access what part of their data.
            </p>
          </div>
        </div>
        <div className="relative mt-8 overflow-y-visible">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <h2 className="text-5xl font-bold text-radix-slate-slate12">
                  10+
                </h2>
                <p className="mt-2">Projects</p>
              </div>
              <div className="col-span-1">
                <h2 className="text-5xl font-bold text-radix-slate-slate12">
                  20+
                </h2>
                <p className="mt-2">Contributors</p>
              </div>
              <div className="col-span-1">
                <h2 className="text-5xl font-bold text-radix-slate-slate12">
                  $5k+
                </h2>
                <p className="mt-2">Funds Granted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 py-12 mt-8">
        <p className="font-medium text-orange-600">From The Developers</p>
        <h2 className="text-4xl font-medium lg:text-4xl text-radix-slate-slate12 dark:text-gray-50">
          The things we are making.
        </h2>
        <p className="mt-1 text-base dark:text-gray-200">
          ReblurDAO is building an ecosystem of everyday products. Some of these
          projects may not be directly related to Web3 and dApps but help to
          realise the ultimate goal.
        </p>
        <div className="mt-8">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Card as="li" key={project.name} className={undefined}>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="w-8 h-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                {false && (
                  <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="flex-none w-6 h-6" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                )}
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </EcosystemLayout>
  );
}
