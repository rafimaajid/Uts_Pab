import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Type1Line = ({
  line1 = "3",
  type1LineFlex,
  type1LineHeight,
  type1LineMarginLeft,
  textMarginLeft,
}) => {
  const type1LineStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", type1LineFlex),
      ...getStyleValue("height", type1LineHeight),
      ...getStyleValue("marginLeft", type1LineMarginLeft),
    };
  }, [type1LineFlex, type1LineHeight, type1LineMarginLeft]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", textMarginLeft),
    };
  }, [textMarginLeft]);

  return (
    <View style={[styles.type1Line, type1LineStyle]}>
      <Text style={[styles.text, textStyle]}>{line1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    marginTop: -15.5,
    marginLeft: -7.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.calloutRegular,
    color: Color.black,
    textAlign: "center",
  },
  type1Line: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_100,
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 47,
    flex: 1,
  },
});

export default Type1Line;
