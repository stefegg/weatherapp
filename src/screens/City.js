import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populatitonText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;
  const { name, country, population, sunrise, sunset, timezone } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/images/city-background.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText={`Population: ${population}`}
            bodyTextStyles={populatitonText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText={moment(sunrise * 1000)
              .utcOffset(timezone / 60)
              .format("h:mm a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText={moment(sunset * 1000)
              .utcOffset(timezone / 60)
              .format("h:mm a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "indianred",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populatitonText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
