import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center',
    },
    row: { 
        flexDirection: "row",
        alignSelf: 'flex-end',
    },
    img: { 
      flex: 1, 
    },
    arrow: { 
      alignSelf: 'flex-end',
      fontSize: 30,
      color: 'white',
      margin: 10,
    },
    nino: { 
        height: 300, 
        width: 300, 
        alignSelf: 'flex-end',
        marginRight: 10, 
        marginLeft: 30, 
    },
    box: {
      height: 300, 
      width: 320, 
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30, 
        marginRight: 10, 
        marginLeft: 30, 
    },
    text: { 
      color: 'white',
      fontSize: 18,
      margin: 3, 
    },
});