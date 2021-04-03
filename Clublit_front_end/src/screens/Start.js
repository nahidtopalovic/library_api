import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  Button
} from "react-native";

function Start(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.buttonRowColumn}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
          
            style={styles.button}
          >
            <Button   onPress={() => props.navigation.navigate("Signup")} title="Create Account" ></Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PwForgot")}
            style={styles.button3}
          >
            <Text style={styles.text4}>Have an account already?</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/clublit!_logo2.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PwForgot")}
        style={styles.button4}
      >
        <Text style={styles.text5}>Have an account already?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={styles.button2}
      >
        <Text style={styles.text3}>Have an account already?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  button: {
 
  
    alignSelf:"center",
    flex:1
    
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    alignSelf: "center"
  },
  button3: {
    height: 39,
    backgroundColor: "rgba(230, 230, 230,1)",
    flex: 1,
    marginLeft: 531
  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -22,
    marginLeft: 101
  },
  buttonRow: {
    height: 81,
    flexDirection: "row",
    marginTop: 430,
    marginLeft: 48
  },
  image: {
    width: 409,
    height: 409,
    marginTop: -511
  },
  buttonRowColumn: {
    marginTop: 75,
    marginLeft: -17,
    marginRight: -819
  },
  button4: {
    height: 39,
    backgroundColor: "rgba(230, 230, 230,1)",
    flex: 1,
    marginBottom: 68,
    marginTop: 35,
    marginLeft: 399,
    marginRight: -1190
  },
  text5: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -22,
    marginLeft: 370
  },
  button2: {
    height: 39,
    marginBottom: 45,
    alignSelf: "center",

  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 3
  }
});

export default Start;
