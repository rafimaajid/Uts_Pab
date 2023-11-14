import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FormContainer1 = () => {
  return (
    <View style={styles.logo}>
      <Image
        style={[styles.logoChild, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={styles.logoItem}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={styles.logoInner}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        source={require("../assets/polygon-2.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Text style={styles.amhealth}>AmHealth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    left: 20,
    position: "absolute",
  },
  logoChild: {
    top: 8,
    width: 27,
    height: 54,
  },
  logoItem: {
    top: 21,
    left: 7,
    width: 54,
    height: 27,
    position: "absolute",
  },
  logoInner: {
    top: 18,
    left: 21,
    width: 26,
    height: 26,
    position: "absolute",
  },
  polygonIcon: {
    top: 28,
    left: 30,
    width: 10,
    height: 10,
    position: "absolute",
  },
  lineIcon: {
    top: 34,
    width: 12,
    height: 15,
  },
  arrowIcon: {
    top: 35,
    left: -1,
    width: 71,
    height: 51,
    position: "absolute",
  },
  amhealth: {
    top: 0,
    left: 82,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.martelBold,
    color: Color.colorDarkgreen,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 232,
    height: 75,
    position: "absolute",
  },
  logo: {
    top: 56,
    left: 61,
    width: 314,
    height: 85,
    position: "absolute",
  },
});

export default FormContainer1;
