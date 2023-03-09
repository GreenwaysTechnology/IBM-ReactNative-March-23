import { StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Pages/Home'
import Details from './Pages/Details'


const { Navigator, Screen } = createStackNavigator()


export default function App() {
    // In React Navigation Super Most Parent Component is NavigationContainer
    return <NavigationContainer>
        <Navigator>
            <Screen name="Home" options={{title:'IBM Learning App'}} component={Home} />
            <Screen name="Details" component={Details} />
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
