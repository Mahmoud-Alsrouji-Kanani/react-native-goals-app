import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const getInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGaolHandler = () => {
        //console.log(enteredGoal);
        
        //setCourseGoals([...courseGoals, enteredGoal]);

        setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course goal"
                    style={styles.input}
                    onChangeText={getInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={addGaolHandler} />
            </View>
            <ScrollView>
                {courseGoals.map((goal) => {
                    return(
                        <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
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
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5
    }
});