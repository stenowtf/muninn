import "@fontsource/solway/300.css";
import "@fontsource/solway/400.css";
import "@fontsource/solway/500.css";
import "@fontsource/solway/700.css";
import "@fontsource/solway/800.css";
import "src/styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
