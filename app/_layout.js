import React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useGetWeather } from "../src/hooks/useGetWeather";
import ErrorItem from "../src/components/ErrorItem";

const Layout = () => {
  const [weather, loading, error] = useGetWeather();
  if (weather && weather.list && !loading) {
    return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    );
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Layout;
