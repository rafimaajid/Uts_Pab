import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import MobileVerificationForm from "../components/MobileVerificationForm";
import { useNavigation } from "@react-navigation/native";
import Button2 from "../components/Button2";
import { Border, Color, Padding } from "../GlobalStyles";

const OTPActiveKeyboardClosed = ({ oTPActiveKeyboardAccessib }) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.otpActiveKeyboardClosed}
      accessibilityViewIsModal={oTPActiveKeyboardAccessib}
    >
      <MobileVerificationForm
        prop="000000"
        resendCodeIn10s="Resend code in 10s"
      />
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.shape} />
      </View>
      <Pressable
        style={[styles.buttonContainer, styles.homeIndicatorPosition]}
        onPress={() => navigation.navigate("OTPActiveSuggestion")}
      >
        <Button2 buttonAccessibilityLabel="True" />
      </Pressable>
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
    top: 694,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
  otpActiveKeyboardClosed: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OTPActiveKeyboardClosed;
