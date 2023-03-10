import { StyleSheet, View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


const { Navigator, Screen } = createStackNavigator()

const Home = props => {
    console.log(props)
    return <View style={styles.container}>
        <Text>{props.title}</Text>
        <Button title="GoToProfile" onPress={() => {
            props.navigation.navigate('Profile')
        }} />
    </View>
}
const Profile = props => {
    return <View style={styles.container}>
        <Text>Profile </Text>
        <Button
            title="Go to Profiles... again"
            onPress={() => props.navigation.push('Profile')}
        />
          <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
}


export default function App() {
    // In React Navigation Super Most Parent Component is NavigationContainer
    return <NavigationContainer>
        <Navigator initialRouteName='Home'>
            {/* <Home title=""> */}
            {/* <Screen name="Home" component={Home} /> */}
            <Screen name="Home">
                {props => <Home {...props} title="IBM Learning App" />}
            </Screen>
            <Screen name="Profile" component={Profile} />
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
