import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { TODOS } from './mock-data/todos';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'column',
        padding: 50
    }
})
const App = () => {
    return <View style={styles.container}>
        {
            TODOS.map(todo => {
                return <ScrollView style={{ padding: 30 }} key={todo.id}>
                    <Text>{todo.title}</Text>
                </ScrollView>
            })
        }
    </View>
}
export default App;