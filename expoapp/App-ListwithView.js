import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
                return <View style={{ padding: 30 }} key={todo.id}>
                    <Text>{todo.title}</Text>
                </View>
            })
        }
    </View>
}
export default App;