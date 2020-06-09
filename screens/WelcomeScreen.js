import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/splash.png")}
    >
      <View style={styles.logo_tagline}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text>This is a tutorial!</Text>
      </View>
      <View style={styles.loginButton}>
        <Button
          title="Login"
          onPress={() => navigation.navigate("ViewImageScreen")}
        />
      </View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo_tagline: {
    top: 25,
    left: 10,
    position: "absolute",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default WelcomeScreen;
