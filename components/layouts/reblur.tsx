import Head from 'next/head';

export default function EcosystemLayout({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div className={`block min-h-screen dark:bg-gray-900 w-screen`}>
      <Head>
        <title>{name} | Reblur</title>
      </Head>
      <div className="fixed z-0 w-screen h-screen ${bg}-bg" />
      <div className={`text-base`}>
        <div className="container max-w-5xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
