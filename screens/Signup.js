import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import FormContainer1 from "../components/FormContainer1";
import RectangleComponent from "../components/RectangleComponent";
import { useNavigation } from "@react-navigation/native";
import RectangleComponent1 from "../components/RectangleComponent1";
import PhoneNumber from "../components/PhoneNumber";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Signup = ({ signupAccessibilityViewIs = true }) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.signup}
      accessibilityViewIsModal={signupAccessibilityViewIs}
    >
      <View style={[styles.homeIndicator, styles.inputFieldLayout]}>
        <View style={styles.shape} />
      </View>
      <FormContainer1 />
      <Text style={[styles.createAccount, styles.signUpLayout]}>
        Create Account
      </Text>
      <View style={[styles.fullname, styles.fullnameLayout]}>
        <RectangleComponent />
        <Text style={styles.fullname1}>Fullname</Text>
      </View>
      <View style={[styles.signupChild, styles.fullnameLayout]} />
      <View style={[styles.phoneNumber, styles.phoneLayout]}>
        <Text style={[styles.phoneNumber1, styles.phoneLayout]}>
          Phone Number
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("PNActive")}
      >
        <RectangleComponent1 showRectangleLinearGradient />
        <Text style={[styles.signUp, styles.signUpLayout]}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.alreadyHaveAn, styles.logInLayout]}>
        Already have an account?
      </Text>
      <Text style={[styles.logIn, styles.logInLayout]}>Log in</Text>
      <View style={[styles.inputField, styles.inputFieldLayout]}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>+62</Text>
          <Image
            style={styles.caretdownIcon}
            contentFit="cover"
            source={require("../assets/caretdown.png")}
          />
        </View>
        <View style={styles.wrapper1}>
          <PhoneNumber phoneNumber="Phone number" />
          <View style={[styles.indicator, styles.logInLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldLayout: {
    width: 375,
    position: "absolute",
  },
  signUpLayout: {
    height: 35,
    position: "absolute",
  },
  fullnameLayout: {
    width: 347,
    position: "absolute",
  },
  phoneLayout: {
    width: 122,
    height: 23,
    position: "absolute",
  },
  logInLayout: {
    height: 22,
    position: "absolute",
  },
  shape: {
    width: 138,
    height: 5,
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
  },
  homeIndicator: {
    bottom: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_2xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    left: 0,
    width: 375,
  },
  createAccount: {
    top: 169,
    left: 94,
    fontSize: FontSize.size_5xl,
    width: 219,
    textAlign: "left",
    height: 35,
    color: Color.black,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  fullname1: {
    width: 80,
    height: 23,
    fontFamily: FontFamily.arial,
    fontSize: FontSize.size_mini,
    top: 0,
    textAlign: "left",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  fullname: {
    top: 233,
    height: 69,
    left: 14,
  },
  signupChild: {
    top: 358,
    left: 11,
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 1,
    height: 46,
    backgroundColor: Color.colorWhite,
  },
  phoneNumber1: {
    fontFamily: FontFamily.arial,
    fontSize: FontSize.size_mini,
    width: 122,
    top: 0,
    textAlign: "left",
    color: Color.black,
    left: 0,
  },
  phoneNumber: {
    top: 341,
    left: 14,
  },
  signUp: {
    top: 14,
    left: 109,
    fontSize: 20,
    color: Color.colorWhite,
    width: 96,
    textAlign: "center",
    fontFamily: FontFamily.arial,
  },
  button: {
    top: 441,
    left: 28,
    width: 320,
    height: 49,
    position: "absolute",
  },
  alreadyHaveAn: {
    left: 53,
    width: 182,
    top: 529,
    height: 22,
    textAlign: "center",
    fontFamily: FontFamily.arial,
    fontSize: FontSize.size_mini,
    color: Color.black,
  },
  logIn: {
    left: 225,
    textDecoration: "underline",
    color: Color.colorGreen_100,
    width: 57,
    top: 529,
    height: 22,
    textAlign: "center",
    fontFamily: FontFamily.arial,
    fontSize: FontSize.size_mini,
  },
  text: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  caretdownIcon: {
    width: 12,
    height: 12,
    marginLeft: 2,
    overflow: "hidden",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: 2,
    zIndex: 1,
    height: 22,
    top: 0,
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
    left: 0,
  },
  wrapper1: {
    marginLeft: 12,
    flexDirection: "row",
    flex: 1,
  },
  inputField: {
    top: 351,
    left: -8,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  signup: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Signup;
