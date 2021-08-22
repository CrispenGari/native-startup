import React from "react";
const url: string =
  "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20";
import axios from "axios";

export interface SliderI {
  image: string;
  id: string;
}
export const useFetchData = () => {
  const [data, setData] = React.useState<SliderI[]>([]);
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      if (data.photos) {
        setData(
          data.photos
            .map((photo: any, index: number) => ({
              image: photo.src.portrait,
              id: index.toString(),
            }))
            .sort((_: any) => Math.random() - 0.5)
          // Randomly shuffle the array
        );
      }
    })();
  }, []);

  if (data.length === 0) {
    return {
      loading: true,
      data: null,
    };
  } else {
    return {
      loading: false,
      data,
    };
  }
};
