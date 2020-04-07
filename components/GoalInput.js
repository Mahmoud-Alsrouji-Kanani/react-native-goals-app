import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const getInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course goal"
                    style={styles.input}
                    onChangeText={getInputHandler}
                    value={enteredGoal}
                /> 
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        width: '80%',
        marginBottom: 10
    },
    buttonContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '48%'
    }
});

export default GoalInput;