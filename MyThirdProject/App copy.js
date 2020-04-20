import React from 'react';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My name is {props.name}. I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alifnItems: 'center'
    }} >
      <Text> Weclome to CIS340</Text>
      <Student name="Andrea Brady" />
      <Student name= "Nicole Puccetti" />
      <Student name= "Ayden Eberhardt"/>
      <Student name= "Jamie Bonnarens"/>
      </View>
  );

}