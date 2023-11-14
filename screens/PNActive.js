import * as React from "react";
import { StyleSheet, View } from "react-native";
import MobileNumberForm from "../components/MobileNumberForm";
import Button3 from "../components/Button3";
import { Border, Color, Padding } from "../GlobalStyles";

const PNActive = ({
  pNActiveAccessibilityView,
  pNActiveFocusable,
  pNActiveAccessible,
}) => {
  return (
    <View
      style={styles.pnActive}
      accessibilityViewIsModal={pNActiveAccessibilityView}
      focusable={pNActiveFocusable}
      accessible={pNActiveAccessible}
    >
      <MobileNumberForm />
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.buttonContainer, styles.homeIndicatorPosition]}>
        <Button3 buttonPosition="relative" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  shape: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 138,
    height: 5,
  },
  homeIndicator: {
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_2xl,
    paddingBottom: Padding.p_5xs,
  },
  buttonContainer: {
    top: 322,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
  pnActive: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PNActive;
