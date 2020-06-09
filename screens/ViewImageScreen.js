import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MyVideoScreen from "./MyVideoScreen";

function ViewImageScreen({ navigation }) {
  return (
    <View>
      <Text>Hello no image here.</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <MyVideoScreen />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ViewImageScreen;
