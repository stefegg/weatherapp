import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "../../src/screens/CurrentWeather";
import { useGetWeather } from "../../src/hooks/useGetWeather";

const App = () => {
  const [weather] = useGetWeather();
  return (
    <View style={styles.container}>
      {weather && weather.list && (
        <CurrentWeather weatherData={weather.list[0]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
