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
    <div className="flex flex-col gap-6 p-4 md:flex-row md:gap-16">
      <div
        className="flex-1 w-full bg-gray-200 bg-blend-normal animate-pulse rounded-3xl md:h-128 dark:bg-gray-700"
        style={{
          backgroundImage: `url('${props.thumbnail.responsiveImage.webpSrcSet}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="w-full py-4 md:w-1/3">
        <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          {props.title}
        </h3>
        <p className="py-8 text-gray-500 dark:text-gray-300">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
