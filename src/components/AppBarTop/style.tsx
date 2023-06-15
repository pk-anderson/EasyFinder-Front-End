import { StyleSheet } from "react-native";
import { deviceDimensions } from "../../global/dimesion";

export const styles = StyleSheet.create({
    containerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
      },
      menuButton: {
        padding: 10,
      },
      menuIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
        marginRight: 30,
      },
      menuContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: deviceDimensions().width * 0.7,
      },
      userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      userPhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      userName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      menuItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      menuItemText: {
        fontSize: 16,
      },
      logo: {
        width: 225,
        height: 42,
        marginBottom: 0,
      },
})