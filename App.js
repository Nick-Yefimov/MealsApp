import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Categories' component={MainScreen}/>
                    <Stack.Screen name='CategoriesOverview' component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer> 
        </>
    )
}

export default App;

const styles = StyleSheet.create({

});