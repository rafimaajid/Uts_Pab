import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LoremIpsumDolor = () => {
  return (
    <Text style={styles.loremIpsumDolor}>
      Lorem ipsum dolor sit amet. Et architecto sequi sed aperiam autem ea
      consequuntur vero ut omnis sint qui voluptate quidem in deserunt
      recusandae.
    </Text>
  );
};

const styles = StyleSheet.create({
  loremIpsumDolor: {
    position: "absolute",
    top: 24,
    left: 40,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    lineHeight: 16,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 290,
    height: 56,
    opacity: 0.8,
  },
});

export default LoremIpsumDolor;
