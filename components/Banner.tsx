export default function Banner() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-12">
      <h1 className="subpixel-antialiased font-bold leading-10 tracking-tighter text-gray-600 lg:text-7xl">
        Hey there! I&#39;m Tatenda, the{' '}
        <span className="text-orange-500">Halfstack Developer</span> +{' '}
        <span className="text-orange-500">Blockchain Engineer </span>based in{' '}
        Harare, Zimbabwe
      </h1>
      <p className="py-4 text-3xl font-medium lg:mt-8">
        I help startups and developers build revolutionary products that are
        easy to use. I am a big motorsport enthusiast, and will challenge you to
        a Kart race any day.
      </p>
    </div>
  );
}
