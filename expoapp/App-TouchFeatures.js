import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

export const { container, text, button } = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "blue",
        textAlign: "center",
        fontSize: 30
    },
    button: {
        alignItems: "center",
        backgroundColor: "lightgray",
        padding: 10
    }

});

const App = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    return <View style={container}>
        <TouchableHighlight onPress={onIncrement} activeOpacity={0.6}
            underlayColor="#DDDDDD">
            <View style={button}>
                <Text>Touch Me!</Text>
            </View>
        </TouchableHighlight>
        <TouchableOpacity>
            <View style={button}>
                <Text>Touch Me!</Text>
            </View>
        </TouchableOpacity>
    </View>
}

export default App;