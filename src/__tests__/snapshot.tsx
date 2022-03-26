import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "src/components/pages/home";
import { ThemeById } from "src/components/pages/theme-by-id";
import { gameSeries } from "src/lib/fixtures/game-series";

const queryClient = new QueryClient();

it("renders Home unchanged", () => {
  const { container } = render(
    <QueryClientProvider client={queryClient}>
      <Home getGameSeries={gameSeries} />
    </QueryClientProvider>
  );

  expect(container).toMatchSnapshot();
});

it("renders ThemeById unchanged", () => {
  const { container } = render(
    <QueryClientProvider client={queryClient}>
      <ThemeById id="1" />
    </QueryClientProvider>
  );

  expect(container).toMatchSnapshot();
});
