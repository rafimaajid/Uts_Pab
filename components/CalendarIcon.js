import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const CalendarIcon = ({ calendar }) => {
  return (
    <Image style={styles.calendarIcon} contentFit="cover" source={calendar} />
  );
};

const styles = StyleSheet.create({
  calendarIcon: {
    position: "absolute",
    top: 18,
    left: 323,
    width: 20,
    height: 20,
    opacity: 0.7,
  },
});

export default CalendarIcon;
