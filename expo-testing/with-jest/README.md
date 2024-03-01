### Unit Testing

In this one we are going to learn how to test our expo components/app with jest and [`jest-expo`](https://docs.expo.dev/develop/unit-testing/) in a typescript project. First things first we need to install teh following packages:

```shell
npx expo install jest-expo jest
# for ts
yarn add -D @types/jest

# then

yarn add react-test-renderer && yarn add -D @types/react-test-renderer
```

After that we are going to open the `package.json` file and add the following `script`

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

If you want to hot-reload you can change the script to:

```json
{
  "scripts": {
    "test": "jest --watch"
  }
}
```

We are also going to add the following config for `jest` in `package.json`

```json
{
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ]
  }
}
```

Let's create our first test. We are going to create a file called `App.test.tsx` and add the following test code in it:

```tsx
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import App from "./App";

describe("<App/>", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree).not.toBeNull();
    expect(tree.children?.length).toBe(1);
  });
});
```

Let's also do a snapshot test

```tsx
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import App from "./App";

describe("<App/>", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree).not.toBeNull();
    expect(tree.children?.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

### Code Coverage Report

Next we are going to configure for the `code-coverage-report`. First we will open the `package.json` and add the following in the `jest` config:

```json
{
  "jest": {
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js,jsx,tsx,ts}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/babel.config.ts",
      "!**/jest.setup.js",
      "!**/jest.setup.ts"
    ]
  }
}
```

When we run `yarn test` we should be able to see the coverage report matrix as well.

### Our first Component Test

We are going to use [`@testing-library/react-native`](https://testing-library.com/docs/react-native-testing-library/intro/) this time around. First we need to install it by running the following command:

```shell
yarn add --dev @testing-library/react-native

```

And then we will change our `jest` configuration to:

```json
{
  "jest": {
    "preset": "@testing-library/react-native",
    "setupFilesAfterEnv": ["./jest-setup.ts"],
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ],
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js,jsx,tsx,ts}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/babel.config.ts",
      "!**/jest.setup.js",
      "!**/jest.setup.ts"
    ]
  }
}
```

In the `jest-setup.ts` file we will add the following code to it:

```ts
import "@testing-library/react-native/extend-expect";
```

Next we are going to create a component called `Card` in the components folder and populate it with the following code.

```tsx
import { View, Text } from "react-native";
import React from "react";

interface Props {
  name: string;
  email: string;
}
const Card: React.FunctionComponent<Props> = ({ name, email }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default Card;
```

Here is what we will have in our `Card.test.tsx`

```tsx
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
```

Let's have another example where we are going to test a component with `user` interaction. We are going to create a component called `Counter`. Here is how the component will look like.

```tsx
import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(value);
  const [amount, setAmount] = React.useState(0);
  return (
    <View>
      <Text testID="count">{count}</Text>
      <TextInput
        value={amount.toString()}
        onChangeText={(text) => setAmount(parseInt(text))}
        placeholder="Amount"
      />
      <Button title="Increment" onPress={() => setCount((s) => s + amount)} />
      <Button title="Decrement" onPress={() => setCount((s) => s - amount)} />
    </View>
  );
};
export default Counter;
```

Here are the `test` for this component located in the `Counter.test.tsx`

```tsx
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
```

### Mocking functions

Next we are going to create a component that will take a `onPress` prop to press a button. We are going to create a component called `Like`

```tsx
import { View, Text, Button } from "react-native";
import React from "react";
const Like = ({ onPress }: { onPress: () => void }) => {
  return (
    <View>
      <Button title="Like" onPress={onPress} />
    </View>
  );
};
export default Like;
```

In our `Like.spec.tsx` we are going to have the following code:

```tsx
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
```

### Mocking APIs

We are going to create a component that is called `Comments` and we are going to add the following code in it.

```tsx
import { Text } from "react-native";
import React from "react";

const Comments = () => {
  const [data, setData] = React.useState<any>(undefined);
  React.useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (data === undefined) {
    return <Text>Loading...</Text>;
  }
  return data.length > 0 ? (
    <Text>{data[0].text}</Text>
  ) : (
    <Text>No Comments!</Text>
  );
};

export default Comments;
```

In the `Comments.spec.tsx` file we are going to add the following code in it:

```tsx
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
```

### CI with github actions

We are going to create a `with-jest.yml` file in the `.github/workflows` folder and add the following:

```yml
name: Test React Native App

on:
  pull_request:
  workflow_dispatch:
  push:
    branches: [main]

jobs:
  unit-test:
    name: Run Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 18
      - run: yarn install
      - run: yarn test
```

We are going to change our `package.json` scripts to:

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "dev:test": "jest --watch",
    "test": "jest"
  }
}
```

### Refs

1. [unit-testing](https://docs.expo.dev/develop/unit-testing/)
2. [jest-expo](https://www.npmjs.com/package/jest-expo)
3. [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
4. [Jest Extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
