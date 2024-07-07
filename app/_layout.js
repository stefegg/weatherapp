import React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useGetWeather } from "../src/hooks/useGetWeather";

const Layout = () => {
  const [weather, loading, error] = useGetWeather();
  return (
    <>
      {!loading && weather && weather.list ? (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size={"large"} color={"blue"} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Layout;
