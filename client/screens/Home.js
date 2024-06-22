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
/*import { PostContext } from "../context/postContext";*/
  /*import PostCard from "../components/PostCard";*/
  
  const Home = () => {
    const [state] = useContext(AuthContext);
    // //global state
    // const [posts, getAllPosts] = useContext(PostContext);
    // const [refreshing, setRefreshing] = useState(false);
    // useEffect(() => {}, [getAllPosts]);
    // //refresh controll
    // const onRefresh = useCallback(() => {
    //   setRefreshing(true);
    //   getAllPosts;
    //   setTimeout(() => {
    //     setRefreshing(false);
    //   }, 2000);
    // }, []);
    return(
     <ImageBackground source={require('../assets/Img/Background.png')} style={styles.background}>
          <View style={styles.container}>
            <View style={styles.innerconatiner}>
                <View style={styles.textContainer}>
                  <Text style={styles.welcomeText}>Welcome to</Text>
                   <View style={styles.container3}>
                        <GradientText text="Curiosense Innovations" />
                   </View>
                </View>
                <View style={styles.img1}>
                    <Image source={require('../assets/Img/Wallpaper_first.jpeg')} style={styles.firstImg}></Image>
                    <View style={styles.tex1}>
                    <Text style={{fontWeight: "bold" , fontSize: 15}}>Curiosense Innovations prioritizes a play-centric, curiosity-driven approach for resilient minds. Emphasizing holistic development and mental well-being, we collaborate with parents, teachers, experts and schools to form a comprehensive learning ecosystem. With innovative tools, we prepare children not just for today but also for future opportunities, focusing on skill development and lifelong success.</Text> 
                    
                    </View>
                </View>
            </View>
          <FooterMenu style={{flex:1, justifyContent: "flex-end"}}></FooterMenu>
        </View>
        </ImageBackground>
    )
}
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         >
//           <PostCard posts={posts} />
//           {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
//         </ScrollView>
//         <View style={{ backgroundColor: "#ffffff" }}>
//           <FooterMenu />
//         </View>
//       </View>
//     );
//   };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: "center",
      justifyContent: "flex-end"
    },
    innerconatiner:{
      flex:1 ,
      justifyContent: "flex-start"
      
    },
    container3: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    background:{
      flex: 1,
      width: '100%',
      height:'100%',
      resizeMode: 'stretch',
    },
    firstImg: {
      width: "90%",
      height: "60%",
      borderRadius: 30,
    },
    img1:{
      marginTop: "20%",
      alignContent:"center",
      paddingLeft: "10%"
    },
    welcomeText: {
      paddingTop: "5%",
      marginLeft: "2%",
      fontSize: 30, // Equivalent to text-5xl in Tailwind CSS
      fontWeight: '500', // Equivalent to font-medium in Tailwind CSS
      color: '#4B5563', // Equivalent to text-gray-800 in Tailwind CSS
    },
    tex1:{
      marginTop:"5%",
      marginRight: "5%",
    }


  });
  
  export default Home;
  