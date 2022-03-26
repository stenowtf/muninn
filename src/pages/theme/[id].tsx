import type { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { dehydrate, QueryClient } from "react-query";
import { Layout } from "src/components/organisms/layout";
import { ThemeById } from "src/components/pages/theme-by-id";
import { getTheme } from "src/lib/get-theme";
import { setThemeSelector } from "src/store/selectors";
import { useStore } from "src/store/useStore";

type GameSeriesPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const GameSeriesPage: NextPage<GameSeriesPageProps> = () => {
  const { query } = useRouter();

  const setTheme = useStore(setThemeSelector);

  useEffect(() => {
    setTheme(getTheme(query.id as string));
  }, [query.id, setTheme]);

  return (
    <Layout>
      <ThemeById id={query.id as string} />
    </Layout>
  );
};

export default GameSeriesPage;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  return { props: { dehydratedState: dehydrate(queryClient) } };
};
