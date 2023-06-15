import styled from "styled-components/native";
import { TextProps } from 'react-native';

export const LostItemInfoView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    position: absolute;
    width: 343px;
    height: 274px;
    left: 13px;
    top: 406px;
`;

export const LstItmHeader = styled.View`
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 0px 16px;
    gap: 84px;

    width: 343px;
    height: 66px;

`;

export const LstItmHeaderInfo = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;
    isolation: isolate;


    
    width: 236px;
    height: 50px;
`;

export const HeaderTitle = styled.Text`
    font-size: 28px;
    position: absolute;
    font-weight: 600;
   
    left: 70px;
    top: -130px;
`;

export const HeaderSub = styled.Text`
    
    font-size: 18px;
    position: absolute;
    font-weight: 200;
   
    left: 95px;
    top: -100px;
`;

export const StatusView = styled.View`
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 16px;
    gap: 84px;

    width: 343px;
`;

export const StatusLine = styled.View`
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 103px;

    width: 343px;
    height: 18px;
    

`;

export const StatusLabel = styled.Text`
    position: absolute;

    font-size: 18px;
    position: absolute;
    font-weight: 200;
   
    left: 0px;
    top: -100px;
`;

export const StatusValue = styled.Text`
    
    font-size: 18px;
    position: absolute;
    font-weight: 200;
   
    left: 238px;
    top: -100px;
`;

export const DescriptionLine = styled.View`
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 70px;
    gap: 0px;


    

`;

export const DescriptionText = styled.Text`
    
    position: absolute;
    padding-bottom: 100px;
    font-size: 18px;
    position: absolute;
    font-weight: 200;
    left: 0px;
    top: -90px;
    width: 100%;
    overflow-wrap: break-word;
`;

export const LocationLine = styled.View`
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 100px;
    gap: 0px;


    

`;

export const LocationMap = styled.View`
    
    position: absolute;
    padding-bottom: 100px;
    font-size: 18px;
    position: absolute;
    font-weight: 200;
    left: 0px;
    top: -90px;
    width: 100%;
    overflow-wrap: break-word;
`;

export const ContactBtn = styled.Pressable`
    position: absolute;

    position: absolute;
    font-weight: 200;


    border: 2px solid #000000;
    border-radius: 50px;
   
    left: 80px;
    top: -140px;
`;

export const ContactTxt = styled.Text`
    font-size: 20px;
    padding: 5px;
    font-weight: 200;
`;