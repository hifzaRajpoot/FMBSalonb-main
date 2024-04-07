import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getFormattedDateFull } from "../screens/helpers/dayjs"



export default function () {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DobVale, setDobValue] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDobValue(date.toString());

    hideDatePicker();
  };
 
  return (
    <View className={"flex flex-1"}> 
    <View className ={"flex flex-1 "} >
      {/* logo area */}
    </View>

 {/* form area */}
 <View className = {"flex flex-auto px-5"}>
     <TextInput placeholder="First Name" className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Last Name" className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Email" className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Password" className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Conform Password" className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <Pressable className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"} onPress={showDatePicker}>
     <Text>
      {DobVale === "" ? "DOB": getFormattedDateFull(DobVale)}
     </Text>
     </Pressable>
      </View> 
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    
  )
   
}
