import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import UserCard from "./tugas7/1";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <UserCard 
          name="Bluth George" 
          email="george.bluth@reqres.in" 
          avatar={require("./asset/1.jpg")} 
        />
        <UserCard 
          name="Weaver Janet" 
          email="janet.weaver@reqres.in" 
          avatar={require("./asset/2.jpg")} 
        />
        <UserCard 
          name="Emma Wong " 
          email="emma.wong@reqres.in" 
          avatar={require("./asset/3.jpg")} 
        />
        <UserCard 
          name="Eve Holt" 
          email="eve.holt@reqres.in" 
          avatar={require("./asset/4.jpg")} 
        />        
        <UserCard 
          name="Charles Morris " 
          email=" charles.morris@reqres.in" 
          avatar={require("./asset/5.jpg")} 
        />  
        <UserCard 
          name="Tracey Ramos" 
          email="tracey.ramos@reqres.in" 
          avatar={require("./asset/6.jpg")} 
        />
        <UserCard 
          name="Michael Lawson " 
          email="michael.lawson@reqres.in" 
          avatar={require("./asset/7.jpg")} 
        />
        <UserCard 
          name="Lindsay Ferguson " 
          email=" lindsay.ferguson@reqres.in" 
          avatar={require("./asset/8.jpg")} 
        />
        <UserCard 
          name="Tobias Funke" 
          email=" tobias.funke@reqres.in" 
          avatar={require("./asset/9.jpg")} 
        />        
        <UserCard 
          name="Byron Fields " 
          email=" byron.fields@reqres.in" 
          avatar={require("./asset/10.jpg")} 
        /> 
        <UserCard 
          name="George Edwards" 
          email="george.edwards@reqres.in" 
          avatar={require("./asset/11.jpg")} 
        />        
        <UserCard 
          name="Rachel Howell" 
          email="rachel.howell@reqres.in" 
          avatar={require("./asset/12.jpg")} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
