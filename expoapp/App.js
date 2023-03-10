import { StyleSheet, View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    entities: [], //data 
    loading: false, // status bar
}
//special api to write api logic

const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
            (data) => data.json()
        )
        return res
    })

//reducer code can be written in many style : slice Style

export const postSlice = createSlice({
    name: 'posts', //name of the reducer
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.entities = payload

        },
        [getPosts.rejected]: (state) => {
            state.loading = false
        },
    },
})
export const postReducer = postSlice.reducer
//Create Store Object 
const store = configureStore({
    reducer: {
        posts: postReducer
    }
})

/////////////////////////////////////////////////////////////////////////////////////
const Post = props => {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => state.posts)
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return <View style={styles.container}>
        <FlatList
            data={entities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Text  style={styles.item}>{item.title}</Text>
            )}
        />
    </View>

}

export default function App() {

    return (
        <View style={styles.container}>
            <Provider store={store}>
                <Post />
            </Provider>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})
