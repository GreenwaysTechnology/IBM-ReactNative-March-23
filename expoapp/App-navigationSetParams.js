import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import { createStackNavigator } from '@react-navigation/stack'

//create Stack Object
const { Navigator, Screen } = createStackNavigator();

const HomeScreen = props => {
    const { navigation, route } = props;
    return <View style={styles.container}>
        <Text>Home Screen : {props.extraData}</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details', { id: 1, item: 'React Native' })} />
    </View>
}
const DetailsScreen = (props) => {
    const { navigation, route } = props;
    console.log(route.params);
    return (
        <View style={styles.container}>
            <Text>Details Screen : {route.params.id} - {route.params.item}</Text>
            <Button
                title="Update Params"
                onPress={() => {
                    navigation.setParams({ id: 900, item: 'foo' })
                }
                }
            />
        </View>
    );
}

export default function App() {
    return <NavigationContainer>
        <Navigator initialRouteName="Home">
            <Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Start Token' }} />
            <Screen name="Details" component={DetailsScreen} />
        </Navigator>
    </NavigationContainer>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});