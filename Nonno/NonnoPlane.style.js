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
      color: 'black',
      margin: 20,
    },
    row2: { 
      flexDirection: "row",
      alignSelf: 'flex-end',
  },
    box: {
      height: 50, 
      width: 700, 
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      Margin: 30,
      marginBottom: 20,
      marginLeft: 15,
    },
    text: { 
      color: 'white',
      fontSize: 15,
    },
});