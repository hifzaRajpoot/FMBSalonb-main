import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView,ActivityIndicator } from 'react-native'
import React from 'react'
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getFormattedDateFull } from "../screens/helpers/dayjs"
import {Ionicons} from "@expo/vector-icons"
import { attemptToSignup, attempttoSendData } from '../services/signup.services';



export default function () {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DobVale, setDobValue] = useState("");
  const [gender, setGender] = useState("Female");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  
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
  const onSignupPressed = async () => {
    setIsLoading(true);
    let response = await attemptToSignup(email, password);
    await attemptToSignup(firstName, lastName, dobValue, gender, email);
    setIsLoading(false);
  };
  
  
 
  return (
    
    <ScrollView>
    <View className={"flex flex-1"}> 
    <View className ={"flex flex-1 "} >
      {/* logo area */}
    </View>

 {/* form area */}
 <View className = {"flex flex-auto px-5"}>
     <TextInput placeholder="First Name" onChangeText = {setFirstName} className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Last Name" onChangeText = {setLastName} className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Email" onChangeText={setEmail} className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Password" onChangeText={setPassword} className={"border-b-2 border-b-green-300 rounded-md my-4 p-2"}/>
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
      
        <TouchableOpacity className={"p-5 bg-green-300 rounded-md items-center justify-center flex flex-row "} onPress={onSignupPressed}>
        {isLoading === true ?
        <ActivityIndicator size={30} /> 
        : null}
          <Text className={"text-lg text-green-800"}> {isLoading === true ? "Wait" : "Sign up" }
          
          </Text>
        </TouchableOpacity>
      </View>
       
      </View> 
      
     
      
    </View>
    </ScrollView>
  );
   
};
