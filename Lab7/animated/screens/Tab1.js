import React,{useRef} from "react";
import { Animated,View, Text, StyleSheet, Button, container } from "react-native";


const Tab1 = (props) => { 
  const springVal = useRef(new Animated.Value(0.3)).current;
  const spring = () =>{
    Animated.spring(springVal,{
      toValue:1,
      friction:1,
      useNativeDriver:true
    }).start(()=>{springVal.setValue(0.3);});}
  
  return(
    <View style={styles.container}>
      <Animated.Image
        style={{width:180, height:150, transform:[{scale:springVal}]}}
        source={require("../assets/IT_Logo.png")}
      />
      <Button title="Spring" onPress={spring}></Button>
    </View> 
    );
  };
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent:"center",
    alignItems:"center"
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "space-around",
  }
  })
export default Tab1;