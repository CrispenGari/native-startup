import { render, screen, waitFor } from "@testing-library/react-native";
import Comments from "./Comments";

describe("<Comments/>", () => {
  it("renders correctly", () => {
    render(<Comments />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("displays comment", async () => {
    // @ts-ignore
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { text: "first comment" },
            { text: "second comment" },
          ]),
      })
    );
    render(<Comments />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });
    const text = screen.getByText("first comment");
    expect(text).toBeOnTheScreen();
  });

  it("displays no comment", async () => {
    // @ts-ignore
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<Comments />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const text = screen.getByText("No Comments!");
    expect(text).toBeOnTheScreen();
  });

  it("displays no comments due to loading", async () => {
    render(<Comments />);
    const text = await screen.findByText("Loading...");
    expect(text).toBeOnTheScreen();
  });
});
