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
        height: 80, 
        width: 220, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderWidth: 2, 
        borderColor: 'red',
        borderRadius: 20, 
        margin: 10,
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
        margin: 10,
      },
      text: { 
        color: 'white',
        fontSize: 15,
      },
      btext: {
        color: 'white',
        fontSize: 20,
      }
});