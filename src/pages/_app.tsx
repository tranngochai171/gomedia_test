import '@/styles/globals.css';
import Head from 'next/head';
import commonConstants from 'constants/common.constant';
import { NextPage, NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material';
import { themeMaterial, themes } from 'theme';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const handleError = (error: any) => {
  // Fallback Error Catch If we don't define onError when using useQuery/useMutate
  toast.error(
    error?.response?.data?.messageerror?.message ??
      commonConstants.SOMETHING_WENT_WRONG,
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: handleError,
    },
    mutations: {
      retry: false,
      onError: handleError,
    },
  },
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <>
      <Head>
        <title>GoMedia Test</title>
      </Head>
      <NextNProgress
        height={6}
        color={themes.light.colorRoyalHeath}
        options={{ easing: 'ease', speed: 500 }}
      />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={themeMaterial}>
              {getLayout(<Component {...pageProps} />)}
              <ToastContainer />
            </ThemeProvider>
          </PersistGate>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
