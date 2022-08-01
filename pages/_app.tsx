import { AppProps /* , AppContext */ } from 'next/app';

import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-lg text-gray-600 lg:text-xl ">
      <Component {...pageProps} />
    </div>
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
