import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../mealsData/MealsData";

const MealsOverviewScreen = ({ route }) => {
    const productId = route.params.categoryId

    return (
        <View style={styles.container}>
            <Text>screen oveview {productId}</Text>
        </View>
    )
}

export default MealsOverviewScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
    }
});