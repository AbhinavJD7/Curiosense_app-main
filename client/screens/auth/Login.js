import { View, Text, StyleSheet, Alert, TextInput, fontSize ,Image} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import InputBox from '../../components/Forms/inputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const Login = ({ navigation }) => {


  // Global state
  const [state, setState] = useContext(AuthContext);
  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle login
  const handleASubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please fill all Fields");
        setLoading(false);
        return;
      }
  
      const response = await axios.post("http://192.168.232.175:8080/api/v1/auth/login", {   //http://192.168.133.175:8080/api/v1/auth/login" //192.168.232.175
        email,
        password,
      });
  
      if (response && response.data) {
        const authData = response.data;
        await AsyncStorage.setItem('@auth', JSON.stringify(authData));
        setState(authData);  // Update the global state
        alert(authData.message);
        navigation.navigate("Home");
        console.log("Login Data==>", { email, password });
      } else {
        throw new Error("Invalid response from server");
      }
  
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again.");
      }
      console.log(error);
    }
  };
  
  // Function to check local storage data
  useEffect(() => {
    const getLocalStorageData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      console.log("Local Storage ==>", data);
    };
    getLocalStorageData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('/Users/abhinavrai/Desktop/Curiosense_App-main/client/assets/Img/Logo_curio.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems:"center"}}>
        <Text style={[styles.hiWelcomeBack]}>
           Hi, Welcome Back! 👋
        </Text>      
      </View>
      <View style={{ marginHorizontal: 20  }}>
      <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          onChangeText={setEmail} // Use onChangeText instead of setValue
        />
        <TextInput
          secureTextEntry={true}
          autoComplete="password"
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword} // Use onChangeText instead of setValue
          style={styles.input}
        />
    </View>
      <SubmitButton
        btnTitle="Login"
        loading={loading}
        handleASubmit={handleASubmit}
      />
      <Text style={styles.linkText}>
        Don't have an Account? 
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        > REGISTER</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: 'red',
  },
  inputField: {
    borderColor: 'black', // Black border color
    borderWidth: 1, // Border width of 1
    borderRadius: 30,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,

  },
  hiWelcomeBack: {
    marginTop:-60,
    fontSize: 25,
    width: 159,
    height: 100,
    textAlign: "center",
    fontWeight: "700",
    marginTop:"-20%"
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: "-50%",
  },
  logo: {
    width: '100%', // 80% of the screen width
    height: 100, // Adjust height as needed
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:"100%",
  }
});

export default Login;