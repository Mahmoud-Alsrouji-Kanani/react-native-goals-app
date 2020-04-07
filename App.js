import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGaolHandler = (goalTitle) => {
        //console.log(enteredGoal);
        
        //setCourseGoals([...courseGoals, enteredGoal]);

        setCourseGoals(currentGoals => [
            ...courseGoals, 
            { id: Math.random().toString(), value: goalTitle } 
        ]);
        
        //Close the Modal
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput
                visible={isAddMode}
                onAddGoal={addGaolHandler}
                onCancel={cancelGoalAdditionHandler}
            />
            <FlatList data={courseGoals} renderItem={itemData => (
                <GoalItem 
                    title={itemData.item.value}
                    id={itemData.item.id}
                    onDelete={removeGoalHandler}
                />
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});