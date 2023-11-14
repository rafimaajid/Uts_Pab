import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SuccessfullyCompletedMake = ({ successfullyCompletedMake }) => {
  return (
    <Text style={styles.successfullyCompletedMake}>
      {successfullyCompletedMake}
    </Text>
  );
};

const styles = StyleSheet.create({
  successfullyCompletedMake: {
    position: "absolute",
    top: 0,
    left: 40,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.3,
    lineHeight: 18,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorGreen_100,
    textAlign: "left",
    width: 290,
  },
});

export default SuccessfullyCompletedMake;
