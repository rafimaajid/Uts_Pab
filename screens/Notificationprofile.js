import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import RefundUnderProcess from "../components/RefundUnderProcess";
import LoremIpsumDolor from "../components/LoremIpsumDolor";
import YourBookingIs from "../components/YourBookingIs";
import LoremIpsumDolor1 from "../components/LoremIpsumDolor1";
import SuccessfullyCompletedMake from "../components/SuccessfullyCompletedMake";
import LoremIpsumDolor2 from "../components/LoremIpsumDolor2";
import RefundUnderProcess1 from "../components/RefundUnderProcess1";
import LoremIpsumDolor3 from "../components/LoremIpsumDolor3";
import YourBookingIs1 from "../components/YourBookingIs1";
import LoremIpsumDolor4 from "../components/LoremIpsumDolor4";
import CalendarIcon from "../components/CalendarIcon";
import BackButtonIcon from "../components/BackButtonIcon";
import Notifications from "../components/Notifications";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Notificationprofile = ({
  notificationprofilePointe,
  notificationprofileAccess = true,
}) => {
  return (
    <View
      style={styles.notificationprofile}
      pointerEvents={notificationprofilePointe}
      accessibilityViewIsModal={notificationprofileAccess}
    >
      <Text style={[styles.today, styles.todayTypo]}>today</Text>
      <Text style={[styles.yesterday, styles.todayTypo]}>yesterday</Text>
      <View style={[styles.processParent, styles.parentPosition]}>
        <Image
          style={styles.processIcon}
          contentFit="cover"
          source={require("../assets/process.png")}
        />
        <RefundUnderProcess refundUnderProcess="refund under process" />
        <LoremIpsumDolor />
        <Text style={[styles.at0557Pm, styles.at0557Typo]}>at 05:57 pm</Text>
      </View>
      <View style={[styles.cancelledParent, styles.parentPosition]}>
        <Image
          style={styles.processIcon}
          contentFit="cover"
          source={require("../assets/cancelled.png")}
        />
        <YourBookingIs yourBookingIsCancelled="your booking is cancelled" />
        <LoremIpsumDolor1 loremIpsumDolorSitAmetEtA="Lorem ipsum dolor sit amet. Et architecto sequi sed aperiam autem ea consequuntur vero ut omnis sint qui voluptate quidem in deserunt recusandae." />
        <Text style={[styles.at0557Pm1, styles.at0557Typo]}>at 05:57 pm</Text>
      </View>
      <View style={[styles.successParent, styles.parentPosition]}>
        <Image
          style={styles.processIcon}
          contentFit="cover"
          source={require("../assets/success.png")}
        />
        <SuccessfullyCompletedMake successfullyCompletedMake="successfully completed, make valuable review" />
        <LoremIpsumDolor2 loremIpsumDolorSitAmetEtA="Lorem ipsum dolor sit amet. Et architecto sequi sed aperiam autem ea consequuntur vero ut omnis sint qui voluptate quidem in deserunt recusandae." />
        <Text style={[styles.at0557Pm2, styles.at0557Typo]}>at 05:57 pm</Text>
      </View>
      <View style={[styles.processGroup, styles.groupLayout]}>
        <Image
          style={styles.processIcon}
          contentFit="cover"
          source={require("../assets/process.png")}
        />
        <RefundUnderProcess1 refundUnderProcess="refund under process" />
        <LoremIpsumDolor3 loremIpsumDolorSitAmetEtA="Lorem ipsum dolor sit amet. Et architecto sequi sed aperiam autem ea consequuntur vero ut omnis sint qui voluptate quidem in deserunt recusandae." />
        <Text style={[styles.at0557Pm3, styles.at0557Typo]}>at 05:57 pm</Text>
      </View>
      <View style={[styles.cancelledGroup, styles.groupLayout]}>
        <Image
          style={styles.processIcon}
          contentFit="cover"
          source={require("../assets/cancelled.png")}
        />
        <YourBookingIs1 yourBookingIsCancelled="your booking is cancelled" />
        <LoremIpsumDolor4 loremIpsumDolorSitAmetEtA="Lorem ipsum dolor sit amet. Et architecto sequi sed aperiam autem ea consequuntur vero ut omnis sint qui voluptate quidem in deserunt recusandae." />
        <Text style={[styles.at0557Pm3, styles.at0557Typo]}>at 05:57 pm</Text>
      </View>
      <Text style={[styles.at0557Pm5, styles.at0557Typo]}>at 05:57 pm</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.allNotifications}>All notifications</Text>
        <CalendarIcon calendar={require("../assets/calendar.png")} />
        <View style={styles.groupItem} />
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <BackButtonIcon
          backButton="back"
          backButton1={require("../assets/back-button.png")}
        />
        <Notifications />
        <Image
          style={[styles.statusBarIcon, styles.parentPosition]}
          contentFit="cover"
          source={require("../assets/status-bar.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todayTypo: {
    opacity: 0.7,
    textAlign: "left",
    color: Color.colorSteelblue,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    left: 15,
    position: "absolute",
  },
  parentPosition: {
    width: 330,
    left: 15,
    position: "absolute",
  },
  at0557Typo: {
    opacity: 0.6,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkslategray,
    textAlign: "left",
    textTransform: "capitalize",
    position: "absolute",
  },
  groupLayout: {
    height: 98,
    width: 330,
    left: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 50,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 90,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  today: {
    top: 153,
  },
  yesterday: {
    top: 416,
  },
  processIcon: {
    width: 25,
    height: 25,
    left: 0,
    top: 0,
    position: "absolute",
  },
  at0557Pm: {
    top: 90,
    left: 269,
    opacity: 0.6,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
  },
  processParent: {
    top: 181,
    height: 97,
  },
  at0557Pm1: {
    top: 86,
    left: 269,
    opacity: 0.6,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
  },
  cancelledParent: {
    top: 298,
    height: 93,
  },
  at0557Pm2: {
    top: 109,
    left: 269,
    opacity: 0.6,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
  },
  successParent: {
    top: 444,
    height: 116,
  },
  at0557Pm3: {
    top: 91,
    left: 269,
    opacity: 0.6,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
  },
  processGroup: {
    top: 580,
  },
  cancelledGroup: {
    top: 698,
  },
  at0557Pm5: {
    top: 861,
    left: 55,
  },
  groupChild: {
    top: 0,
    width: 360,
    backgroundColor: Color.colorWhitesmoke,
  },
  allNotifications: {
    top: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    left: 15,
    position: "absolute",
  },
  groupItem: {
    top: 50,
    borderStyle: "solid",
    borderColor: Color.black,
    borderTopWidth: 0.5,
    width: 331,
    height: 1,
    opacity: 0.5,
    left: 15,
    position: "absolute",
  },
  rectangleParent: {
    top: 88,
  },
  groupInner: {
    backgroundColor: Color.colorGreen_100,
  },
  statusBarIcon: {
    top: 9,
    height: 15,
  },
  notificationprofile: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default Notificationprofile;
