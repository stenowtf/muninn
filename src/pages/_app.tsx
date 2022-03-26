import "@fontsource/solway/300.css";
import "@fontsource/solway/400.css";
import "@fontsource/solway/500.css";
import "@fontsource/solway/700.css";
import "@fontsource/solway/800.css";
import "src/styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { t } = useTranslation("messages");

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>{t("title")}</title>
          <meta name="description" content={t("metaDescription")} />
          <link rel="icon" href="https://fav.farm/💡" />
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
