import * as React from 'react'
import {Text,TouchableOpacity,Button,View,TextInput, StyleSheet} from 'react-native'
export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    render(){
        return(
            <View>
            <TextInput style={styles.ButtonSheet}
            placeholder= "ENTER TITLE OF STORY"
            onChangeText={(text)=>{
                this.setState({
                    title:text
                })
            }}
         />
             <TextInput style={styles.ButtonSheet}
             placeholder= "ENTER THE NAME OF THE AUTHOR"
             onChangeText={(text)=>{
                 this.setState({
                    author:text
               })
            }} 
         />
            <TextInput style={styles.ButtonSheet}
            placeholder= "WRITE YOUR STORY HERE"  
            onChangeText={(text)=>{
                this.setState({
                    story:text
                })
            }}
            />

            <Button title= "SAVE"/>
            <Text>WELCOME TO WRITE STORY SCREEN</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ButtonSheet:{
        borderColor:'red',
        border:'solid',
        fontSize:25,
        width:200,
        height:35,
        color:'purple'
      }
})