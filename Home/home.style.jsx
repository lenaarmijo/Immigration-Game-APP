import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const s = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: { 
        flexDirection: "row",
    },
    red: {
         height: hp('100%'),
        width: wp('33.3%'),
        flex: 2,
        backgroundColor: "red",
    },
    green: {
        height: hp('100%'),
        width: wp('65%'),
        backgroundColor: "green",
    },
    white: {
        height: hp('100%'),
        width: wp('65%'),
        backgroundColor: "white",
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    button: { 
        borderRadius: "90%",
        backgroundColor: "black",
        height: 150, 
        width: 350, 
        margin: 200,
        justifyContent: 'center',
      alignItems: 'center',
      /*elevation: 8, 
        shadowColor: "#000",
        shadowOffset: { 
            width: 0, 
            height: 2, 
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, */
    },
    title: { 
        color: "white",
        fontSize: 100,
        fontWeight: "bold",
    },
});

/*<View style={s.row}>
<View style={s.green}>
</View>
<View style={s.white}>
</View>
<View style={s.red}></View>
</View>*/