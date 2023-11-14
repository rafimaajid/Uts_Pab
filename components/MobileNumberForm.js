import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import BackButtonIcon from "./BackButtonIcon";
import PhoneNumber1 from "./PhoneNumber1";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const MobileNumberForm = () => {
  return (
    <View style={styles.wrapperPosition}>
      <View>
        <View style={styles.navBarSpaceBlock}>
          <BackButtonIcon
            backButton1={require("../assets/arrowleft.png")}
            backButtonIconPosition="relative"
            backButtonIconTop="unset"
            backButtonIconLeft="unset"
            backButtonIconWidth={24}
            backButtonIconHeight={24}
            backButtonIconOverflow="hidden"
          />
        </View>
        <View style={styles.title}>
          <Text style={[styles.enterYourMobile, styles.textFlexBox]}>
            Enter your mobile number
          </Text>
          <Text style={[styles.wellSendYou, styles.textFlexBox]}>
            We’ll send you a code to verify your number
          </Text>
        </View>
      </View>
      <View style={[styles.inputField, styles.navBarSpaceBlock]}>
        <View style={styles.wrapper2}>
          <Text style={[styles.text, styles.textFlexBox]}>+62</Text>
          <Image
            style={styles.caretdownIcon}
            contentFit="cover"
            source={require("../assets/caretdown.png")}
          />
        </View>
        <View style={styles.wrapper3}>
          <PhoneNumber1 phoneNumber="Phone number" />
          <View style={[styles.indicator, styles.wrapperPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
  },
  navBarSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    width: 375,
  },
  wrapperPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  enterYourMobile: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.black,
    letterSpacing: 0,
  },
  wellSendYou: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    opacity: 0.6,
    marginTop: 8,
    color: Color.black,
    letterSpacing: 0,
  },
  title: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    width: 375,
  },
  text: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.black,
    letterSpacing: 0,
  },
  caretdownIcon: {
    width: 12,
    height: 12,
    overflow: "hidden",
    marginLeft: 2,
  },
  wrapper2: {
    alignItems: "center",
    flexDirection: "row",
  },
  indicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 2,
    height: 22,
    zIndex: 1,
  },
  wrapper3: {
    flex: 1,
    marginLeft: 12,
    flexDirection: "row",
  },
  inputField: {
    marginTop: 16,
  },
});

export default MobileNumberForm;
