import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex flex-col justify-center py-12">
      <div className="py-8">
        <Image
          src={'/profile-pic.png'}
          alt={"Tatenda's profile picture"}
          width={128}
          height={128}
        />
      </div>
      <h1 className="text-3xl subpixel-antialiased font-medium tracking-tighter text-gray-800 dark:text-gray-200 lg:text-5xl">
        Hey there! I&#39;m Tatenda, a{' '}
        <span className="text-orange-600 dark:text-orange-400">
          Halfstack Developer
        </span>{' '}
        +{' '}
        <span className="text-red-500 dark:text-red-400">
          Blockchain Engineer{' '}
        </span>
        based in Harare, Zimbabwe
      </h1>
      <p className="py-4 mt-8 text-xl">
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
