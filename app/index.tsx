import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,

} from "react-native";

const BackgroundRings: React.FC<RingLocationProps> = ({DistanceRight, DistanceBottom, size, duration}) => {
  const scale = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true, // scale supports native driver
    }).start();
  }, []);
  
  return (
    <Animated.View
      style = {{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor: "#ffffff55",
        bottom: DistanceBottom,
        right: DistanceRight,
        zIndex: -1,
        transform: [{ scale }],
  }}/>
  );
};

type RingLocationProps = {
  DistanceRight: number;
  DistanceBottom : number;
  size: number;
  duration: number;
}

const Login = () => {
  const [text, onChangeText] = React.useState("You");

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style = {styles.container}>
            <Text style = {styles.title}>
              Record Room
            </Text>
            <TextInput 
              style = {styles.inputFields} 
              placeholder= "Username"
              placeholderTextColor= "grey"
            />
            <TextInput
              style = {styles.inputFields} 
              placeholder = "Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              />
            <TouchableOpacity style = {styles.buttons}>
              <Text style = {styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttons}>
              <Text style = {styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <BackgroundRings DistanceBottom={-50} DistanceRight={-50} size={300} duration = {1000}/>
            <BackgroundRings DistanceBottom={100} DistanceRight={-100} size={200} duration = {1500}/>
            <BackgroundRings DistanceBottom={-100} DistanceRight={100} size={150} duration = {4000}/>
            <BackgroundRings DistanceBottom={700} DistanceRight={110} size={250} duration = {2500}/>
            <BackgroundRings DistanceBottom={500} DistanceRight={-150} size={400} duration = {3000}/>
            <BackgroundRings DistanceBottom={250} DistanceRight={250} size={300} duration = {5000}/>
          
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#05021aff",
    paddingTop: "50%",
    zIndex: -100,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: "20%",
  },
  inputFields: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
  },
  buttons: {
    backgroundColor: "#062957ff",
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
export {BackgroundRings};