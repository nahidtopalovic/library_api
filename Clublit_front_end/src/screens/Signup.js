import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Divider from "../components/Divider";

function Signup(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.textInputColumn}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#788793"
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.text4}>50</Text>
        <View style={styles.createYourAccountStackStack}>
          <View style={styles.createYourAccountStack}>
            <Text style={styles.createYourAccount}>Create your account</Text>
            <Image
              source={require("../assets/images/Club_lit_logo_copy.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
          </View>
          <Icon name="arrow-back" style={styles.icon2}></Icon>
        </View>
        <TextInput
          placeholder="username"
          placeholderTextColor="#788793"
          style={styles.textInput4}
        ></TextInput>
      </View>
      <View style={styles.textInputColumnFiller}></View>
      <View style={styles.rect2Column}>
        <View style={styles.rect2}>
          <Divider style={styles.divider}></Divider>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.text3}>Next</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="email address"
          placeholderTextColor="rgba(120,135,147,1)"
          secureTextEntry={true}
          style={styles.textInput2}
        ></TextInput>
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(120,135,147,1)"
          secureTextEntry={true}
          style={styles.textInput3}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  textInput: {
    width: 312,
    height: 42,
    color: "#3080e2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 254,
    marginLeft: 6
  },
  text4: {
    color: "#757575",
    fontSize: 18,
    lineHeight: 20,
    width: 22,
    height: 20,
    alignSelf: "flex-end",
    marginTop: 17
  },
  createYourAccount: {
    top: 112,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 30,
    lineHeight: 50,
    fontFamily: "roboto-700"
  },
  image1: {
    top: 0,
    left: 94,
    width: 138,
    height: 138,
    position: "absolute"
  },
  createYourAccountStack: {
    top: 0,
    left: 0,
    width: 272,
    height: 162,
    position: "absolute"
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#1da1f2",
    fontSize: 35
  },
  createYourAccountStackStack: {
    width: 272,
    height: 162,
    marginTop: -333
  },
  textInput4: {
    width: 312,
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 197,
    marginLeft: 6
  },
  textInputColumn: {
    marginTop: 26,
    marginLeft: 24,
    marginRight: 32
  },
  textInputColumnFiller: {
    flex: 1
  },
  rect2: {
    height: 71,
    width: 375,
    marginBottom: -314
  },
  divider: {
    width: 360,
    height: 1
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#3080e2",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 13,
    marginLeft: 240
  },
  text3: {
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 20,
    alignSelf: "center"
  },
  textInput2: {
    width: 313,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "roboto-regular",
    marginBottom: 65,
    marginLeft: 31
  },
  textInput3: {
    width: 313,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "roboto-regular",
    marginBottom: 165,
    marginLeft: 32
  },
  rect2Column: {
    width: 375,
    marginBottom: 29
  }
});

export default Signup;

  
