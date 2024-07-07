import React from "react";
import { View, StyleSheet } from "react-native";
import City from "../../src/screens/City";
import { useGetWeather } from "../../src/hooks/useGetWeather";

const CityTab = () => {
  const [weather] = useGetWeather();
  return (
    <View style={styles.container}>
      {weather && weather.list && <City weatherData={weather.city} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CityTab;
