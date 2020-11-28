import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import db from "../config.js";


export default class WriteStoryScreen extends React.Component {
  constructor()
  {
     super();
    this.state={
      title:"",
      author:"",
      story:"",
    }
  }
  submitStory=async()=>{    
    db.collection("users").add({
      story: this.state.story,
      title:this.state.title,
      author:this.state.author
    })
    ToastAndroid.show("Story Submitted", ToastAndroid.SHORT);
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Stories', 
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <View>
        <KeyboardAvoidingView behavior="padding" enabled>
            <TextInput             
            placeholder="Author"
            onChangeText={text => {
              this.setState({
                author: text
              });
            }}
            ></TextInput>

            <TextInput             
            placeholder="Title"
            onChangeText={text => {
              this.setState({
                title: text
              });
            }}
            ></TextInput>

            <TextInput             
            placeholder="Story"
            multiline = {true}
            onChangeText={text => {
              this.setState({
                story: text
              });
            }}
            ></TextInput>
            </KeyboardAvoidingView>
            </View>
            <TouchableOpacity>
            style = {styles.submitButton}
            onPress={this.submitStory}
            <Text style = {styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    submitButton:{      
    backgroundColor: "#FBC02D",
    width: 100,
    height: 50
    },
    
    submitText:{      
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
    }
  })