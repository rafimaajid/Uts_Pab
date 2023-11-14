import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeDeleteImage = ({
  typeDeleteImageTypeDelete,
  typeDeleteIconFlex,
  typeDeleteIconMaxWidth,
  typeDeleteIconOverflow,
  typeDeleteIconHeight,
  typeDeleteIconMarginLeft,
}) => {
  const typeDeleteIconStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", typeDeleteIconFlex),
      ...getStyleValue("maxWidth", typeDeleteIconMaxWidth),
      ...getStyleValue("overflow", typeDeleteIconOverflow),
      ...getStyleValue("height", typeDeleteIconHeight),
      ...getStyleValue("marginLeft", typeDeleteIconMarginLeft),
    };
  }, [
    typeDeleteIconFlex,
    typeDeleteIconMaxWidth,
    typeDeleteIconOverflow,
    typeDeleteIconHeight,
    typeDeleteIconMarginLeft,
  ]);

  return (
    <Image
      style={[styles.typedeleteIcon, typeDeleteIconStyle]}
      contentFit="cover"
      source={typeDeleteImageTypeDelete}
    />
  );
};

const styles = StyleSheet.create({
  typedeleteIcon: {
    borderRadius: Border.br_8xs,
    height: 47,
    flex: 1,
  },
});

export default TypeDeleteImage;
