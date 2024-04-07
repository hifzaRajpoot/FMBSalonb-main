import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getFormattedDateFull } from "../screens/helpers/dayjs"
import {Ionicons} from "@expo/vector-icons"


export default function () {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DobVale, setDobValue] = useState("");
  const [gender, setGender] = useState("Female");
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
  const onFemalePressed =()=>{
    setGender("Female")

  };
  const onMalePressed =()=>{
    setGender("Male")
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
     <View className={"flex flex-row justify-between p-4"}>
          <Text>Gender: </Text>

          <TouchableOpacity
            onPress={onMalePressed}
            className={"flex flex-row items-center"}
          >
            <Ionicons
              name={gender === "Male" ? "radio-button-on" : "radio-button-off"}
              size={25}
              color={"blue"}
            />
             <Text>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity className={"flex flex-row items-center "} onPress={onFemalePressed}>
          <Ionicons name={gender=== "Female" ? "radio-button-on": "radio-button-off"}
          size={25}
          color={"pink"}/>
           <Text>Female</Text>
          </TouchableOpacity>
          </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View className={"flex-none p-5"}>
        <TouchableOpacity className={"p-5 bg-green-300 rounded-md items-center"}>
          <Text className={"text-lg text-green-800"}>Sign up</Text>
        </TouchableOpacity>
      </View>
      </View> 
      
      
      
    </View>
    
  )
   
}
