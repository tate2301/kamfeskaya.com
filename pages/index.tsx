import { Banner, Bio } from 'components';
import Footer from 'components/nav/Footer';
import Navbar from 'components/nav/Navbar';
import Head from 'next/head';

export default function Main() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-blend-normal">
      <Head>
        <title>Tatenda. C. Chinyamakobvu - Senior Fullstack Engineer</title>
      </Head>
      <div className="snip-bg">
        <Navbar />
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <Banner />
          <Bio />
        </div>
        <Footer />
      </div>
    </div>
  );
}
