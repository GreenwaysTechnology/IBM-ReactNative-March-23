import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { Navigator, Screen } = createStackNavigator();

function HomeScreen({ navigation, route }) {

    //componentDidUpdate : only when update cycles starts
    useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
    );
}

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');

    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'green' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass params back to home screen
                    navigation.navigate('Home', { post: postText });
                }}
            />
        </>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home">
                <Screen name="Home" options={{ title: 'Welcome to Start Token' }}>
                    {props => <HomeScreen {...props} extraData={"Start Token"} />}
                </Screen>
                <Screen component={CreatePostScreen} name="CreatePost" />

            </Navigator>
        </NavigationContainer>
    );
}