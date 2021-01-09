import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView} from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
 render(){
   return(
     <View>
     <tabNavigator/>
     <TouchableOpacity
      style={styles.submitButton}
      onPress={this.submitStory}
     >
      
       <Text>SUBMIT</Text>
       </TouchableOpacity>
       
     </View>
   )
 }
}
const tabNavigator=createBottomTabNavigator({
  ReadStory:{screen:ReadStoryScreen},
  WriteStory:{screen:WriteStoryScreen}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
