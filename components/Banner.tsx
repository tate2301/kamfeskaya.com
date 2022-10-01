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
      <p className="pt-8 pb-2 text-sm font-medium text-orange-600">
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
      <div className="subpixel-antialiased tracking-tighter ">
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
        <h1 className="text-xl subpixel-antialiased font-medium text-gray-800 dark:text-gray-200">
          What I have been working on
        </h1>
        <div className="py-4 text-base divide-y">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full btn" />
            <p>
              <Link href={'/engineering/pacebar'}>
                <a className="font-medium text-slate-800">Pacebar</a>
              </Link>{' '}
              - Track your goals in public and write your story with the fans.
            </p>
          </div>
        </div>
        <div className="py-4 text-base divide-y divide-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500">
              <p className="text-xl">👀</p>
            </div>
            <p>
              <Link href={'/engineering/telescope'}>
                <a className="font-medium text-slate-800">Telescope</a>
              </Link>{' '}
              - Forecast and optimize your SaaS pricing models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
