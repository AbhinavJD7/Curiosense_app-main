import { View, Text, StyleSheet, Alert,Image,TextInput } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../../components/Forms/inputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  // States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle registration
  const handleASubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please fill all Fields");
        setLoading(false);
        return;
      }

      const { data } = await axios.post("http://192.168.232.175:8080/api/v1/auth/register", {
        name,
        email,
        password,
      });

      // Store the user data in AsyncStorage
      await AsyncStorage.setItem('@auth', JSON.stringify(data));

      alert(data && data.message);
      navigation.navigate("Login");
      console.log("Register Data==>", { name, email, password });
      setLoading(false);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

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
           Create an Account
        </Text>      
      </View>     
      <View style={{ marginHorizontal: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          keyboardType="default"
          value={name}
          onChangeText={setName} // Use onChangeText instead of setValue
        />
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
        btnTitle="Register"
        loading={loading}
        handleASubmit={handleASubmit}
      />
      <Text style={styles.linkText}>
        Already Registered,
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}> LOGIN</Text>
      </Text>
    </View>
  );
};

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
  hiWelcomeBack: {
    marginTop:-60,
    fontSize: 30,
    width: "100%",
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
    height: "20%", // Adjust height as needed
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:"40%",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,

  },
});

export default Register;
