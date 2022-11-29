import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,TouchableOpacity,TextInput,ImageBackground} from 'react-native';
import { Linking } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';


export default function App() {

  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require ("./assets/Header.png")}
      style= {{ width: "100%", height: "50%",marginBottom:"85%",}}>

<View style={styles.SectionStyle}>
 
  <Image source={require("./assets/Icon1.png")} style={styles.ImageStyle} />
  <Image source={require("./assets/ROBOCARDSICON.png")} style={styles.ImageStyle1} />
  <Image source={require("./assets/infobutton.png")} style={styles.ImageStyle2} />
  <Image source={require("./assets/chat.png")} style={styles.ImageStyle3} />
  <Image source={require("./assets/settings.png")} style={styles.ImageStyle4} />

<TextInput
 style={{flex:1}}
 
 underlineColorAndroid="transparent"
 />

</View>
<Text style={styles.textStyle}>Welcome</Text>
<Text style={styles.textStyle1}>Please sign in to continue</Text>

<View style={styles.SectionStyle1}>

  
<Image source={require('./assets/ic_person.png')} style={styles.ImageStyleic_person} />
  
    <TextInput
      style={{flex:1}}
         placeholder="Please sign in with email or username"
         
       underlineColorAndroid="transparent"
      />

    </View>
    <View style={styles.SectionStylePassword}>


    <Image source={require("./assets/IconPassword.png")} 
    style={styles.ImageStylePassword} />
  
    <TextInput
      style={{flex:1}}
         placeholder="Please sign in with password"
         secureTextEntry={true}
         //onChangeText={(email) => setEmail(email)}
       underlineColorAndroid="transparent"
      />
       </View>
       <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Keep signed in {'                   '}
         <Text style= {styles.hyperlinkStylePassword}
            onPress={()=>{Linking.openURL('');}}>
              Forgot Password?</Text> </Text>
      </View>
    
         <TouchableOpacity onPress={()=>{("")}}
           style={styles.loginBtn}>
 
          <Text style={styles.styleloginBtn}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.textStyle3}>
            Don't have an account?{''}
            <Text style= {styles.hyperlinkStyle}
            onPress={()=>{Linking.openURL('');}}>
              SingUp Here</Text> 
         </Text>
         </ImageBackground>

  
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
   SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#A6A6A6',
    height:40,
    marginLeft:70,
    width:210,
    borderRadius: 127,
    margin: 10,
    color: '##A6A6A6',

    border: '##CBCBCB',
    marginTop:"55%",
},
ImageStyle: {
  padding: 10,
  margin: 5,
  height: 30,
  //marginLeft:10,
  marginLeft:20,
  width: 30,
  resizeMode : 'stretch',
  alignItems: 'center'
},
ImageStyle1: {
  padding: 10,
  margin: 0,
  marginRight: 0,
  height: 30,
  width: 30,
  resizeMode : 'stretch',
  alignItems: 'center'
}
,ImageStyle2:
{
  padding: 10,
  margin: 5 ,
  height: 30,
  width: 30,
  resizeMode : 'stretch',
  alignItems: 'center'
},
ImageStyle3:
{
  padding: 10,
  //margin: 5 ,
  marginRight:5,
  height: 30,
  width: 30,
  resizeMode : 'stretch',
  alignItems: 'center'
},
ImageStyle4:
{
  padding: 10,
  margin: 0 ,
  height: 30,
  width: 30,
  marginRight:0,
  resizeMode : 'stretch',
  alignItems: 'center'
},
SectionStyle1: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 1,
  marginLeft:40,
  width:320,
  borderColor: '#000',
  height: 40,
  borderRadius: 127 ,
  margin: 10
  
},
SectionStylePassword:
{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 1,
  marginLeft:40,
  borderColor: '#000',
  height: 40,
  width:320,
  borderRadius: 127 ,
  margin: 10,


}
,

ImageStyleic_person: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
},
ImageStylePassword:{
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
}
,

textStyle:{
 
  color: '#000',
  fontSize: 25,
  fontWeight: 'bold',
  //margin:10,
  marginTop:40,
  marginLeft:20,
  fontFamily: 'sans-serif',
},
textStyle1:{
  color: '#000',
  fontSize: 14,
  margin:5,
  fontFamily: 'sans-serif',
  marginLeft:20,
}
,

styleloginBtn:{

  color: '#FFF',
  fontSize: 20,
  borderRadius: 127 ,
  fontWeight: 'bold',
  margin:15,
}

,
ImageStyleSignIn:{
  padding: 10,
  margin: 5,
  height: 25,
  //marginLeft:10,
  marginLeft:10,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'

}
,

  loginBtn: {
    
    backgroundColor: "#61dafb",
    borderRadius: 60,
    width:"45%",
    //marginBottom:"10%",
    alignItems: "center",
    margin:20,
    marginLeft:100,
    height:60,

   
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    borderradius: '100',
    color: '#87ceeb',
    
  },
  paragraph: {
    color: '#000',
    fontSize: 14,
    textShadowColor: '#000',
    fontFamily: 'sans-serif',
    marginRight:25,
    
  },
  checkbox: {
    margin: 10,
    marginLeft:60,
    borderradius: '100',
    borderRadius: 127 ,
    color: '#87ceeb',
  },
  hyperlinkStylePassword:{
    color: '#61dafb',
    marginLeft:220,  
    margin:10,  
    fontSize:14,
  }
  ,
  textStyle3:{
    marginBottom:100,
    marginLeft:60,

  },
  hyperlinkStyle:{
    color: '#61dafb',
  }
  ,
  

});
