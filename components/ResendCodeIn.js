import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ResendCodeIn = ({ resendCodeIn10s }) => {
  return <Text style={styles.resendCodeIn}>{resendCodeIn10s}</Text>;
};

const styles = StyleSheet.create({
  resendCodeIn: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.instrumentSansMedium,
    color: Color.black,
    textAlign: "left",
    opacity: 0.6,
  },
});

export default ResendCodeIn;
