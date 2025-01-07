import { StyleSheet, Text, View } from 'react-native';
import SignIn from './pages/SignIn';



export default function App() {
  return (
    <SignIn/>
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
