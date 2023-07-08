import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  ProfileScreen: {
    email: string
  };
  LostItem: {
    title: string;
    status: string;
    description: string;
    contact: string;
    imagePath?: string;
  };
  RegisterItem: undefined;
  Profile: undefined;
  EditProfile: undefined
};