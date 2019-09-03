import React from 'react';
import {
 StyleSheet,
 Text,
 View,
 KeyboardAvoidingView,
 ScrollView,
 TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';
import VehiclItem from '../components/VehiclItem';



class ListingEditorScreen extends React.Component {
 static navigationOptions = ({ navigation }) => {
   return {
     title: 'Login',
     //navigation.getParam('otherParam', 'A Nested Details Screen'),
     headerLeft: (
       <TouchableOpacity
         style={{ paddingLeft: 15 }}
         onPress={() => {
           navigation.goBack(null);
         }}
       >
         <Ionicons name={'ios-close'} size={44} color={'#aaa'} />
       </TouchableOpacity>
     ),
   };
 };
 render() {
   return (
     <KeyboardAvoidingView
       style={{
         flex: 1,
         backgroundColor: 'white',
       }}
       behavior="padding"
       keyboardVerticalOffset={64}
     >
       <ScrollView
         contentContainerStyle={{
           flex: 1,
           flexDirection: 'column',
           justifyContent: 'center',
         }}
       >  
        <RoundButton
            iconName={'ios-add'}
            style={{ marginTop: 10 }}
            title={'로그인'}
            onPress={() => {
                this.props.navigation.navigate('Login');
              }}
        />
       </ScrollView>
     </KeyboardAvoidingView>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   alignSelf: 'center',
   flexDirection: 'column',
   padding: 30,
   alignItems: 'center',
 },
});

export default ListingEditorScreen;