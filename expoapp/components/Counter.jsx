import React, { useState } from 'react'
import { Alert, Button, Text } from 'react-native'


// export default class Counter__ extends React.Component {
//     state = {
//         counter: 0
//     }
//     onIncrement = () => {
//         // Alert.alert('Button is Pressed')
//         this.setState(prevState => {
//             return { ...prevState, counter: prevState.counter + 1 }
//         })
//     }
//     render() {
//         return <>
//             <Text>Counter App</Text>
//             <Text>Counter : {this.state.counter}</Text>
//             <Button onPress={this.onIncrement} title="+" />
//         </>
//     }
// }

const Counter = () => {
    const [state, setState] = useState({ counter: 0 })
    const onIncrement = () => {
        // Alert.alert('Button is Pressed')
        setState(prevState => {
            return { ...prevState, counter: prevState.counter + 1 }
        })
    }
    return <>
        <Text>Counter App</Text>
        <Text>Counter : {state.counter}</Text>
        <Button onPress={onIncrement} title="+" />
        <Button onPress={() => {
            setState(prevState => {
                return { ...prevState, counter: prevState.counter - 1 }
            })
        }} title="-" />

    </>
}
export default Counter;