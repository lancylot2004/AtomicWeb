import '@/styles/globals.css'
import App, { AppContext, AppProps } from 'next/app';
import { fetchConfig, getConfig } from '@/helpers/config';

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    // Call the fetchConfig function to fetch the config data
    await fetchConfig();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    // Pass the config data as a prop to all pages and components
    return <Component {...pageProps} config={getConfig()} />;
  }
}

export default MyApp;
