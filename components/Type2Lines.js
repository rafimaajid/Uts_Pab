import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Type2Lines = ({
  line2 = "DEF",
  line1 = "3",
  type2LinesMarginLeft,
  frameMarginLeft,
  dEFMarginLeft,
  textMarginLeft,
}) => {
  const type2LinesStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", type2LinesMarginLeft),
    };
  }, [type2LinesMarginLeft]);

  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", frameMarginLeft),
    };
  }, [frameMarginLeft]);

  const dEFStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", dEFMarginLeft),
    };
  }, [dEFMarginLeft]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", textMarginLeft),
    };
  }, [textMarginLeft]);

  return (
    <View style={[styles.type2Lines, type2LinesStyle]}>
      <View style={[styles.frame, frameStyle]}>
        <Text style={[styles.def, styles.defPosition, dEFStyle]}>{line2}</Text>
        <Text style={[styles.text, styles.defPosition, text1Style]}>
          {line1}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defPosition: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.calloutRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  def: {
    marginTop: 8,
    marginLeft: -10,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
  },
  text: {
    marginTop: -20,
    marginLeft: -8,
    fontSize: FontSize.size_6xl,
  },
  frame: {
    marginTop: -22.5,
    marginLeft: -9.5,
    width: 20,
    height: 40,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  type2Lines: {
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

export default Type2Lines;
