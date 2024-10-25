import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const addGoalHandler = () => {
    props.onAddGoal(inputText);
    setInputText("");
    setModalVisible(false);
  };

  return (
    <View style={styles.goalInput}>
      <Pressable
        android_ripple={{ color: "#ddd", borderless: true }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Add Goal</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TextInput
            value={inputText}
            placeholder="Your Goal"
            style={styles.input}
            onChangeText={(newText) => setInputText(newText)}
          ></TextInput>
          <Button title="Add Goal" onPress={addGoalHandler}></Button>

          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  goalInput: {
    backgroundColor: "#FF5C00",
    borderRadius: 30,
  },
  addButtonText: {
    fontSize: 18,
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
  },
  closeButton: {
    position: "absolute", // Absolute positioning
    bottom: 30, // Places the button 30 units from the bottom
    backgroundColor: "#FF5C00",
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
