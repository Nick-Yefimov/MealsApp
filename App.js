import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainScreen from './screens/MainScreen';

const App = () => {
    return (
        <>
            <StatusBar style='light'/>
            <MainScreen/>
        </>
    )
}

export default App;

const styles = StyleSheet.create({

});