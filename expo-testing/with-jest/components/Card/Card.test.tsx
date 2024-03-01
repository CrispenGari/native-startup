import { render, screen } from "@testing-library/react-native";
import Card from "./Card";

describe("<Card/>", () => {
  it("renders correctly", () => {
    render(<Card email="jonhdoe@gmail.com" name="John Doe" />);
    const one = screen.getByText("jonhdoe@gmail.com");
    expect(one).toBeTruthy();
    const two = screen.getByText("John Doe");
    expect(two).toBeTruthy();
  });
});
