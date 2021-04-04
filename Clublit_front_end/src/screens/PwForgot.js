import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Divider from "../components/Divider";

function PwForgot(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.textInputColumn}>
        <TextInput
          placeholder="new password"
          placeholderTextColor="#788793"
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.text4}>50</Text>
        <Text style={styles.createYourAccount}>
          Enter your new password.
        </Text>
        <Icon name="arrow-back" style={styles.icon2}></Icon>
      </View>
      <View style={styles.textInputColumnFiller}></View>
      <View style={styles.textInput2Column}>
        <TextInput
          placeholder="repeat password"
          placeholderTextColor="rgba(120,135,147,1)"
          secureTextEntry={true}
          style={styles.textInput2}
        ></TextInput>
        <View style={styles.rect2}>
          <Divider style={styles.divider}></Divider>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.text3}>Next</Text>
          </TouchableOpacity>
        </View>
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
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 251,
    marginLeft: 11
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
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    lineHeight: 50,
    marginLeft: 10,
    marginTop: -202
  },
  icon2: {
    color: "#1da1f2",
    fontSize: 35,
    marginTop: -198,
    marginLeft: 5
  },
  textInputColumn: {
    marginTop: 29,
    marginLeft: 19,
    marginRight: 32
  },
  textInputColumnFiller: {
    flex: 1
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
    marginBottom: 282,
    marginLeft: 30
  },
  rect2: {
    height: 71,
    width: 375
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
  textInput2Column: {
    width: 375,
    marginBottom: 29
  }
});

export default PwForgot;
