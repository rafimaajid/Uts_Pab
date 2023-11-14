import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Type1Line from "./Type1Line";
import TypeDeleteImage from "./TypeDeleteImage";
import Type2Lines from "./Type2Lines";
import { Color, Border, Padding } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={[styles.keyboardIphone, styles.homeIndicatorPosition]}>
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.framePosition]}>
          <View style={styles.empty} />
          <Type1Line
            line1="0"
            type1LineFlex={1}
            type1LineHeight={47}
            type1LineMarginLeft={4}
            textMarginLeft={-9.15}
          />
          <TypeDeleteImage
            typeDeleteImageTypeDelete={require("../assets/button.png")}
            typeDeleteIconFlex={1}
            typeDeleteIconMaxWidth="100%"
            typeDeleteIconOverflow="hidden"
            typeDeleteIconHeight={47}
            typeDeleteIconMarginLeft={4}
          />
        </View>
        <View style={[styles.frame2, styles.framePosition]}>
          <Type2Lines
            line2="GHI"
            line1="4"
            type2LinesMarginLeft="unset"
            frameMarginLeft={-10.15}
            dEFMarginLeft={-9}
            textMarginLeft={-9}
          />
          <Type2Lines
            line2="JKL"
            line1="5"
            type2LinesMarginLeft={4}
            frameMarginLeft={-10.15}
            dEFMarginLeft={-10}
            textMarginLeft={-8}
          />
          <Type2Lines
            line2="MNO"
            line1="6"
            type2LinesMarginLeft={4}
            frameMarginLeft={-10.15}
            dEFMarginLeft={-12}
            textMarginLeft={-9}
          />
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Type2Lines
            line2="PQRS"
            line1="7"
            type2LinesMarginLeft="unset"
            frameMarginLeft={-10.15}
            dEFMarginLeft={-14}
            textMarginLeft={-8}
          />
          <Type2Lines
            line2="TUV"
            line1="8"
            type2LinesMarginLeft={4}
            frameMarginLeft={-10.15}
            dEFMarginLeft={-11}
            textMarginLeft={-9}
          />
          <Type2Lines
            line2="WXYZ"
            line1="9"
            type2LinesMarginLeft={4}
            frameMarginLeft={-10.15}
            dEFMarginLeft={-16}
            textMarginLeft={-9}
          />
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Type2Lines
            line2=" "
            line1="1"
            type2LinesMarginLeft="unset"
            frameMarginLeft={-10.15}
            dEFMarginLeft={0}
            textMarginLeft={-7}
          />
          <Type2Lines
            line2="ABC"
            line1="2"
            type2LinesMarginLeft={4}
            frameMarginLeft={-10.15}
            dEFMarginLeft={-11}
            textMarginLeft={-8}
          />
          <Type2Lines
            line2="DEF"
            line1="3"
            type2LinesMarginLeft={4}
            frameMarginLeft={-10.15}
            dEFMarginLeft={-10}
            textMarginLeft={-8}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.shape} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    width: 375,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  framePosition: {
    flexDirection: "row",
    right: 0,
    left: 0,
    position: "absolute",
  },
  empty: {
    flex: 1,
    backgroundColor: Color.colorCrimson,
    height: 20,
  },
  frame1: {
    top: 159,
  },
  frame2: {
    top: 53,
  },
  frame3: {
    top: 106,
  },
  frame4: {
    bottom: 159,
  },
  frame: {
    right: 6,
    bottom: 80,
    left: 6,
    height: 206,
    position: "absolute",
  },
  shape: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 138,
    height: 5,
  },
  homeIndicator: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_2xl,
    paddingBottom: Padding.p_5xs,
  },
  keyboardIphone: {
    backgroundColor: Color.colorGray_200,
    height: 292,
  },
});

export default FormContainer;
