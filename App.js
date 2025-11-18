import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { s } from "./App.style";
import Constants from 'expo-constants';
import { Home } from './components/Home/home';
import wooden from './assets/wooden.png';
import { StartPage } from './components/Startpage/StartPage';
import { ChangePage } from './components/changepage';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NonnoStart } from './components/Nonno/NonnoStart';
import { Startnino } from './components/Nino/Startnino';
import { Intro1 } from './components/Nino/intro1';
import { Intro2 } from './components/Nino/intro2';
import { House } from './components/Nino/House';
import { HullHouse } from './components/Nino/HullHouse';
import { JobH } from './components/Nino/JobH';
import { Hotel } from './components/Nino/Hotel';
import { JobM } from './components/Nino/JobM';
import { TunnelM } from './components/Nino/TunnelM';
import { TunnelH } from './components/Nino/TunnelH';
import { MarketH } from './components/Nino/MartketH';
import { MarketM } from './components/Nino/MartketM';
import { Letter1 } from './components/Nino/Letter1';
import { Letter2 } from './components/Nino/letter2';
import { Letter3 } from './components/Nino/letter3';
import { Letter4 } from './components/Nino/letter4';
import { Answer1 } from './components/Nino/Answer1';
import { Answer2 } from './components/Nino/Answer2';
import { Answer3 } from './components/Nino/Answer3';
import { Answer4 } from './components/Nino/Answer4';
import { Answer11 } from './components/Nino/Answer11';
import { Answer22 } from './components/Nino/Answer22';
import { Answer33 } from './components/Nino/Answer33';
import { Answer44 } from './components/Nino/Answer44';
import { Leave } from './components/Nino/leave';
import { Continue1 } from './components/Nino/continue1';
import { Continue2 } from './components/Nino/continue2';
import { Continue3 } from './components/Nino/continue3';
import { Continue4 } from './components/Nino/continue4';
import { Continue11 } from './components/Nino/continue11';
import { Continue22 } from './components/Nino/continue22';
import { Continue33 } from './components/Nino/continue33';
import { Continue44 } from './components/Nino/continue44';
import { Sacco } from './components/Nino/Sacco';
import { Plane1 } from './components/Nonno/NonnoPlane';
import { NonnoHouse } from './components/Nonno/NonnoHouse';
import { Work } from './components/Nonno/Work';
import { WorkAnswerA } from './components/Nonno/WorkAnswerA';
import { WorkAnswerB } from './components/Nonno/WorkAnswerb';
import { MarriageB } from './components/Nonno/MarriageB';
import { MarriageA } from './components/Nonno/MarriageA';
import { SayYesA } from './components/Nonno/SayyesA';
import { SayNoA } from './components/Nonno/SaynoA';
import { SayYesB } from './components/Nonno/SayyesB';
import { SayNoB } from './components/Nonno/SayNoB';
import { JoinGangNA } from './components/Nonno/JoinGanyNA';
import { JoinGangNB } from './components/Nonno/JoinGangNB';
import { JoinGangYA } from './components/Nonno/JoinGangYA';
import { JoinGangYB } from './components/Nonno/JoinGangYB';
import { YJoinGangY } from './components/Nonno/YJoinGangY';
import { YJoinGangN } from './components/Nonno/YJoinGangN';
import { NJoinGangY } from './components/Nonno/NJoinGangY';
import { NJoinGangN } from './components/Nonno/NoJoinGangN';
import { Fail} from './components/Nonno/Fail';
import { Yay } from './components/Nonno/Yay';
import { ModernStart } from './components/Lena/ModernStart';
import { CharacterProfile1 } from './components/Lena/CharacterOne/CharacterProfile1';
import { CharacterProfile2 } from './components/Lena/CharacterTwo/CharacterTwo';
import { CharacterProfile3 } from './components/Lena/CharactertThree/CharacterThree';
import { Start } from './components/Lena/CharacterOne/Start';
import { Start3 } from './components/Lena/CharactertThree/Start3';
import { Start2 } from './components/Lena/CharacterTwo/Start2';
import { WorkVisa } from './components/Lena/CharacterOne/WorkVisa';
import { H2A } from './components/Lena/CharacterOne/H2A';
import { H2B } from './components/Lena/CharacterOne/H2B';
import { H1B } from './components/Lena/CharacterOne/H1B';
import { Assylum } from './components/Lena/CharacterOne/Assylum';
import { Assylum2 } from './components/Lena/CharacterOne/Assylum2';
import { Assylum22 } from './components/Lena/CharacterTwo/Assylum22';
import { Assylum2E } from './components/Lena/CharacterTwo/Assylum2E';
import { H2AFail } from './components/Lena/CharacterOne/H2Afail';
import { H2BFail } from './components/Lena/CharacterOne/H2Bfail';
import { H1BFail } from './components/Lena/CharacterOne/H1Bfail';
import { MarriageVisa } from './components/Lena/CharacterOne/MarriageVisa';
import { MarriageFail } from './components/Lena/CharacterOne/MarriageFail';
import { WorkVisa2 } from './components/Lena/CharacterTwo/WorkVisa2';
import { MarriageVisa2 } from './components/Lena/CharacterTwo/MarriageVisa2';
import { MarriageFail2 } from './components/Lena/CharacterTwo/MarriageFail2';
import { H2A2 } from './components/Lena/CharacterTwo/H2A2';
import { H2B2 } from './components/Lena/CharacterTwo/H2B2';
import { H1B2, H1BSecond } from './components/Lena/CharacterTwo/H1B2';
import { H1B2Fail } from './components/Lena/CharacterTwo/H1B2Fail';
import { H2B2Fail } from './components/Lena/CharacterTwo/H2B2Fail';
import { H2A2Fail } from './components/Lena/CharacterTwo/H2A2Fail';
import { Marriage3 } from './components/Lena/CharactertThree/Marriage3';
import { MarriageFail3 } from './components/Lena/CharactertThree/MarriageFail3';
import { Assylum3 } from './components/Lena/CharactertThree/Asylum3';
import { Assylum3Fail } from './components/Lena/CharactertThree/Asylum3Fail';
import { WorkVisa3 } from './components/Lena/CharactertThree/WorkVisa3';
import { H2A3 } from './components/Lena/CharactertThree/H2A3';
import { H2B3 } from './components/Lena/CharactertThree/H2B3';
import { H1B3 } from './components/Lena/CharactertThree/H1B3';
import { H1B3Fail } from './components/Lena/CharactertThree/H1B3Fail';
import { H2A3Fail } from './components/Lena/CharactertThree/H2A3Fail';
import { H2B3Fail } from './components/Lena/CharactertThree/H2B3Fail';
import { ImmigrationHome } from './components/Lena/CharacterOne/ImmigrationHome';
import { ImmigrationGood } from './components/Lena/CharacterOne/ImmigrationGood';
import { ImmigrationBad } from './components/Lena/CharacterOne/ImmigrationBad';
import { ImmigrationBad2 } from './components/Lena/CharacterTwo/ImmigrationBad2';
import { ImmigrationGood2 } from './components/Lena/CharacterTwo/ImmigrationGood2';
import { ImmigrationHome2 } from './components/Lena/CharacterTwo/ImmigrationHome2';
import { ImmigrationHome3 } from './components/Lena/CharactertThree/ImmigrationHome3';
import { ImmigrationGood3 } from './components/Lena/CharactertThree/ImmigrationGood3';
import { ImmigrationBad3 } from './components/Lena/CharactertThree/ImmigrationBad3';



const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background : "Transparent",
  },
};

export default function App() {
 return (
  <NavigationContainer theme={navTheme}>
  <SafeAreaProvider>
    <SafeAreaView style={s.container}>
          <Stack.Navigator
            screenOptions={{headerShown: false, animation: "fade"}}
           initialRouteName="Home"> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="StartPage" component={StartPage} />
            <Stack.Screen name="NonnoStart" component={NonnoStart} />
            <Stack.Screen name="Startnino" component={Startnino} />
            <Stack.Screen name="Intro1" component={Intro1} />
            <Stack.Screen name="Intro2" component={Intro2} />
            <Stack.Screen name="House" component={House} />
            <Stack.Screen name="HullHouse" component={HullHouse} />
            <Stack.Screen name="JobH" component={JobH} />
            <Stack.Screen name="Hotel" component={Hotel} />
            <Stack.Screen name="JobM" component={JobM} />
            <Stack.Screen name="TunnelM" component={TunnelM} />
            <Stack.Screen name="TunnelH" component={TunnelH} />
            <Stack.Screen name="MarketH" component={MarketH} />
            <Stack.Screen name="MarketM" component={MarketM} />
            <Stack.Screen name="Letter1" component={Letter1} />
            <Stack.Screen name="Letter2" component={Letter2} />
            <Stack.Screen name="Letter3" component={Letter3} />
            <Stack.Screen name="Letter4" component={Letter4} />
            <Stack.Screen name="Answer1" component={Answer1} />
            <Stack.Screen name="Answer2" component={Answer2} />
            <Stack.Screen name="Answer3" component={Answer3} />
            <Stack.Screen name="Answer4" component={Answer4} />
            <Stack.Screen name="Answer11" component={Answer11} />
            <Stack.Screen name="Answer22" component={Answer22} />
            <Stack.Screen name="Answer33" component={Answer33} />
            <Stack.Screen name="Answer44" component={Answer44} />
            <Stack.Screen name="Leave" component={Leave} />
            <Stack.Screen name="Continue1" component={Continue1} />
            <Stack.Screen name="Continue2" component={Continue2} />
            <Stack.Screen name="Continue3" component={Continue3} />
            <Stack.Screen name="Continue4" component={Continue4} />
            <Stack.Screen name="Continue11" component={Continue11} />
            <Stack.Screen name="Continue22" component={Continue22} />
            <Stack.Screen name="Continue33" component={Continue33} />
            <Stack.Screen name="Continue44" component={Continue44} />
            <Stack.Screen name="Sacco" component={Sacco} />
            <Stack.Screen name="Plane1" component={Plane1} />
            <Stack.Screen name="NonnoHouse" component={NonnoHouse} />
            <Stack.Screen name="Work" component={Work} />
            <Stack.Screen name="WorkAnswerA" component={WorkAnswerA} />
            <Stack.Screen name="WorkAnswerB" component={WorkAnswerB} />
            <Stack.Screen name="MarriageB" component={MarriageB} />
            <Stack.Screen name="MarriageA" component={MarriageA} />
            <Stack.Screen name="SayYesA" component={SayYesA} />
            <Stack.Screen name="SayNoA" component={SayNoA} />
            <Stack.Screen name="SayYesB" component={SayYesB} />
            <Stack.Screen name="SayNoB" component={SayNoB} />
            <Stack.Screen name="JoinGangNA" component={JoinGangNA} />
            <Stack.Screen name="JoinGangNB" component={JoinGangNB} />
            <Stack.Screen name="JoinGangYA" component={JoinGangYA} />
            <Stack.Screen name="JoinGangYB" component={JoinGangYB} />
            <Stack.Screen name="YJoinGangY" component={YJoinGangY} />
            <Stack.Screen name="YJoinGangN" component={YJoinGangN} />
            <Stack.Screen name="NJoinGangY" component={NJoinGangY} />
            <Stack.Screen name="NJoinGangN" component={NJoinGangN} />
            <Stack.Screen name="Fail" component={Fail} />
            <Stack.Screen name="Yay" component={Yay} />
            <Stack.Screen name="ModernStart" component={ModernStart} />
            <Stack.Screen name="CharacterProfile1" component={CharacterProfile1} />
            <Stack.Screen name="CharacterProfile2" component={CharacterProfile2} />
            <Stack.Screen name="CharacterProfile3" component={CharacterProfile3} />
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Start3" component={Start3} />
            <Stack.Screen name="Start2" component={Start2} />
            <Stack.Screen name="WorkVisa" component={WorkVisa} />
            <Stack.Screen name="H2A" component={H2A} />
            <Stack.Screen name="H2B" component={H2B} />
            <Stack.Screen name="H1B" component={H1B} />
            <Stack.Screen name="Assylum" component={Assylum} />
            <Stack.Screen name="Assylum2" component={Assylum2} />
            <Stack.Screen name="Assylum22" component={Assylum22} />
            <Stack.Screen name="Assylum2E" component={Assylum2E} />
            <Stack.Screen name="H2AFail" component={H2AFail} />
            <Stack.Screen name="H2BFail" component={H2BFail} />
            <Stack.Screen name="H1BFail" component={H1BFail} />
            <Stack.Screen name="MarriageVisa" component={MarriageVisa} />
            <Stack.Screen name="MarriageFail" component={MarriageFail} />
            <Stack.Screen name="WorkVisa2" component={WorkVisa2} />
            <Stack.Screen name="MarriageVisa2" component={MarriageVisa2} />
            <Stack.Screen name="MarriageFail2" component={MarriageFail2} />
            <Stack.Screen name="H2A2" component={H2A2} />
            <Stack.Screen name="H2B2" component={H2B2} />
            <Stack.Screen name="H1BSecond" component={H1BSecond} />
            <Stack.Screen name="H1B2Fail" component={H1B2Fail} />
            <Stack.Screen name="H2B2Fail" component={H2B2Fail} />
            <Stack.Screen name="H2A2Fail" component={H2A2Fail} />
            <Stack.Screen name="Marriage3" component={Marriage3} />
            <Stack.Screen name="MarriageFail3" component={MarriageFail3} />
            <Stack.Screen name="Assylum3" component={Assylum3} />
            <Stack.Screen name="Assylum3Fail" component={Assylum3Fail} />
            <Stack.Screen name="WorkVisa3" component={WorkVisa3} />
            <Stack.Screen name="H2A3" component={H2A3} />
            <Stack.Screen name="H2B3" component={H2B3} />
            <Stack.Screen name="H1B3" component={H1B3} />
            <Stack.Screen name="H1B3Fail" component={H1B3Fail} />
            <Stack.Screen name="H2A3Fail" component={H2A3Fail} />
            <Stack.Screen name="H2B3Fail" component={H2B3Fail} />
            <Stack.Screen name="ImmigrationHome" component={ImmigrationHome} />
            <Stack.Screen name="ImmigrationGood" component={ImmigrationGood} />
            <Stack.Screen name="ImmigrationBad" component={ImmigrationBad} />
            <Stack.Screen name="ImmigrationBad2" component={ImmigrationBad2} />
            <Stack.Screen name="ImmigrationGood2" component={ImmigrationGood2} />
            <Stack.Screen name="ImmigrationHome2" component={ImmigrationHome2} />
            <Stack.Screen name="ImmigrationHome3" component={ImmigrationHome3} />
            <Stack.Screen name="ImmigrationGood3" component={ImmigrationGood3} />
            <Stack.Screen name="ImmigrationBad3" component={ImmigrationBad3} />
          </Stack.Navigator>
    </SafeAreaView>
  </SafeAreaProvider>
  </NavigationContainer>
 );
}

