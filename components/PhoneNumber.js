import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PhoneNumber = ({ phoneNumber }) => {
  return <Text style={styles.phoneNumber}>{phoneNumber}</Text>;
};

const styles = StyleSheet.create({
  phoneNumber: {
    flex: 1,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.black,
    textAlign: "left",
    opacity: 0.3,
    zIndex: 0,
  },
});

export default PhoneNumber;
