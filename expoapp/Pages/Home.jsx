import { StyleSheet, View, Text, Button } from 'react-native';


export default Home = props => {
    console.log('Home Props', props)
    const { navigation: { navigate } } = props
    const moveToDetails = () => {
        //  navigation.navigate('Details')
        navigate('TodoList')
    }

    return <View style={styles.container}>
        <Button onPress={moveToDetails} title="TodoList" />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
