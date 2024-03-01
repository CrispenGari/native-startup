import { render, screen, fireEvent } from "@testing-library/react-native";
import Counter from "./Counter";

describe("<Counter/>", () => {
  it("renders correctly with initial value of 10", () => {
    render(<Counter value={10} />);
    const text = screen.getByText("10");
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });
    const textBox = screen.getByPlaceholderText(/amount/i);
    expect(incrementBtn).toBeOnTheScreen();
    expect(textBox).toBeOnTheScreen();
    expect(decrementBtn).toBeOnTheScreen();
    expect(text).toBeOnTheScreen();

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("increments by 5", async () => {
    render(<Counter value={10} />);
    const incrementBtn = screen.getByRole("button", {
      name: /increment/i,
    });
    const textBox = screen.getByPlaceholderText(/amount/i);
    fireEvent.changeText(textBox, "5");
    fireEvent.press(incrementBtn);
    const text = await screen.findByTestId("count");
    expect(text).toHaveTextContent("15");
  });
  it("decrement by 5", () => {
    render(<Counter value={10} />);
    const btn = screen.getByRole("button", {
      name: /decrement/i,
    });
    const textBox = screen.getByPlaceholderText(/amount/i);
    fireEvent.changeText(textBox, "5");
    fireEvent.press(btn);
    const text = screen.getByTestId("count");
    expect(text).toHaveTextContent("5");
  });
});
