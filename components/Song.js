import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import ActionButton from "react-native-action-button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../Key";

function Song({ route }) {
  const [loaded] = useFonts({
    Nova: require("../assets/fonts/proxima_nova_soft_regular.ttf"),
    NovaSemiBold: require("../assets/fonts/proxima_nova_soft_semibold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const {
    itemId,
    title,
    engTitle,
    doh,
    stanNum1,
    stanNum2,
    stanNum3,
    stanNum4,
    stanNum5,
    stanOne,
    stanTwo,
    stanThree,
    stanFour,
    stanFive,
    stanChorus,
    chorus,
  } = route.params;

  return (
    <View>
      <ScrollView>
        <View style={styles.body}>
          <Text
            style={{
              fontFamily: "NovaSemiBold",
              fontWeight: "600",
              fontSize: 22,
              color: "#333333",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "Nova",
              fontSize: 17,
              color: "#333333",
              paddingTop: 10,
            }}
          >
            {engTitle}
          </Text>
          <Text
            style={{
              fontFamily: "NovaSemiBold",
              fontSize: 14,
              color: "#02A676",
              paddingTop: 5,
            }}
          >
            {doh} {"\n"}
          </Text>
          <Text>
            <Text
              style={{
                fontFamily: "NovaSemiBold",
                fontSize: 24,
                color: "#02A676",
              }}
            >
              {stanNum1}
              {"\n"}
            </Text>
            <Text
              style={{
                fontFamily: "Nova",
                fontSize: 19,
                color: "#333333",
              }}
            >
              {stanOne}
            </Text>
            <Text
              style={{
                fontFamily: "NovaSemiBold",
                fontSize: 22,
                color: "#02A676",
              }}
            >
              {stanChorus}
            </Text>
            <Text
              style={{
                fontFamily: "Mulish",
                fontSize: 19,
                color: "#333333",
                fontFamily: "Nova",
              }}
            >
              {chorus}
            </Text>
            <Text
              style={{
                fontFamily: "NovaSemiBold",
                fontSize: 24,
                color: "#02A676",
              }}
            >
              {stanNum2}
              {"\n"}
            </Text>
            <Text
              style={{
                fontFamily: "Nova",
                fontSize: 19,
                color: "#333333",
              }}
            >
              {stanTwo}
            </Text>
            <Text
              style={{
                fontFamily: "NovaSemiBold",
                fontSize: 24,
                color: "#02A676",
              }}
            >
              {stanNum3}
              {"\n"}
            </Text>
            <Text
              style={{
                fontFamily: "Nova",
                fontSize: 19,
                color: "#333333",
              }}
            >
              {stanThree}
            </Text>
            <Text
              style={{
                fontFamily: "NovaSemiBold",
                fontSize: 24,
                color: "#02A676",
              }}
            >
              {stanNum4}
              {"\n"}
            </Text>
            <Text
              style={{
                fontFamily: "Nova",
                fontSize: 19,
                color: "#333333",
              }}
            >
              {stanFour}
            </Text>
            <Text
              style={{
                fontFamily: "NovaSemiBold",
                fontSize: 24,
                color: "#02A676",
              }}
            >
              {stanNum5}
              {"\n"}
            </Text>
            <Text
              style={{
                fontFamily: "Nova",
                fontSize: 19,
                color: "#333333",
              }}
            >
              {stanFive}
            </Text>
          </Text>
        </View>
      </ScrollView>
      <ActionButton buttonColor="rgba(2,166,118,1)" size={60}>
        <ActionButton.Item
          buttonColor="#FF4200"
          size={52}
          textStyle={{
            fontFamily: "Nova",
            fontSize: 18,
          }}
          onPress={async () => {
            try {
              let song = await AsyncStorage.getItem(STORAGE_KEY);
              let parsed = JSON.parse(song);
              alert(parsed);
            } catch (e) {
              alert("Failed to retrieve data");
            }
          }}
        >
          <MaterialIcons name="edit" size={23} color="white" />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#280695"
          size={50}
          textStyle={{
            fontFamily: "Nova",
            fontSize: 18,
          }}
          onPress={() => alert("dialpad")}
        >
          <MaterialCommunityIcons name="dialpad" size={23} color={"#fff"} />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#FF9001"
          size={50}
          textStyle={{
            fontFamily: "Nova",
            fontSize: 18,
          }}
          onPress={async () => {
            try {
              await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(itemId));
              alert("Data successfully saved");
            } catch (e) {
              alert("Failed to save the data to the storage");
            }
          }}
        >
          <MaterialCommunityIcons
            name="heart-outline"
            size={23}
            color={"#fff"}
          />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    backgroundColor: "#ffff",
  },
});
export default Song;
