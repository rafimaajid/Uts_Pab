import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Componentcode from "./Componentcode";
import ResendCodeIn from "./ResendCodeIn";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const MobileVerificationForm = ({ prop, resendCodeIn10s }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.navBarSpaceBlock}>
          <Image
            style={styles.arrowleftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </View>
        <View style={styles.titleSpaceBlock}>
          <Text style={[styles.verifyYourMobile, styles.weSentAFlexBox]}>
            Verify your mobile number
          </Text>
          <Text style={[styles.weSentA, styles.weSentAFlexBox]}>
            We sent a 6-digit code to +62 17673549551
          </Text>
        </View>
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.navBarSpaceBlock}>
          <Componentcode prop="0000" />
          <View style={styles.indicator} />
        </View>
        <View style={[styles.resendCodeIn10sWrapper, styles.titleSpaceBlock]}>
          <ResendCodeIn resendCodeIn10s="Resend code in 10s" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weSentAFlexBox: {
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
  },
  titleSpaceBlock: {
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xl,
    width: 375,
  },
  arrowleftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  navBarSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    width: 375,
  },
  verifyYourMobile: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  weSentA: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    opacity: 0.6,
    marginTop: 8,
  },
  indicator: {
    top: 16,
    left: 24,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 2,
    height: 22,
    zIndex: 1,
    position: "absolute",
  },
  resendCodeIn10sWrapper: {
    backgroundColor: Color.colorWhite,
  },
  wrapper2: {
    marginTop: 16,
  },
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
  },
});

export default MobileVerificationForm;
