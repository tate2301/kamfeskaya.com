import EcosystemNavbar from 'components/ecosystem/navbar';
import Head from 'next/head';

export default function EcosystemLayout({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`block min-h-screen ${name}-bg`}>
      <Head>
        <title>{name} | Kamfeskaya Ecosystem</title>
      </Head>
      <EcosystemNavbar name={name} />
      <div className="text-sm">{children}</div>
    </div>
  );
}
