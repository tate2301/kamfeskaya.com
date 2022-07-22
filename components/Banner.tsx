import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex flex-col justify-center py-24">
      <div className="py-8">
        <Image
          src={'/profile-pic.png'}
          alt={"Tatenda's profile picture"}
          width={128}
          height={128}
        />
      </div>
      <h1 className="text-4xl subpixel-antialiased font-bold tracking-tighter text-gray-600 lg:text-7xl">
        Hey there! I&#39;m Tatenda, the{' '}
        <span className="text-orange-500">Halfstack Developer</span> +{' '}
        <span className="text-red-500">Blockchain Engineer </span>based in{' '}
        Harare, Zimbabwe
      </h1>
      <p className="py-4 mt-8 text-2xl lg:text-3xl">
        I help startups and developers build revolutionary products that are
        easy to use. I am a big motorsport enthusiast, and will challenge you to
        a Kart race any day 🏎 🏎 🏎
      </p>
    </div>
  );
}
