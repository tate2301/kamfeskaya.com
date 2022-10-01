/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Head from 'next/head';

import { Card } from 'components/Card';
import logoAnimaginary from 'images/logos/animaginary.svg';
import logoCosmos from 'images/logos/cosmos.svg';
import logoHelioStream from 'images/logos/helio-stream.svg';
import logoOpenShuttle from 'images/logos/open-shuttle.svg';
import logoPlanetaria from 'images/logos/planetaria.svg';
import web3wtf from 'images/logos/web3wtf.svg';

import EcosystemLayout from 'components/layouts/MarketingPageLayout';
import { SVGProps } from 'react';

const projects = [
  {
    name: 'Pacebar',
    description: 'Build your tribe and get more done.',
    link: { href: '/Engineering/pacebar', label: 'pacebar.xyz' },
    logo: logoPlanetaria,
  },
  {
    name: 'Telescope',
    description: 'No-BS financial projections to get more done.',
    link: { href: '/Engineering/telescope', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Shorty',
    description: 'Use blockchain for everyday things.',
    link: { href: '/Engineering/shorty', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'FB Pixel',
    description: 'Facebook analytics for 10x developers.',
    link: { href: '/Engineering/shorty', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'Twizard',
    description: 'Switch between color modes effortlessly with TailwindCSS',
    link: {
      href: '/Engineering/twizard',
      label: 'github.com/Pagka/twizard',
    },
    logo: logoOpenShuttle,
  },
  {
    name: 'Web3 wtf',
    description: 'Web3 Engineering patterns that will make you say wtf!',
    link: { href: '/Engineering/web3wtf', label: 'github.com' },
    logo: web3wtf,
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
    <EcosystemLayout name={'Engineering'} bg={'fbpixel'}>
      <Head>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <div className="px-4 py-12">
        <p className="font-medium text-orange-600">What is my purpose?</p>
        <h3 className="text-4xl font-medium lg:text-4xl text-radix-slate-slate12 dark:text-gray-50">
          Changing the world
          <br />
          by building tools that empower.
        </h3>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-bold text-radix-slate-slate12">
              Open Source. Open Standards.
            </h4>
            <p className="pt-4">
              The majority of the projects listed here are Open-Source. The
              exceptions are client work where I will have signed an NDA or
              anything else where common sense would agree that it should not be
              Open Source work. I invite anyone reading this to reach out and
              contribute on their favorite project here.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-bold text-radix-slate-slate12">
              Privacy. Innovation. Simplicity.
            </h4>
            <p className="pt-4">
              The mission is to create digital products that help in our
              day-to-day living while respecting the privacy of the user.
              Software engineers are at the core of innovation in technology and
              it is our right to build tools that are simple yet innovative
              whilst respecting the privacy of the user.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 py-12">
        <h2 className="text-4xl font-medium lg:text-4xl text-radix-slate-slate12 dark:text-gray-50">
          Projects
        </h2>
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
