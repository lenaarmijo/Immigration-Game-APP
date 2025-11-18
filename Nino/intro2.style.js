import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
    },
    row: { 
        flexDirection: "row",
    },
    img: { 
      flex: 1, 
    },
    arrow: { 
      alignSelf: "flex-end",
      fontSize: 30,
      color: 'white',
      margin: 20,
    },
    box: {
      height: 50, 
      width: 700, 
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    text: { 
      color: 'white',
      fontSize: 15,
    },
});