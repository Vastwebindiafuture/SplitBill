import { StyleSheet, View, Text, FlatList } from "react-native";
import { Button } from "react-native-paper";
import TaskItem from "../components/TaskItem";

const HomeScreen = ({ tasks }) => {
    console.log(tasks)
    console.log(tasks.length)

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
            <FlatList data={tasks} renderItem={(iter) => <TaskItem date={iter.item.date} 
            title={iter.item.title} 
            description={iter.item.description} 
            id={iter.item.id} />} 
            keyExtractor={(item, index) => item.title + index} />
        </View>
    )

}

const style = StyleSheet.create({

})
export default HomeScreen;