import Underline from 'components/media/Underline';

export default function ProjectsPreview() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-gray-700 lg:text-5xl">
        Talk is cheap
      </h2>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <Underline />
      </div>
      <p className="mt-2">Here is a few things I am proud to have worked on!</p>
    </div>
  );
}
