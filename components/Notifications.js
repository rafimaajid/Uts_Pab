import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Notifications = () => {
  return <Text style={styles.notifications}>notifications</Text>;
};

const styles = StyleSheet.create({
  notifications: {
    position: "absolute",
    top: 50,
    left: 60,
    fontSize: FontSize.calloutRegular_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Notifications;
