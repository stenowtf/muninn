import { ThemeById } from "src/components/pages/theme-by-id";
import { render, screen } from "src/lib/test-utils";

describe("ThemeById", () => {
  it("renders the home link in the navigation bar", () => {
    render(<ThemeById id="1" />);

    const home = screen.getByRole("link", {
      name: /home/i,
    });

    expect(home).toBeInTheDocument();
  });

  it("renders the radio buttons in the navigation bar", () => {
    render(<ThemeById id="1" />);

    const radioGroup = screen.getByRole("radiogroup");
    const radios = screen.getAllByRole("radio");

    expect(radioGroup).toBeInTheDocument();
    expect(radios).toHaveLength(3);

    radios.forEach((radio) => {
      expect(radio).toBeInTheDocument();
      expect(radio).toHaveAccessibleName(/easy|normal|hard/i);
    });
  });

  it("renders the default 8 (plus the other 8) cards", () => {
    render(<ThemeById id="1" />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(16);
  });
});
