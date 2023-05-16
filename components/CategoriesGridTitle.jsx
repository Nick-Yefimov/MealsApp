import { StyleSheet, View, Pressable, Text } from "react-native";


const CategoriesGridTitle = ({ title, color }) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoriesGridTitle;

const styles = StyleSheet.create({

});