import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
export function ChangePage({selectedButton, onPress}) {
    function getTextStyle(button){
        return {
            fontWeight: "bold",
            color : selectedButton === button ? "red" : "white",
            fontSize: 100,
        }   
    }

    return (
        <View stlye={s.container}>
            <TouchableOpacity 
            onPress={() => onPress("Start")}
            style={s.button}>
            <Text style={getTextStyle("Start")}>
                Start
            </Text>
            </TouchableOpacity>

        <TouchableOpacity 
        onPress={() =>onPress("Go")}
        style={s.button}>
        <Text style={getTextStyle("Go")}>
          Go
        </Text>
        </TouchableOpacity>
        </View>
    );
}