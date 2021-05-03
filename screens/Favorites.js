import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { STORAGE_KEY } from "../Key";

function Favorites() {
  displayData = async () => {
    try {
      let song = await AsyncStorage.getItem(STORAGE_KEY);
      let parsed = JSON.parse(song);
      alert(parsed);
    } catch (e) {
      alert("Failed to retrieve data");
    }
  };
  return (
    <View>
      <Button title="Press Me" onPress={displayData}></Button>
    </View>
  );
}

export default Favorites;
