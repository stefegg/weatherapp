import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
      }}
    >
      <Tabs.Screen
        name={"index"}
        options={{
          title: "Current",
          tabBarIcon: ({ color }) => (
            <Feather name={"droplet"} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={"upcoming"}
        options={{
          title: "Upcoming",
          tabBarIcon: ({ color }) => (
            <Feather name={"clock"} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={"city"}
        options={{
          title: "City",
          tabBarIcon: ({ color }) => (
            <Feather name={"home"} size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
