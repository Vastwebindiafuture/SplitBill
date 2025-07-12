import { StyleSheet, View } from "react-native";
import {Card,Button} from 'react-native-paper'
import {Text} from 'react-native'

const TaskItem=({title,id,description,date})=>{
    return(
     <Card >
    <Card.Title title={title}  />
        <Card.Content title={title}/>
    <Card.Content >
      <Text variant="titleLarge">{description}</Text>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Card.Actions style={{width:'100%',display:'flex',padding:10}}>
      <Button style={{marginRight:'auto'}}>Delete</Button>
      <Button>Complete</Button>
    </Card.Actions>
  </Card>
    )
    
}

const style=StyleSheet.create({
    
})
export default TaskItem;