import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  ProfileScreen: undefined;
  LostItemByUserScreen: undefined; 
  EditUserItemScreen: object;
  LostItem: {
    title: string;
    status: string;
    description: string;
    contact: string;
    imagePath?: string;
  };
  RegisterItem: undefined;
  Profile: undefined;
  EditProfile: any
};