import { Banner } from 'components';
import Navbar from 'components/nav/Navbar';
import Head from 'next/head';

export default function Main() {
  return (
    <div className="dark:bg-gray-900 dark:text-slate-100">
      <Head>
        <title>Tatenda. C. Chinyamakobvu - Senior Fullstack Engineer</title>
      </Head>
      <div className="main-bg">
        <Navbar />
        <div className="container max-w-3xl py-12 mx-auto">
          <Banner />
        </div>
      </div>
    </div>
  );
}
