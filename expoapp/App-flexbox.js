import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HelloWorld } from './HelloWorld';

export default function App() {
    return (
        <View style={{
            flex: 1,
            height: 50,
            backgroundColor: 'pink',
            justifyContent: 'space-around',
            alignItems:'center'
        }}>
        {/* // <View style={[{flexDirection: 'column', alignItem: 'center'}, styles.container]}> */}

            <View style={{ width: 50, height: 50, backgroundColor: '#EE2C38' }} />
            <View style={{ width: 50, height: 50, backgroundColor: '#FAA030' }} />
            <View style={{ width: 50, height: 50, backgroundColor: '#32B76C' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    },
});
