import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, BackHandler } from 'react-native';
import { Icon, Left, Body, Right } from 'native-base';
import {WebView} from "react-native-webview"
import RNExitApp from 'react-native-exit-app';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {


  componentWillMount(){   
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount(){ 
    BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton)
}


handleBackButton = () => {
 RNExitApp.exitApp()
// return true
} 
  state={
    currentURL:""
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Left style={{  flex: 0.2 }}>
            <TouchableOpacity onPress={() => this.myWebview.goBack()}>

              <Icon
                name="left"
                color="#42b70f"
                type="AntDesign"
                style={styles.lefticon}
              />

            </TouchableOpacity>
          </Left>
          <Body style={{justifyContent:'center'}}>

            <View style={styles.webView}>
              <Text style={{paddingLeft:5,width:'100%',height:22}}>{this.state.currentURL && this.state.currentURL}</Text>
            </View>
            {/* <TextInput
              placeholderTextColor="black"
      
              placeholder={this.state.currentURL && this.state.currentURL}
              numberOfLines={1}
            
              editable={false}
              ref={webview => { this.myWebview = webview; }}
              
            /> */}
          </Body>

          <Right style={{  flex: 0.2, alignItems: 'center' }}>
              <TouchableOpacity onPress={this.handleBackButton}>

            <Icon
              name="close"
              color="#42b70f"
              type="AntDesign"
              
              style={styles.Close}
              />
              </TouchableOpacity>

          </Right>
        </View>
        <View style={{height:'100%'}}>

        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          ref={webview => { this.myWebview = webview; }}
          source={{ uri: "https://irietrip.com/" }}
          onNavigationStateChange={(e) => {
            
            if(!e.loading){
              this.setState({currentURL:e.url})
            }
          }}
          />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  topView:{
     height: Platform.OS == "ios" ? 80 :  50, 
     backgroundColor: '#1a2b48', 
     flexDirection: 'row', 
     justifyContent: "space-between", 
     width: '100%',
     alignItems:'flex-end',
     position:'relative',
     paddingTop:Platform.OS === "ios" ? 22 : 0
    
    },
    lefticon:{
      top:5,
      height: 40,
      marginLeft: "10%",
      paddingTop: "3%",
      fontSize: 30,
      color:'#42b70f'
    },
    webView:{
       height: 40,
        width: '100%' ,
        backgroundColor:'white',
        borderRadius:20,
        textAlign:'left',
        paddingTop:10 
      },
      Close:{
        top:5,
        height: 40,
        // marginLeft: "10%",
        paddingTop: "3%",
        fontSize: 30,
        color:'#42b70f'
      }  
});