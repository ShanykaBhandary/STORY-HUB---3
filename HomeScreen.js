import * as React from 'react'
import {Text,TextInput,View,Button,StyleSheet, TouchableOpacity} from 'react-native'
export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            text:''
        }
    }
    render(){
        return(
            <View>
              <TextInput 
                 style={StyleSheet.inputBox}
                 onChangeText={text=>{
                    this.setState({
                    text:text,
                     isSearchPressed: false,
                     word : "Loading...",
                     lexicalCategory :'',
                     examples : [],
                     defination : ""
                    });
              }}
              value={this.state.text}
              />
              <TouchableOpacity 
               style={StyleSheet.searchButton}
               onPress={()=>{
                   this.setState({isSearchPressed:true});
                   this.getWord(this.state.text)
               }}
              />
            </View>
        )
    }
}

getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url ="https://rupinwhitehatjr.github.io/dictionary/"+searchKey+"json"
    //console.log(url)
    return fetch(url)
    .then((data)=>{
        if(data.status===200)
        {
            return data.json()
        }
        else
        {
            return null
        }
    })
    .then((response)=>{
        //console.log(response)

        var responseObject = response
        //var word = responseObject.word
        //var lexicalCategory = responseObject.results[0].lexicalEnteries[0].lexicalCategory.text
        if(responseObject)
        {
            var wordData = responseObject.definations[0]

            var definition=wordDat.description
            var lexicalCategory=wordData.wordType

            this.setState({
                "word" : this.state.text,
                "definition":definition,
                "lexicalCategory": lexicalCategory
            })
        }
        else
        {
           this.setState({
               "word" : this.state.text,
               "definition" :"Not Found"
           })
        }
    })
}