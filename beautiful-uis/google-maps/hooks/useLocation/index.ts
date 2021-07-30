import { useState, useEffect } from "react";

import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({}).finally(() =>
        setLoading(false)
      );
      setLocation(location);
    })();
  }, []);

  return { location, error, loading };
};
export default useLocation;
