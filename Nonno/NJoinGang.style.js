import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'green',
    },
    row: { 
        flexDirection: "row",
    },
    row2: { 
      flexDirection: "row",
      alignSelf: 'flex-end',
  },
    img: { 
      height: 200, 
      width: 250,
      margin: 30, 
      borderWidth: 2,
      borderColor: 'white', 
    },
    arrow: { 
      alignSelf: 'flex-end',
      fontSize: 30,
      color: 'black',
      margin: 10,
    },
    nino: { 
        height: 300, 
        width: 300, 
        alignSelf: 'flex-end',
    },
    box: {
      height: 260, 
      width: 230, 
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30, 
      margin: 30,
      marginBottom: 40,
    },
    text: { 
      color: 'white',
      fontSize: 17,
      margin: 3, 
    },
});