import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&units=imperial`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, long]);
  return [weather, loading, error];
};
