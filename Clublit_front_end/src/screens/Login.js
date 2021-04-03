import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import Divider from "../components/Divider";

function Login(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.logInToClublitStackColumn}>
        <View style={styles.logInToClublitStack}>
          <Text style={styles.logInToClublit}>Log in to CLUBLIT!.</Text>
          <Image
            source={require("../assets/images/Club_lit_logo_copy.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.username}>username</Text>
        <Text style={styles.text4}>Password</Text>
        <TextInput
          placeholder=""
          secureTextEntry={true}
          style={styles.textInput}
        ></TextInput>
        <Text onPress={() => props.navigation.navigate("PwForgot")} style={styles.text5}>Forgotten your password?</Text>
        <TextInput  placeholder="" style={styles.textInput2}></TextInput>
      </View>
      <View style={styles.logInToClublitStackColumnFiller}></View>
      <View style={styles.rect4}>
        <Divider style={styles.divider}></Divider>
        <TouchableOpacity
            onPress={() => props.navigation.navigate("Signup")}
            style={styles.button}
          >
                    <Button   onPress={() => props.navigation.navigate("Start")} title="Log in">
    
    </Button>
          </TouchableOpacity>
  
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  logInToClublit: {
    top: 124,
    left:40,
    color: "rgba(255,255,255,1)",

    fontSize: 30,
    lineHeight: 50,
    fontFamily: "roboto-700",
    
  },
  image: {
    top: 0,
    left: 101,
    width: 138,
    height: 138,
    position: "absolute"
  },
  logInToClublitStack: {
    width: 259,
    height: 174
  },
  username: {
    color: "rgba(123,139,151,1)",
    fontSize: 16,
    lineHeight: 20,
    marginTop: 85,
    marginLeft: 1
  },
  text4: {
    color: "rgba(123,139,151,1)",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 87
  },
  textInput: {
    width: 339,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 3
  },
  text5: {
    color: "#7b8b97",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 109,
    marginLeft: 65
  },
  textInput2: {
    width: 339,
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: -280
  },
  logInToClublitStackColumn: {
    width: 339,
    marginTop: 26,
    marginLeft: 17
  },
  logInToClublitStackColumnFiller: {
    flex: 1
  },
  rect4: {
    height: 91
  },
  divider: {
    width: 360,
    height: 1
  },
  button2: {
    width: 109,
    height: 50,
    backgroundColor: "#2e7bdb",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 13,
    marginLeft: 240
  },  button: {
    position: "absolute",
    top: -60,
    alignSelf:"center",
    flex: 1,
 
    width: 150
  }


});

export default Login;

