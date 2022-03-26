import type { InferGetServerSidePropsType, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const HomePage: NextPage<HomePageProps> = () => {
  return <p>aaa</p>;
};

export default HomePage;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
