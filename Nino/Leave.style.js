import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: { 
        flexDirection: "row",
    },
    container1: { 
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: { 
        flex: 1,
        justifyContent: 'center',
    },
    title: { 
        color: "white",
        fontSize: 30, 
        marginLeft: 180, 
        marginRight: 240, 
        marginTop: 40,
      },
    nonno: { 
        height: 280, 
        width: 280, 
        alignSelf: 'center',
    },
    img: { 
        flex: 1, 
    },
    button: {
        height: 160, 
        width: 160, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderWidth: 2, 
        borderColor: 'white',
        borderRadius: 20, 
        margin: 10,
        alignSelf: 'flex-start',
    },
    box: {
        height: 90, 
        width: 400, 
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        alignSelf: 'flex-start',
      },
      text: { 
        color: 'white',
        fontSize: 14,
      },
      btext: {
        color: 'white',
        fontSize: 25,
      }
});