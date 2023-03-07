import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Platform,Text } from 'react-native';


//platform features 

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Platform Features</Text>
            <Text>OS</Text>
            <Text style={styles.value}>{Platform.OS}</Text>
            <Text>OS Version</Text>
            <Text style={styles.value}>{Platform.Version}</Text>
            <Text>isTV</Text>
            <Text style={styles.value}>{Platform.isTV.toString()}</Text>
            {Platform.OS === 'ios' && (
                <>
                    <Text>isPad</Text>
                    <Text style={styles.value}>{Platform.isPad.toString()}</Text>
                </>
            )}
            <Text>Constants</Text>
            <Text style={styles.value}>
                {JSON.stringify(Platform.constants, null, 2)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        fontWeight: '600',
        padding: 4,
        marginBottom: 8,
    },
});
