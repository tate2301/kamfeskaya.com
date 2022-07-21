import Image from 'next/image';

export default function Bio() {
  return (
    <div className="grid grid-cols-4 py-12 mb-12 lg:mb-12">
      <div className="col-span-4 lg:col-span-1">
        <h3 className="text-3xl font-bold">Meet and Greet</h3>
        <p className="mt-2">Nice to meet you too, kind Earthling.</p>
      </div>
      <div className="col-span-4 lg:col-span-3">
        <p className="py-2">
          I wanted to say a few words on our mission, let us see if that
          resonates with you!
        </p>{' '}
        <p className="py-2">
          We help teams work more thoughtfully. We started by fixing the way
          they shared knowledge, and built{' '}
          <span className="font-medium">
            the simplest possible tool making all knowledge accessible, by
            default, in teams.
          </span>{' '}
        </p>
        <p className="py-2">
          We started at Hack Week at Square in 2013 and since then released
          hundreds of iterations, have been backed by outstanding partners like
          YCombinator, Index or Spark, and most importantly improved the way
          thousands of teams work everyday. We work remotely, perpetually
          challenge how we collaborate and we put great care and passion in what
        </p>
        we do.
        <p className="py-2">
          We’re looking for the brightest folks to join us:{' '}
          <span className="font-bold">
            You who deeply care about what you do, how you work, thrive for
            simplicity and care about good design
          </span>{' '}
          If that resonates and you think you can bring us as much as we can
          bring you, we are excited to hear from you!
        </p>
        <div className="py-4 mt-4">
          <Image
            width={280}
            height={124}
            src="/signature.png"
            alt="Signature"
          />
          <p className="py-4 text-sm text-gray-500">
            Tatenda Christopher Chinyamakobvu
            <br />
            <span className="font-medium">Halfstack Developer</span>
          </p>
        </div>
      </div>
    </div>
  );
}
