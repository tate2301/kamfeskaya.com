import Navbar from 'components/nav/Navbar';
import Head from 'next/head';

export default function EcosystemLayout({
  name,
  children,
  bg,
}: {
  name: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div className={`block min-h-screen dark:bg-gray-900 w-screen`}>
      <Head>
        <title>{name} | Engineering</title>
      </Head>
      <Navbar />
      <div
        style={{ zIndex: -10 }}
        className={`fixed z-0 w-screen top-0 left-0 h-screen ${bg}-bg`}
      />

      <div className={`text-base`}>
        <div className="container max-w-5xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
