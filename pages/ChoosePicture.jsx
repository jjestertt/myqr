import React from 'react';
import PickerButtons from "../components/PicersButtons/PickerButtons";
import {View, StyleSheet, Image} from "react-native";
import {Text} from "react-native-elements";
import {styleFlex} from "../utils";


const ChoosePicture = ({ setUploadedPhoto, handleStep }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.contentText}>Add photo with your qr code</Text>
            </View>
            <PickerButtons
                setUploadedPhoto={ setUploadedPhoto }
                handleStep={handleStep}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...styleFlex('column', 'center', 'center'),
        paddingBottom: '5%',
        backgroundColor: '#FEF9EF',
        height: '100%'
    },
    content: {
        ...styleFlex('column', 'center', 'center'),
        height: '92%'
    },
    logo: {
        minWidth: 280,
        height: 160,
        resizeMode: 'contain'
    },
    contentText: {
        color: '#A2D2FF'
    }
});

export default ChoosePicture;