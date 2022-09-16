import { AppProps /* , AppContext */ } from 'next/app';

import 'styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from 'lib/rainbowkit';
import { useEffect, useRef } from 'react';
// @ts-ignore
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/router';

import 'focus-visible';
import Footer from 'components/nav/Footer';
import Navbar from 'components/nav/Navbar';

const MIXPANEL_KEY = process.env.MIXPANEL_KEY;

function usePrevious(value: string | undefined) {
  let ref = useRef();

  useEffect(() => {
    // @ts-ignore
    ref.current = value;
  }, [value]);

  return ref.current;
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let previousPathname = usePrevious(router.pathname);

  useEffect(() => {
    mixpanel.init(MIXPANEL_KEY, {
      loaded: function () {
        mixpanel.track('Page Visit: ' + router.pathname);
      },
    });
  }, [router]);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        theme={darkTheme()}
        chains={chains}
      >
        <Navbar />
        <div className="h-auto text-base text-gray-500">
          <Component {...pageProps} previousPathname={previousPathname} />
        </div>
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
