import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RefundUnderProcess = ({ refundUnderProcess }) => {
  return <Text style={styles.refundUnderProcess}>{refundUnderProcess}</Text>;
};

const styles = StyleSheet.create({
  refundUnderProcess: {
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
  },
});

export default RefundUnderProcess;
