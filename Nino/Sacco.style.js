import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
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
    button: {
        height: 160, 
        width: 160, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderWidth: 2, 
        borderColor: 'white',
        borderRadius: 20, 
        margin: 20,
        alignSelf: 'flex-end',
    },
    box: {
        height: 90, 
        width: 400, 
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        alignSelf: 'center',
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