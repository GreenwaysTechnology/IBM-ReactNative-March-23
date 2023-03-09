import { StyleSheet, View,Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const Home = () => {
    return <View style={styles.container}>
        <Text>Home</Text>
    </View>
}

export default function App() {
    // In React Navigation Super Most Parent Component is NavigationContainer
    return <NavigationContainer>
            <Home/>
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
