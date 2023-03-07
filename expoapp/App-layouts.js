import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HelloWorld } from './HelloWorld';

export default function App() {
    return (
        <View style={[styles.container, {
            // flexDirection: 'row',
            flexDirection: 'column',
            // flexDirection: 'column-reverse'
            // flexDirection: 'row-reverse'

        }]}>
            <StatusBar style="auto" />
            {/* red(5) + darkorange(2) + green(3) =>10  
               red = 5/10 , darkorange 2/10  green 3/10
            */}
            <View style={{
                flex: 1, flexDirection: 'column', backgroundColor: 'red',             }}>
            
            </View>
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
