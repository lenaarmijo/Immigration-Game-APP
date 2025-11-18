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
    arrow: { 
        alignSelf: "flex-start",
        fontSize: 30,
        color: "white",
        margin: 40, 
    },
    title: { 
        color: "white",
        fontSize: 30, 
        marginLeft: 180, 
        marginRight: 240, 
        marginTop: 40,
      },
    nonno: { 
        height: 250, 
        width: 250, 
        alignSelf: 'center',
    },
    box: { 
        height: 300, 
        width: 350, 
        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 2, 
        borderRadius: 50,
    },
    text: { 
        color: "white",
        fontSize: 25, 
        margin: 8, 
    },
    button: { 
        borderRadius: 70, 
        height: 60, 
        width: 60, 
        borderWidth: 2, 
        borderColor: 'green',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, 
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    btext: { 
        color: 'red',
        fontSize: 30, 
    },
});