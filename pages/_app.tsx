import { AppProps /* , AppContext */ } from 'next/app';

import 'styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from 'lib/rainbowkit';
import { useEffect } from 'react';
// @ts-ignore
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/router';

const MIXPANEL_KEY = process.env.MIXPANEL_KEY;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    mixpanel.init(MIXPANEL_KEY, { debug: true });
    mixpanel.track('Page Visit: ' + router.pathname);
  }, []);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        theme={darkTheme()}
        chains={chains}
      >
        <div className="text-lg text-gray-600 lg:text-xl ">
          <Component {...pageProps} />
        </div>
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
