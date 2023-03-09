import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator,Alert } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})


const TODOAPI = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return fetch(url);
}

const App = () => {

    //state
    const [state, setState] = useState({
        error: null,  // to show error 
        isLoaded: false, //spiner status
        todos: [] // data
    })
    const onSelect = selectedItem => {
        console.log(selectedItem)
        Alert.alert(JSON.stringify(selectedItem))
    }

    async function fetchData() {
        // You can await here
        try {
            // const response = await POSTAPI();
            // const posts = await response.json()
            const todos = await (await TODOAPI()).json()
            setState(prevState => ({ ...prevState, todos: prevState.todos.concat(todos), isLoaded: true }))
        }
        catch (err) {
            setState(prevState => ({ ...prevState, isLoaded: true, error: err }))
        }

    }
    //componentDidMount
    useEffect(() => {
        fetchData();
    }, [])

    //ComponentDidUpdate: This method is called for every update cycle
    // useEffect(() => {
    //     //fetchData(api?WithPage);
    // }, [condition])

    const { error, isLoaded, todos } = state

    if (error) {

        return <View style={styles.container}>
            <Text>Error</Text>
        </View>
    } else if (!isLoaded) {
        return <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    } else {
        return <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text onPress={() => {
                        onSelect(item)
                    }} style={styles.item}>{item.title}</Text>
                )}
            />
        </View>
    }
}
export default App;