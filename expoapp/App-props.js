import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';

export default function App() {

  let profile = {
    id: 1,
    name: 'Subramanian',
    address: {
      city: 'Coimbatore'
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Profile profile={profile} />
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
