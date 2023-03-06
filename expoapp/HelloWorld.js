import { View, Text, StyleSheet } from "react-native"

/**
 * 
 * All jsx rules are applied 
 * 
 */

// export const HelloWorld = props => {
//     //return jsx
//     return <View>
//         <Text>Hello World View!</Text>
//         <Text>Hello World View!</Text>        
//     </View>
// }
//Fragements
export const HelloWorld = props => {
    //return jsx
    return <>
        {/* External style */}
        <Text style={styles}>Hello World View!</Text>
        {/* Inline Style */}
        <Text style={{ fontSize: 30, fontWeight: 'bold',fontFamily:'sans-serif' }}>Hello World View!</Text>
    </>
}

//Style Sheet 
const styles = StyleSheet.create({
    backgroundColor: '#61dafb',
    fontSize: 30,
    fontWeight: 'bold',
})