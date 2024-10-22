import { View, StyleSheet, Pressable, Text, Modal } from "react-native";
import { useState } from "react";

export default function GoalInput() {
  const [modalVisible, setModalVisible] = useState(false);
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
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text>test</Text>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>Close</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional translucent background
  },
});
