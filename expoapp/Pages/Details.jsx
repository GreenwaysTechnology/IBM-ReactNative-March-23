import { StyleSheet, View, Text } from 'react-native';

export default DetailsScreen = props => {
    const { navigation, route } = props
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Text>{JSON.stringify(route.params)}</Text>
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


