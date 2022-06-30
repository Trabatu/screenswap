import React from "react";
import {
    Image,
    Pressable,
    Linking,
    StyleSheet
} from 'react-native'

const Header = () => {
    return (
        <Pressable
            onPress={() => {Linking.openURL('https://teb.pl')}}
        >
            <Image
                style={styles.image}
                source={require('../assets/teb-logo.png')}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        margin: 10,

    },
})
export default Header