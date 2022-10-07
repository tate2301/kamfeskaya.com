import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Banner() {
  useEffect(() => {
    // Randomly pick one of the possible combinations
    /*setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allCombinations.length);
      setOptions(allCombinations[randomIndex]);
    }, 5000);*/
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[30vh] ">
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
      <div className="subpixel-antialiased ">
        <h2 className="text-xl font-medium text-slate-900">About</h2>
        <p className="mt-2">
          Hi I am Tatenda a Product Engineer & Fullstack Developer, I love
          building intuitive applications that promote good mental health. I am
          currently working on Pacebar, a platform for friends, family or fans
          to support the people they care in about.I am on a mission to make
          people feel less alone. . It&#39;s all about the journey, so enjoy it
          with your fans and family. .
        </p>
      </div>

      <div className="pt-12 ">
        <h1 className="mb-4 text-2xl subpixel-antialiased font-bold text-gray-800 dark:text-gray-200">
          Highlights
        </h1>
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">2022</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-bold text-gray-700">Pacebar</h5>
                </a>
              </Link>
              <p>
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
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">2022</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="font-bold text-gray-700">TreatDAO</h5>
                  <p className="mb-2 text-blue-500">https://treatdao.com</p>
                </a>
              </Link>
              <p>
                I designed and led the development team for a community platform
                that allows creators to sell content as NFTS. In this project I
                designed the UI and worked heavily on the frontend which we
                built in Next.js. I also led in the design of the social
                architecture of the platform, things including recommendations,
                determing the suitable network effects and ensuring the privacy
                of both creators and fans is protected. TreatDAO is a community
                platform that allows creators to sell both NSFW and SFW content
                directly to fans in the form of NFTs. It also allows users to
                subscribe to a creator profile(the OnlyFans style) so they can
                have access to all the content the creator shares.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">2022</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-bold text-gray-700">Shorty</h5>
                </a>
              </Link>
              <p>
                Shorty is a platform designed around URL shortening and privacy
                on the internet. It also allows users to share self-deleting
                notes, password protected URLs and analytics for all the urls
                and notes they share.Send your loved ones a private message.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <h1 className="mb-4 text-2xl font-bold text-gray-700">
          Work Experience
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">2022-now</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-bold text-gray-700">
                    IndieHacker at Pacebar
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">2021-now</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-bold text-gray-700">
                    Lead Engineer at TreatDAO
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">2021-2022</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-bold text-gray-700">
                    Product Designer at Pagka
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">2019-2021</div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-bold text-gray-700">
                    Product Designer at Techzim
                  </h5>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <h1 className="font-medium text-gray-700">Contact</h1>
      </div>
    </div>
  );
}
