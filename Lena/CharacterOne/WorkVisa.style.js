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
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    container1: { 
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    title: { 
        color: "white",
        fontSize: 30, 
        marginLeft: 180, 
        marginRight: 240, 
        marginTop: 30,
      },
    nonno: { 
        height: 270, 
        width: 270, 
        alignSelf: 'center',
        marginTop: 5, 
    },
    img: { 
        flex: 1, 
    },
    button: {
        alignSelf: 'flex-end',
        height: 70, 
        width: 225, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderWidth: 2, 
        borderColor: 'red',
        borderRadius: 20, 
        margin: 10,
        marginRight: 70,
    },
    box: {
        height: 90, 
        width: 720, 
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      text: { 
        color: 'white',
        fontSize: 14,
      },
      btext: {
        color: 'white',
        fontSize: 16,
      },
});