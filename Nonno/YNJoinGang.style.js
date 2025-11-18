import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    container1: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    row: { 
        flexDirection: "row",
    },
    row2: { 
      flexDirection: "row",
      alignSelf: 'flex-end',
  },
    img1: { 
      height: 200, 
      width: 240, 
      borderWidth: 2, 
      borderColor: 'white', 
      margin: 10,
      marginBottom: 30,
    },
    img2: { 
        height: 200, 
        width: 150, 
        borderWidth: 2, 
        borderColor: 'white', 
        margin: 10, 
      },
      img3: { 
        height: 200, 
        width: 250, 
        borderWidth: 2, 
        borderColor: 'white', 
        margin: 10, 
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
      height: 180, 
      width: 300, 
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30, 
      margin: 30,
    },
    text: { 
      color: 'white',
      fontSize: 18,
      margin: 3, 
    },
});