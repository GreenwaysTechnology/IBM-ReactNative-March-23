import { StyleSheet, View, Text, Button } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { CounterReducer } from './reducers/counterreducer'
import { ReviewReducer } from './reducers/reviewreducer'
//Create Store Object 
const store = configureStore({
    reducer: {
        counterReducer: CounterReducer,
        reviewReducer: ReviewReducer
    }
})

/////////////////////////////////////////////////////////////////////////////////////

//User Interface place

const Counter = () => {
    //Get the state from the Redux using useSelector hook
    const counter = useSelector(appState => {
        return appState.counterReducer.counter
    })

    //Get the dispatcher
    const dispatch = useDispatch()

    const onIncrement = () => {
        //send request to increment counter : sending action to redux
        const incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }
    return <>
        <Text>Counter App</Text>
        <Text>Counter : {counter}</Text>
        <Button onPress={onIncrement} title="+" />

    </>
}

const Review = () => {

    //Get the state from the Redux using useSelector hook
    const counter = useSelector(appState => {
        return appState.reviewReducer.counter
    })

    //Get the dispatcher
    const dispatch = useDispatch()

    return <>
        <Text>Review App</Text>
        <Text>Review : {counter}</Text>
        <Button onPress={() => {
            dispatch({ type: 'counter/decrement' })
        }} title="Review" />

    </>
}

export default function App() {

    return (
        <View style={styles.container}>
            <Provider store={store}>
                <Counter />
                <Review />
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
