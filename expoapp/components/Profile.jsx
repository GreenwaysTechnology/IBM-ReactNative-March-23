import { View, Text, StyleSheet } from "react-native";


const Profile = props => {
    const { id, name, address: { city } } = props.profile
    return <View style={container}>
        <Text style={text}>Profile Info</Text>
        <Text>Id {id}</Text>
        <Text>Name {name}</Text>
        <Text>City {city}</Text>
    </View>
}

export default Profile;



// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'yellow'
//     },
//     text: {
//         color: "blue",
//         textAlign: "center",
//         fontSize: 30
//     }
// })

const { container, text } = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    },
    text: {
        color: "blue",
        textAlign: "center",
        fontSize: 30
    }
})
