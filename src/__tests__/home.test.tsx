import { Home } from "src/components/pages/home";
import { gameSeries } from "src/lib/fixtures/game-series";
import { render, screen } from "src/lib/test-utils";

describe("Home", () => {
  it("renders the description and the instructions", () => {
    render(<Home getGameSeries={gameSeries} />);

    const description = screen.getByRole("heading", {
      name: /heroDescription/i,
    });

    const instructions = screen.getByRole("heading", {
      name: /heroInstructions/i,
    });

    expect(description).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
  });

  it("renders the game series buttons", () => {
    render(<Home getGameSeries={gameSeries} />);

    gameSeries.forEach((gameSeries) => {
      const button = screen.getByText(gameSeries.name);

      expect(button).toBeInTheDocument();
    });
  });
});
