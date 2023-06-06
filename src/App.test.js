import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("displays heading text from api call", async () => {
    render(<App />);
    const h1Element = await screen.findByText("Hello World!", {}, { timeout: 100 });
    expect(h1Element).toBeInTheDocument();
  });
});
