import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, BackHandler ,Dimensions} from 'react-native';
import { Icon, Left, Body, Right } from 'native-base';
import {WebView} from "react-native-webview"

const {height} = Dimensions.get("screen")

export default class App extends Component {
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

       
          </Body>

          <Right style={{  flex: 0.2, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => BackHandler.exitApp()}>

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
    height: height/1.19,
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
     height: 40, 
     backgroundColor: '#1a2b48', 
     flexDirection: 'row', 
     justifyContent: "space-between", 
     width: '100%',
     position:'relative'
    
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