import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const options = ["Pomodoro", "Short Breack", "Long Breack"];
const Header = ({ currentTime, setCurrentTime, setTime }) => {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.item,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
    width: "33%",
    borderColor: "white",
    marginVertical: 20,
  },
});
