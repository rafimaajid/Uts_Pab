import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border } from "../GlobalStyles";

const RectangleComponent1 = ({ showRectangleLinearGradient }) => {
  return (
    showRectangleLinearGradient && (
      <LinearGradient
        style={styles.wrapper}
        locations={[0.28, 0.65, 1]}
        colors={["#3aa601", "#4fbe00", "#64e100"]}
      >
        <Pressable style={styles.pressable} />
      </LinearGradient>
    )
  );
};

const styles = StyleSheet.create({
  pressable: {
    borderRadius: Border.br_21xl,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  wrapper: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 320,
    height: 46,
  },
});

export default RectangleComponent1;
