import React,{Component} from 'react';
import {View,Text,StyleSheet, KeyboardAvoidingView, TextInput,Image, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            emailId:'',
            password:''
        }
    }
login=async(email,password)=>{
if(email&&password){
    try{
        const response=await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
            this.props.navigation.navigate('Transaction')
        }
    }
    catch(error){
        switch(error.code){
            case 'auth/user-not-found':
                Alert.alert('userDoesnotExist')
                console.log('doesnot exist')
                break
                case 'auth/invalid-email':
                Alert.alert('incorrect Email or Password')
                console.log('invalid')
        }
    }
}
else{
    Alert.alert('Enter Email and Password')
}
}
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center',marginTop:20,}}>
            <View>
                <Image source={require('../assets/booklogo.jpg')} style={{width:200,height:200}}/>
                <Text style={{textAlign:'center',fontSize:30}}>Wily</Text>
            </View>
            <View>
                <TextInput style={styles.text} placeholder='abc@example.com' keyboardType="email-address" 
                onChangeText={(text)=>{this.setState({emailId:text})}} ></TextInput>
                <TextInput style={styles.text} secureTextEntry={true} placeholder="passward" onChangeText={(text)=>{
                    this.setState({passward:text})
                }}></TextInput>
            </View>
            <View>
                <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5
                ,borderRadius:7}} onPress={()=>{this.login(this.state.emailId,this.state.password)}}>
                    <Text style={{textAlign:'center'}}>Login</Text>

                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({
    text:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})