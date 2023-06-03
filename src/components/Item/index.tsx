import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";

interface IProps {
    title :string,
    content :string,
    img: ImageSourcePropType,
    date: string
}


export default function Item(props :IProps){
   return(
    <View style={styles.container}>
        <Image source={props.img} style={styles.img}/>
      <View style={styles.textContent}>
        <Text style={{fontWeight:'bold'}}>{props.title}</Text>
        <Text>{props.content}</Text>
      </View>
      <View style={styles.dateContainer}>
      <Text>{props.date}</Text>
      </View>
    </View>
   )
}