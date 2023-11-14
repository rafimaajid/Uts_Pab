import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Componentcode = ({ prop }) => {
  return <Text style={styles.text}>{prop}</Text>;
};

const styles = StyleSheet.create({
  text: {
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

export default Componentcode;
