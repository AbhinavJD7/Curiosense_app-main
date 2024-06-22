import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Color,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  handlePress,
  isPress
} from "react-native";
import React, { useContext, useState, useCallback, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/Menus/FooterMenu";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

const {height,width} = Dimensions.get('window');
const GradientText = ({ text }) => (
  <View style={styles.container3}>
    <Svg height="50" width="100%">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#e81a22" stopOpacity="1" />
          <Stop offset="1" stopColor="#314088" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#grad)"
        fontSize="33"
        fontWeight="bold"
        x="10"
        y="40"
      >
        {text}
      </SvgText>
    </Svg>
  </View>
);
// const GradientButton = ({ text, onPress }) => (
//   <TouchableOpacity onPress={onPress} style={styles.touchable}>
//     <Svg height="50" width="100%">
//       <Defs>
//         <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
//           <Stop offset="0" stopColor="#e81a22" stopOpacity="1" />
//           <Stop offset="1" stopColor="#314088" stopOpacity="1" />
//         </LinearGradient>
//       </Defs>
//       <SvgText
//         fill="url(#grad)"
//         fontSize="25"
//         fontWeight="bold"
//         x="0"
//         y="44"
//       >
//         {text}
//       </SvgText>
//     </Svg>
//   </TouchableOpacity>
// );
const GradientButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);


const Product = () => {
  return (
  
  <ImageBackground source={require('../assets/Img/Background.png')} style={styles.background}>
   
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollviewcontent}>
          <View style={{width: "60%"}}>
            <GradientText text="Our Products" />
          </View>
          <View style={styles.prod}>
            <Image source={require("../assets/Img/CurioBook2.png")} style={styles.book} />
            <View style={styles.overlayImage2}>
              <GradientButton text="Book Now" onPress={() => alert('Sorry, Under Maintainance')} />
            </View>
          </View>
          <View style={styles.prod}>
            <Image source={require("../assets/Img/CurioCards2.png")} style={styles.book} />
            <View style={styles.overlayImage2}>
              <GradientButton text="Book Now" onPress={() => alert('Sorry, Under Maintainance')} />
            </View>
          </View>
          <View style={styles.prod}>
            <Image source={require("../assets/Img/CurioFit2.png")} style={styles.book} />
            <View style={styles.overlayImage2}>
              <GradientButton text="Book Now" onPress={() => alert('Sorry, Under Maintainance')} />
            </View>
          </View>
          <View style={styles.prod}>
            <Image source={require("../assets/Img/CurioTherapy3.png")} style={styles.book} />
            <View style={styles.overlayImage}>
              <GradientButton text="Book Now" onPress={() => alert('Sorry, Under Maintainance')} />
            </View>
          </View>
       </ScrollView>
        
    <View style={{flex:1, justifyContent:'flex-end'}}></View>
        <FooterMenu />
      </View>

  </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",

    
  },
  background:{
    flex: 1,
    width: '100%',
    height:'100%',
    resizeMode: 'stretch',
  },
  innercontainer:{
    width:"100%",
    height:"100%",
    // alignItems:"center",
    marginLeft: "25%",

  },
  scrollviewcontent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prod: {
    alignItems: "center", // Center image horizontally
    marginVertical: 20, // Add some vertical margin
  },
  gradientTextContainer: {
    height: 50,
    justifyContent:"center", // Center text vertically
  },
  book: {
    width: width * 0.9, // 80% of the screen width
    height: height * 0.8, 
    resizeMode: 'contain', // Ensure the image is not cut off
    borderRadius: 30,
     
  },
  touchable: {
    width: 150,
    height: 50, // Adjust height as needed
    backgroundColor: "#FFCCCB", // Set background color to white
    borderRadius: 10, // Add optional border radius for rounded corners
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000', // Set text color to black
  },
  overlayImage: {
    position: 'absolute', // Enable absolute positioning
    top: '50%', // Place the view in the middle vertically (adjust as needed)
    left: '50%', // Place the view in the middle horizontally (adjust as needed)
    transform: [{ translateX: -200 }, { translateY: 235 }], // Offset to center within parent
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage2: {
    position: 'absolute', // Enable absolute positioning
    top: '50%', // Place the view in the middle vertically (adjust as needed)
    left: '50%', // Place the view in the middle horizontally (adjust as needed)
    transform: [{ translateX: -200 }, { translateY: 280 }], // Offset to center within parent
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Product;
