import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from './SocialIcons';

export default function LandingPageContent() {
  useEffect(() => {
    // Randomly pick one of the possible combinations
    /*setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allCombinations.length);
      setOptions(allCombinations[randomIndex]);
    }, 5000);*/
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[30vh] ">
      <div className="px-4">
        <p className="pt-8 pb-2 text-sm text-orange-600">
          Available for new projects
        </p>
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={'/profile-pic.png'}
            alt={"Tatenda's profile picture"}
            width={64}
            height={64}
          />
          <div className="flex flex-col">
            <h4 className="text-xl font-medium text-slate-900">
              Tatenda Christopher Chinyamakobvu
            </h4>
            <p>Product Designer + Fullstack Developer</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-12">
        <h2 className="font-medium text-slate-900">About</h2>
        <p className="mt-2">
          Hi I am Tatenda a Product Engineer & Fullstack Developer, I love
          building intuitive applications that promote good mental health. I am
          currently working on Pacebar, a platform for friends, family or fans
          to support the people they care in about.I am on a mission to make
          people feel less alone. . It&#39;s all about the journey, so enjoy it
          with your fans and family. .
        </p>
      </div>

      <div className="px-4 py-12">
        <h1 className="mb-4 subpixel-antialiased font-medium text-slate-800 dark:text-slate-200">
          Highlights
        </h1>
        <div className="flex flex-col gap-8 md:gap-8">
          <div className="flex flex-wrap w-full gap-4 p-4 transition-opacity duration-75 hover:bg-gray-50 md:gap-8 rounded-xl">
            <div className="w-full flex-noshrink md:w-1/4">2022</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="font-medium text-slate-700">Pacebar</h5>
                  <p>
                    <span className="px-3 py-1 text-sm text-orange-400 bg-orange-50 rounded-xl">
                      Work in Progress
                    </span>
                  </p>
                </a>
              </Link>
              <p className="mt-2">
                This right here is my baby, my favorite. The idea around Pacebar
                is to build a platform that encourages good mental health, self
                development and community building. It is my latest project and
                I am bootstrapping it in my free time. As expected in an
                IndieHacker project, I am the Project Manager, Product Designer,
                DevOps Engineer and Quality Assurance guy. Wearing these
                multiple hats I have made a couple decisions; I am building with
                Next.js 12, Planetscale, TailwindCSS and GraphQL.
                <br />
                <br />
                Ever want to know how you’re doing? Stay connected with your
                fans and share life’s big moments 🎉 through Pacebar.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 p-4 transition-opacity duration-75 hover:bg-gray-50 md:gap-8 rounded-xl">
            <div className="w-full flex-noshrink md:w-1/4">2022</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="font-medium text-slate-700">TreatDAO</h5>
                  <p className="mb-2 text-blue-500">https://treatdao.com</p>
                </a>
              </Link>
              <p>
                I designed and built the Web3 community platform that allows
                creators to sell content as NFTS. In this project I designed the
                UI, worked heavily on the frontend built in Next.js and deployed
                smart contracts in Solidity on the Binance Smart Chain. I also
                designed social architecture of the platform, things including
                recommendations, determing the suitable network effects and
                ensuring the privacy of both creators and fans is protected.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 p-4 transition-opacity duration-75 hover:bg-gray-50 md:gap-8 rounded-xl">
            <div className="w-full flex-noshrink md:w-1/4">2022</div>
            <div className="flex-1 ">
              <Link href={'/engineering/pacebar'}>
                <a className="flex flex-col ">
                  <h5 className="font-medium text-slate-700">Shorty</h5>
                  <p>
                    <span className="px-3 py-1 text-sm text-orange-400 bg-orange-50 rounded-xl">
                      Work in Progress
                    </span>
                  </p>
                </a>
              </Link>
              <p className="mt-2">
                I have designed Shorty around URL shortening, privacy and all
                other basic essentials for a life on the internet. It includes
                features like sharing self-deleting notes, password protected
                URLs, capturing visitor metadata and analytics for all the urls
                and notes shared. Send your loved ones a private message.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12 mx-auto">
        <div className="flex justify-center gap-8">
          <Link href={'https://github.com/tate2301'}>
            <a target={'_blank'} rel="noopener">
              <GitHubIcon className="w-8 h-8" />
            </a>
          </Link>
          <Link href={'https://twitter.com/kamfeskaya'}>
            <a target={'_blank'} rel="noopener">
              <TwitterIcon className="w-8 h-8" />
            </a>
          </Link>
          <Link href={'https://instagram.com/kamfeskaya'}>
            <a target={'_blank'} rel="noopener">
              <InstagramIcon className="w-8 h-8" />
            </a>
          </Link>
          <Link href={'https://linkedin.com/tate2301'}>
            <a target={'_blank'} rel="noopener">
              <LinkedInIcon className="w-8 h-8" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
