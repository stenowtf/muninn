import type { InferGetServerSidePropsType, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { Error } from "src/components/atoms/error";
import { Layout } from "src/components/organisms/layout";
import { Home } from "src/components/pages/home";
import {
  getGameSeries,
  useGetGameSeriesQuery,
} from "src/hooks/use-get-game-series-query";

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const HomePage: NextPage<HomePageProps> = () => {
  const { data, error } = useGetGameSeriesQuery({});

  if (error) {
    return <Error />;
  }

  return <Layout>{data && <Home getGameSeries={data.getGameSeries} />}</Layout>;
};

export default HomePage;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("gameSeries", () => getGameSeries({}));

  return { props: { dehydratedState: dehydrate(queryClient) } };
};
