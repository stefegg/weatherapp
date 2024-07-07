import React from "react";
import { View, StyleSheet } from "react-native";
import UpcomingWeather from "../../src/screens/UpcomingWeather";
import { useGetWeather } from "../../src/hooks/useGetWeather";

const UpcomingTab = () => {
  const [weather] = useGetWeather();
  return (
    <View style={styles.container}>
      {weather && weather.list && (
        <UpcomingWeather weatherData={weather.list} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UpcomingTab;
