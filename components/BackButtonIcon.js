import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BackButtonIcon = ({
  backButton,
  backButton1,
  backButtonIconPosition,
  backButtonIconTop,
  backButtonIconLeft,
  backButtonIconWidth,
  backButtonIconHeight,
  backButtonIconOverflow,
}) => {
  const backButtonIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", backButtonIconPosition),
      ...getStyleValue("top", backButtonIconTop),
      ...getStyleValue("left", backButtonIconLeft),
      ...getStyleValue("width", backButtonIconWidth),
      ...getStyleValue("height", backButtonIconHeight),
      ...getStyleValue("overflow", backButtonIconOverflow),
    };
  }, [
    backButtonIconPosition,
    backButtonIconTop,
    backButtonIconLeft,
    backButtonIconWidth,
    backButtonIconHeight,
    backButtonIconOverflow,
  ]);

  return (
    <Image
      style={[styles.backButtonIcon, backButtonIconStyle]}
      contentFit="cover"
      source={backButton1}
      accessibilityLabel={backButton}
    />
  );
};

const styles = StyleSheet.create({
  backButtonIcon: {
    position: "absolute",
    top: 48,
    left: 15,
    width: 25,
    height: 25,
  },
});

export default BackButtonIcon;
