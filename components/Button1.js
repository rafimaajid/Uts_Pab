import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Button1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Notificationprofile")}
    >
      <Text style={styles.verifyCode}>Verify code</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  verifyCode: {
    fontSize: FontSize.calloutRegular_size,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.instrumentSansMedium,
    color: Color.black,
    textAlign: "center",
    opacity: 0.4,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorLimegreen,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
  },
});

export default Button1;
