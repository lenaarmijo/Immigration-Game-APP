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
    img1: { 
        height: 150, 
        width: 150, 
        borderWidth: 2, 
        borderColor: 'white', 
        margin: 3, 
      },
      img2: { 
          height: 150, 
          width: 100, 
          borderWidth: 2, 
          borderColor: 'white', 
          margin: 3, 
        },
        img3: { 
          height: 150, 
          width: 230, 
          borderWidth: 2, 
          borderColor: 'white', 
          margin: 3, 
        },
    title: { 
        color: "white",
        fontSize: 30, 
        marginLeft: 180, 
        marginRight: 240, 
        marginTop: 40,
      },
    img: { 
        height: 200, 
        width: 200, 
        borderColor: 'white',
        borderWidth: 2,
        margin: 10,
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
        height: 210, 
        width: 400, 
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        marginLeft: 50,
        alignSelf: 'flex-start',
      },
      text: { 
        color: 'white',
        fontSize: 14,
        margin: 2,
      },
      btext: {
        color: 'white',
        fontSize: 25,
      }
});