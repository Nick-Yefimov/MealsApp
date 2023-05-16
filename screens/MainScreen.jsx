import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from '../mealsData/MealsData';
import CategoriesGridTitle from "../components/CategoriesGridTitle";

const MainScreen = () => {

    const renderCategoryItem = (itemData) => {
        return (
            <CategoriesGridTitle title={itemData.item.title} color={itemData.item.color} />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default MainScreen;

const styles = StyleSheet.create({

});