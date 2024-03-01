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
