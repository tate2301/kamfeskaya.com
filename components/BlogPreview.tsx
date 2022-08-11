import Underline from './media/Underline';

export default function BlogPreview() {
  return (
    <div className="py-12">
      <div className=" whitespace-nowrap">
        <h2 className="relative text-4xl font-medium text-gray-700 z-4 lg:text-5xl">
          School of Thought
        </h2>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Underline />
        </div>
      </div>
      <p className="mt-2">
        Facts are contextual, so bring a bucket of salt, also my IQ is 98.
      </p>
    </div>
  );
}
