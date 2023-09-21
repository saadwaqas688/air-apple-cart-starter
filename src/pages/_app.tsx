import '@/styles/globals.scss';
import { theme } from '@/theme/theme';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      {' '}
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
