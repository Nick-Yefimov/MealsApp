import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from '../mealsData/MealsData';
import CategoriesGridTitle from "../components/CategoriesGridTitle";

const MainScreen = ({ navigation }) => {

    const renderCategoryItem = (itemData) => {
        function pressHandler() {
            navigation.navigate('CategoriesOverview', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoriesGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    )
}

export default MainScreen;

const styles = StyleSheet.create({

});