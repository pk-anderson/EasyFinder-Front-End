import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  LostItem: {
    title: string;
    status: string;
    description: string;
    contact: string;
    imagePath?: ImageSourcePropType;
  };
  RegisterItem: undefined;
};