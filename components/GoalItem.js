import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // to make a animate on it when touch it
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        // to do android ripple on ios
        style={({ pressed }) => pressed && styles.pressedIos}
      >
        <Text style={{ color: "#fff", padding: 8 }}>{item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedIos: {
    opacity: 0.5,
  },
});
