import EcosystemNavbar from 'components/ecosystem/navbar';
import Footer from 'components/nav/Footer';
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
    <div className={`block min-h-screen dark:bg-gray-900 `}>
      <Head>
        <title>{name} | Kamfeskaya Ecosystem</title>
      </Head>
      <div className={`text-sm ${bg}-bg`}>
        <div className="container mx-auto">
          <EcosystemNavbar name={name} />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
