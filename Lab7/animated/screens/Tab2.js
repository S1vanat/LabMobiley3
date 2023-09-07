import React,{useRef} from "react";
import { Animated,View, Text, StyleSheet, Button, container,Easing } from "react-native";

const Tab_2 = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const spinnow = useRef(new Animated.Value(0)).current;

  const spin = spinnow.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const fadeIn = () =>{
   Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
       Animated.timing(spinnow, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(spinnow, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      fadeAnim.setValue(1);
      spinnow.setValue(0);
    });
  }
  return ( 
  <View style={styles.container}> 
      <Animated.Image 
      // style={[styles.fadingContainer,{opacity:fadeAnim},]}
      style={{ width: 180, height: 150, transform: [{ rotate: spin }],opacity:fadeAnim }}
      source={require("../assets/IT_Logo.png")}
      />
      <Button title="Sequence" onPress={fadeIn}></Button>
    </View>
     );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 50,
        justifyContent:"center",
        alignItems:"center"
        
      },
      fadingContainer: {
        width: 250,
        height: 50,
        // backgroundColor: "red",
        opacity:0
      }
    });
  export default Tab_2;