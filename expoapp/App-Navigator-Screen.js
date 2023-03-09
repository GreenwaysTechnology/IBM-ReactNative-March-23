import { StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// const Stack = createStackNavigator();
const { Navigator, Screen } = createStackNavigator()
const Home = () => {
    return <View style={styles.container}>
        <Text>Home</Text>
    </View>
}

// export default function App() {
//     // In React Navigation Super Most Parent Component is NavigationContainer
//     return <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//     </NavigationContainer>
// }

export default function App() {
    // In React Navigation Super Most Parent Component is NavigationContainer
    return <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home} />
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
