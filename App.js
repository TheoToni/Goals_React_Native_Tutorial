import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);

  // Funktion zum Hinzufügen eines neuen Ziels
  const addGoal = (goal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.goalList}
        data={goals}
        keyExtractor={(item) => item.id} // Eindeutiger Schlüssel für jedes Element
        renderItem={(itemData) => (
          <View style={styles.goalItem}>
            <Text>{itemData.item.text}</Text>
          </View>
        )}
      />

      <GoalInput onAddGoal={addGoal} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  goalList: {
    flex: 2,
  },
});
