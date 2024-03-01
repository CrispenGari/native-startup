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
    const { getByText } = render(<Comments />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });
    const text = getByText("first comment");
    expect(text).toBeOnTheScreen();
  });

  it("displays no comment", async () => {
    // @ts-ignore
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const { getByText } = render(<Comments />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const catFactElement = getByText("No Comments!");
    expect(catFactElement).toBeOnTheScreen();
  });

  it("displays no comments due to loading", async () => {
    // @ts-ignore
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
    const { getByText } = render(<Comments />);
    const catFactElement = getByText("Loading...");
    expect(catFactElement).toBeOnTheScreen();
  });
});
