import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LoremIpsumDolor1 = ({ loremIpsumDolorSitAmetEtA }) => {
  return (
    <Text style={styles.loremIpsumDolor}>{loremIpsumDolorSitAmetEtA}</Text>
  );
};

const styles = StyleSheet.create({
  loremIpsumDolor: {
    position: "absolute",
    top: 20,
    left: 40,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    lineHeight: 16,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 288,
    height: 56,
    opacity: 0.8,
  },
});

export default LoremIpsumDolor1;
