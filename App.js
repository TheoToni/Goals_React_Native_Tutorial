import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString() },
    ]);
  };

  const deleteGoal = (goal) => {};

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.goalList}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{itemData.item.text}</Text>
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
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  goalItemText: {
    color: "white",
    fontSize: 18,
  },
  goalList: {
    flex: 1,
  },
});
