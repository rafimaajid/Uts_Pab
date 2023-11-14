import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RectangleComponent = ({ rectangle5FlexWrap, rectangle5BorderWidth }) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("flexWrap", rectangle5FlexWrap),
      ...getStyleValue("borderWidth", rectangle5BorderWidth),
    };
  }, [rectangle5FlexWrap, rectangle5BorderWidth]);

  return <View style={[styles.fullnameChild, rectangleViewStyle]} />;
};

const styles = StyleSheet.create({
  fullnameChild: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 1,
    width: 347,
    height: 46,
  },
});

export default RectangleComponent;
