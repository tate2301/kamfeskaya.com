import Footer from 'components/nav/Footer';
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
  bg = bg ? bg : name;

  return (
    <div className={`block min-h-screen dark:bg-gray-900 w-screen`}>
      <Head>
        <title>{name} | Reblur</title>
      </Head>
      <div className={`text-sm ${bg}-bg`}>
        <Navbar />

        <div className="container max-w-5xl px-4 py-12 mx-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
