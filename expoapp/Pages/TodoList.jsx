import { StyleSheet, View, Text, Button } from 'react-native';
import Todo from '../components/Todo';


export default TodoList = props => {
    return <Todo {...props} />
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
