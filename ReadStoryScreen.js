import { NativeAppEventEmitter } from "react-native";
import * as React from 'react'
import {Text,TouchableOpacity,Button,View,StyleSheet} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <Text>WELCOME TO READ STORY SCREEN</Text>
        )
    }
}