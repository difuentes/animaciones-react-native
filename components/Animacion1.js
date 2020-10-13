import React ,{useState}from 'react';
import {Text,View,StyleSheet, Animated} from 'react-native';

const Animacion1 = () => {

    //state de animacion
    const [animacion] = useState(new Animated.Value(0));

    return ( 
        <View>
            <Text style={styles.Texto}>DiFuentes </Text>
        </View>
     );
}


const styles = StyleSheet.create({
    Texto:{
      fontSize:30,
      textAlign:'center'
    }
 });
 
export default Animacion1;