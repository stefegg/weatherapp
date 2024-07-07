import React from "react";
import { View, StyleSheet } from "react-native";
import UpcomingWeather from "../../src/screens/UpcomingWeather";

const UpcomingTab = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UpcomingTab;
