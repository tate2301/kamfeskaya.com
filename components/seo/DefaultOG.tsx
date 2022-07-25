import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
};

export default function MetaTags(props: SEOProps) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      <meta
        name="image"
        content={`/api/seo/og_image?type=${props.type}&title=${props.title}&description=${props.description}`}
      />
      <meta name="title" content={props.title} />
      <meta name="url" content={props.url} />
      <meta name="type" content={props.type} />
      <meta name="og:title" content={props.title} />
      <meta name="og:description" content={props.description} />
      <meta
        name="og:image"
        content={`/api/seo/og_image?type=${props.type}&title=${props.title}&description=${props.description}`}
      />
      <meta name="og:url" content={props.url} />
      <meta name="og:type" content={props.type} />
    </Head>
  );
}
