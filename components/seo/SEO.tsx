import Head from 'next/head';

export default function SEO({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} - Kamfeskaya</title>
    </Head>
  );
}
