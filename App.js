import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WriteComplaint from './screens/WriteComplaintScreen';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';


export default class App extends Component{
  render(){
    return(
<AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:HomeScreen},
  Search:{screen:WriteComplaint}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==='Transaction'){
        return(
        <Image
          source={require('./assets/book.png')} 
          style={{width:40,height:40,}} />
          )

      }
      else if(routeName==='Search'){
        return(
          <Image
          source={require('./assets/searchingbook.png')} style={{width:40,height:40}} />
        )
      }
    }
  })
})
const switchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer=createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
