import { Dimensions } from "react-native"


export const deviceDimensions = () =>{
    const {width,height} = Dimensions.get('window');
    return {width,height}
}