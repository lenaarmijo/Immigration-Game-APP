import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
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
        marginTop: 30,
      },
    nonno: { 
        height: 270, 
        width: 270, 
        alignSelf: 'center',
        marginTop: 20, 
    },
    img: { 
        height: 250,
        width: 230, 
        borderWidth: 2,
        borderColor: 'white',
        margin: 5, 
        marginLeft: 50,
    },
    button: {
        height: 80, 
        width: 220, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderWidth: 2, 
        borderColor: 'white',
        borderRadius: 20, 
        margin: 10,
    },
    box: {
        height: 65, 
        width: 720, 
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 2,
      },
      text: { 
        color: 'white',
        fontSize: 14,
      },
      btext: {
        color: 'white',
        fontSize: 18,
      },
});