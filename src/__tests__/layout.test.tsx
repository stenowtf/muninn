import { Layout } from "src/components/organisms/layout";
import { HOME_PATH } from "src/lib/routes";
import { render, screen } from "src/lib/test-utils";

describe("Layout", () => {
  it("renders the title with the link back to home", () => {
    render(<Layout />);

    const title = screen.getByRole("link", {
      name: /title/i,
    });

    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("href", HOME_PATH);
  });
});
