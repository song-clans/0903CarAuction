import React, { Component } from 'react'
import { Text, View,KeyboardAvoidingView,ScrollView,TouchableOpacity,StyleSheet,Alert } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
// import { Icon } from 'react-native-elements'
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'
import IconText from '../components/IconText'

export default class UserEditor extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            headerTitle:(
                <IconText iconName={'ios-hand'} size={20}>
                    회원등록
                </IconText>
            ),
            headerLeft:(
            <TouchableOpacity
                style={{ paddingLeft: 15 }}
                onPress={() => {
                navigation.goBack(null);
                }}
            >
                <Ionicons name={'ios-close'} size={44} color={'#aaa'} />
            </TouchableOpacity>
            ),
        }
    }
    render() {
        return (
        
            <KeyboardAvoidingView
                style={{
                    flex:1,
                    backgroundColor:'white',
                }}
                behavior = 'padding'
                keyboardVerticalOffset={64}
                >
                <ScrollView
                    contentContainerStyle={{
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                >
                    <View style={styles.container}>
                        <IconTextInput
                            style={{ marginTop: 10 }}
                            iconName={'ios-disc'}
                            placeholder={'class'}
                            autoFocus={true}
                        />
                        <IconTextInput
                            style={{ marginTop: 10 }}
                            iconName={'ios-wallet'}
                            placeholder={'balnce'}
                            keyboardType={'number-pad'}
                        />
                        <IconTextInput
                            style={{ marginTop: 10 }}
                            iconName={'ios-at'}
                            placeholder={'email'}
                        />
                        <IconTextInput
                            style={{ marginTop: 10 }}
                            iconName={'ios-help'}
                            placeholder={'first-name'}
                            
                        />
                        <IconTextInput
                            style={{ marginTop: 10 }}
                            iconName={'ios-help'}
                            placeholder={'last-name'}
                        />
                        <RoundButton
                            iconName={'ios-add'}
                            style={{ marginTop: 10 }}
                            title={'등록 하기'}
                            onPress = {()=>{
                                Alert.alert(
                                    '로그인 하시겠습니까?',
                                    '',
                                    [
                                        {
                                        text: 'OK', onPress: () => {this.props.navigation.navigate('MyCars')}},
                                        {
                                        text: 'Cancel',
                                        onPress: () => console.log('Cancel Pressed'),
                                        style: 'cancel',
                                        },
                                        
                                    ],
                                    {cancelable: false},
                                )
                            }}
                        />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        flexDirection:'column',
        padding:30,
        alignItems:'center'
    }
})
