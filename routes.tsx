import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  ProfileScreen: undefined;
  LostItemByUserScreen: undefined; 
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