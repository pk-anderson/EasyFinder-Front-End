import { StyleSheet } from "react-native";
import { deviceDimensions } from "../../global/dimesion";


export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 100,
      marginTop: 20,
      borderWidth: 1,
      borderBottomColor: '#DAD8D4',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    textContent: {
      flex: 1,
      marginLeft: 10,
      justifyContent: 'center',
    },
    img: {
      width: 80,
      height: 80,
      margin: 10,
      borderRadius: 5,
    },
    deleteButton: {
      backgroundColor: 'red',
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    deleteButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    dateContainer: {
        display: 'flex',
        top: 5,
        left: 7,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 23,
        marginBottom: '15%',
    },
    editButton: {
      backgroundColor: 'green',
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    editButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    editText: {
      color: 'white',
      fontWeight: 'bold',
    },
});  