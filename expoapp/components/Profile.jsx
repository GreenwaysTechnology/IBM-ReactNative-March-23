import { View, Text, StyleSheet } from "react-native";


const Profile = props => {
    const { id, name, address: { city } } = props.profile
    return <View style={styles}>
        <Text>Profile Info</Text>
        <Text>Id {id}</Text>
        <Text>Name {name}</Text>
        <Text>City {city}</Text>
    </View>
}

export default Profile;

const styles = StyleSheet.create({
    backgroundColor: 'yellow'
})