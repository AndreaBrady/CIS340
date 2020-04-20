import React, {useState} from 'react';
import {Text, View, Button } from 'react-native';

function TV() {

 const [isOff,setIsOff] = useState(true);

return(
<View>
    {"\n\n\n\n"}
    <Text>
      This is {prop.name} TV, and it is {isOff ? "OFF" : "Turn Me On"}
    </Text>
    <Button
      onPress={()=> {
        setIsOff(false);
      }}
      disabled={!isOff}
      title={isOff ? "Turn Me On, Please!" : "Thank You!"}
    />
  </View>
);
}

export default function MultiTVs(){
  return(
    <View>
      <TV name="LG" />
      <TV name= "Sony" />
   </View>
  );
}