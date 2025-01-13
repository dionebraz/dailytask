import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated, Text, Easing, StatusBar, ImageBackground } from "react-native";
import COLORS from "./theme";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1 }} source={require("../assets/images/feliz-natal.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});