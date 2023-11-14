import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import MobileVerificationForm from "../components/MobileVerificationForm";
import FormContainer from "../components/FormContainer";
import Button1 from "../components/Button1";
import { Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const OTPActiveSuggestion = ({ oTPActiveSuggestioAccessi }) => {
  return (
    <View
      style={styles.otpActiveSuggestion}
      accessibilityViewIsModal={oTPActiveSuggestioAccessi}
    >
      <MobileVerificationForm
        prop="000000"
        resendCodeIn10s="Resend code in 10s"
      />
      <FormContainer />
      <View style={[styles.buttonContainer, styles.keyboardIphonePosition]}>
        <Button1 />
      </View>
      <View style={[styles.keyboardIphone, styles.keyboardIphonePosition]}>
        <View style={styles.fromMessagesParent}>
          <Text style={[styles.fromMessages, styles.textTypo]}>
            From Messages
          </Text>
          <Text style={[styles.text, styles.textTypo]}>314405</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardIphonePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.calloutRegular,
    letterSpacing: 0,
  },
  buttonContainer: {
    top: 389,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
  fromMessages: {
    fontSize: 13,
    lineHeight: 14,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.calloutRegular_size,
    lineHeight: 21,
  },
  fromMessagesParent: {
    alignItems: "center",
  },
  keyboardIphone: {
    top: 473,
    backgroundColor: Color.colorGray_200,
    justifyContent: "flex-end",
    paddingTop: Padding.p_5xs,
    paddingBottom: 4,
    alignItems: "center",
  },
  otpActiveSuggestion: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OTPActiveSuggestion;
