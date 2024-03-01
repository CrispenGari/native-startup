import { render, screen, fireEvent } from "@testing-library/react-native";
import Like from "./Like";

describe("<Like/>", () => {
  it("renders correctly.", () => {
    const onPress = jest.fn();
    render(<Like onPress={onPress} />);
    const btn = screen.getByRole("button", { name: /like/i });
    expect(btn).toBeOnTheScreen();
    expect(screen.toJSON()).toMatchSnapshot();
  });
  it("onPress has been triggered.", () => {
    const onPress = jest.fn();
    render(<Like onPress={onPress} />);
    const btn = screen.getByRole("button", { name: /like/i });
    fireEvent.press(btn);
    expect(onPress).toHaveBeenCalled();
  });
});
