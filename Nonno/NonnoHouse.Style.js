import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: "red",
    },
    container1: { 
      flex: 1, 
      backgroundColor: "red",
      alignItems: 'center',
    },
    row2: { 
      flexDirection: "row",
      alignSelf: 'flex-end',
  },
    row: { 
        flexDirection: "row",
        alignItems: 'felx-end',
    },
    Img: { 
      height: 200,
      width: 300, 
      margin: 5,
      borderWidth: 5,
      borderColor: 'white',
    },
    arrow: { 
      alignSelf: "flex-end",
      fontSize: 30,
      color: 'white',
      margin: 15,
    },
    box: {
      height: 75, 
      width: 743, 
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      margin: 10,
    },
    text: { 
      color: 'white',
      fontSize: 14.5,
    },
});