import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const addGoalHandler = () => {
    if (inputText != "") {
      props.onAddGoal(inputText);
    }
    setInputText("");
    setModalVisible(false);
  };

  return (
    <View style={styles.goalInput}>
      <Pressable
        android_ripple={{ color: "#ddd", borderless: true }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.orangeButton}>Add Goal</Text>
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
          />

          {/* Neon-Purple "Add Goal" Button */}
          <Pressable style={styles.neonAddButton} onPress={addGoalHandler}>
            <Text style={styles.addButtonText}>Add Goal</Text>
          </Pressable>

          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.orangeAddButton}
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
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  neonAddButton: {
    backgroundColor: "purple",
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 20,
  },
  orangeButton: {
    padding: 15,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  orangeAddButton: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#FF5C00", // Eigenes Styling für den orangenen Button
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
