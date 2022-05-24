import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddText, visible, cancel }) => {
  const [term, setTerm] = useState("");
  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/الهدف-goal.webp")}
          style={{ height: 100, width: 100, margin: 20 }}
        />
        <TextInput
          onChangeText={(e) => setTerm(e)}
          style={styles.input}
          placeholder="Your Course Goal..."
          value={term}
        />
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              // thats not best way to update a state if it debends on another state
              // setListTerms([...listTerms, term])
              // thats better
              // setListTerms((listOfTerms) => [...listTerms, term])
              onPress={() => {
                onAddText(term);
                setTerm("");
              }}
              color="#b180f0"
            />
          </View>
        </View>
        {/*no style prop for btn */}
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  input: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    padding: 10,
    borderWidth: 1,
    width: "100%",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
