import Underline from './media/Underline';

export default function PodcastPreview() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-medium text-gray-700 lg:text-5xl">
        What about hearing them?
      </h2>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <Underline />
      </div>
      <p className="mt-2">
        Not the content, listen to that beautiful voice! 🥰
      </p>
    </div>
  );
}
