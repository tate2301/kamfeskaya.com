import { Banner } from 'components';
import Head from 'next/head';

export default function Main() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-blend-normal">
      <Head>
        <title>Tatenda. C. Chinyamakobvu - Senior Fullstack Engineer</title>
      </Head>
      <div className="main-bg">
        <div className="container max-w-5xl px-4 pt-12 mx-auto">
          <Banner />
        </div>
      </div>
    </div>
  );
}
