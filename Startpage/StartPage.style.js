import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
    
    },
    row: { 
        flexDirection: "row",
        justifyContent: 'center',
    },
    img: { 
      flex: 1, 
    },
    arrow: { 
      alignSelf: "flex-start",
      fontSize: 30,
      color: "white",
      margin: 20,
    },
    title: { 
      color: "white",
      fontSize: 50, 
      marginLeft: 200, 
      marginRight: 250, 
    },
    text: {
      fontSize: 15,
      color: "white",
    },
    box: { 
      height: 80, 
      width: 200, 
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15, 
      backgroundColor: "#404040",
      borderWidth: 2,
      borderColor: "black",
      marginLeft: 15,
      marginRight: 15, 
      elevation: 8, 
        shadowColor: "#000",
        shadowOffset: { 
            width: 0, 
            height: 2, 
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.84,
    }, 
    Table2: { 
      alignSelf: 'center',
      height: 200,
      width: 330, 
    },
    nonno: { 
      height: 100, 
      width: 100, 
    },
    me: {
      height: 100,
      width: 100, 
    },
});