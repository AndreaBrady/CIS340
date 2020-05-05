import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
      <View style={{flex: 2, backgroundColor: 'yellow'}}/>
      <View style={{flex: 3, backgroundColor: 'blue'}}/> 
    </View>
  );
}

