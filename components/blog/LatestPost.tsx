/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
export default function LatestPost(props: {
  title: string;
  subtitle: string;
  thumbnail: {
    responsiveImage: any;
  };
}) {
  return (
    <div className="flex flex-col gap-8 p-4 lg:gap-16 md:flex-row">
      <div
        className="h-64 bg-gray-200 md:w-full md:flex-1 bg-blend-normal rounded-3xl lg:h-96 dark:bg-gray-700"
        style={{
          backgroundImage: `url('${props.thumbnail.responsiveImage.webpSrcSet}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="w-full py-4 md:w-1/3">
        <h3 className="text-4xl font-medium text-slate-800 dark:text-slate-100">
          {props.title}
        </h3>
        <p className="py-8 text-slate-500 dark:text-slate-300">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
