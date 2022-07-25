type TwitterOGProps = {
  description: string;
  url: string;
  image: string;
  title: string;
  twitter: string;
};

const TwitterOG = (props: TwitterOGProps) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={'kamfeskaya.com'} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:creator" content={props.twitter} />
      <meta property="og:url" content={props.url} />
      <meta name="twitter:image" content={props.image} />
    </>
  );
};

export default TwitterOG;
