import {  useState } from "react";
import { StyleSheet, View ,Text } from "react-native";
import { AppScreens, DUMMY_TASKS } from "../utils/constants";
import AddTaskScreen from "../screens/AddTaskScreen";
import HomeScreen from "../screens/HomeScreen";

const AppManager=()=>{
  const [currentScreen,setCurrentScreen] = useState(AppScreens.HomeScreen);
  const [Tasks, setTasks] = useState([...DUMMY_TASKS]);
  return(
        <View>
          {currentScreen==AppScreens.HomeScreen? (<HomeScreen tasks={Tasks} /> ) : (<AddTaskScreen/>)}
        </View>
    )
    
}

const style=StyleSheet.create({
    
})
export default AppManager;