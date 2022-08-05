import Image from 'next/image';
import { useEffect } from 'react';
import { annotate } from 'rough-notation';

export default function Banner() {
  useEffect(() => {
    annotate(document?.querySelector('#ui')!, {
      type: 'highlight',
      color: '#fbbf2430',
    }).show();
    annotate(document?.querySelector('#revolution')!, {
      type: 'circle',
      color: '#f97316',
    }).show();
    annotate(document?.querySelector('#world')!, {
      type: 'underline',
      color: '#f97316',
    }).show();
  }, []);
  return (
    <div className="flex flex-col justify-center py-24 mt-24">
      <div className="py-8">
        <Image
          src={'/profile-pic.png'}
          alt={"Tatenda's profile picture"}
          width={128}
          height={128}
        />
      </div>
      <h1 className="text-4xl subpixel-antialiased font-bold tracking-tighter text-gray-600 dark:text-gray-200 lg:text-7xl">
        Hey there! I&#39;m Tatenda, a{' '}
        <span className="text-orange-500 dark:text-orange-400">
          Halfstack Developer
        </span>{' '}
        +{' '}
        <span className="text-red-500 dark:text-red-400">
          Blockchain Engineer{' '}
        </span>
        based in Harare, Zimbabwe
      </h1>
      <p className="py-4 mt-8 text-2xl lg:text-3xl">
        I help startups and developers{' '}
        <span id="revolution">build revolutionary products</span> that are easy
        to use. I am constantly building new products, experimenting on web
        development stuff, learning new stuff,{' '}
        <span id="ui">designing good interfaces</span>, hacking into some of the
        most secure systems in the world (just kidding), trying to make the{' '}
        <span id="world">world suck less with my work</span>.
      </p>
    </div>
  );
}
