import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const getInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course goal"
                style={styles.input}
                onChangeText={getInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        width: '80%'
    },
});

export default GoalInput;