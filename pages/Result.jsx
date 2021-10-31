import React from 'react';
import {View, StyleSheet} from "react-native";
import {Text} from "react-native-elements";
import {styleFlex} from "../utils";
import QRCode from "react-native-qrcode-svg";
import PickerButton from "../components/PicersButtons/PickerButton";


const Result = ({ handleStep, encryptQr }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.qrContainer}>
                    <QRCode
                        value={encryptQr}
                        size={250}
                    />
                </View>
                <Text style={styles.contentText}>We will add widget option as soon as possible</Text>
            </View>
            <PickerButton
                style={styles.resetButton}
                title='Reset QR'
                onPress={() => handleStep('clear')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...styleFlex('column', 'center', 'center'),
        paddingBottom: '5%',
        backgroundColor: '#FEF9EF',
        height: '100%',
        width: '100%'
    },
    content: {
        ...styleFlex('column', 'center', 'center'),
        height: '92%'
    },
    qrContainer: {
      marginBottom: 15
    },
    contentText: {
        fontSize: 15,
        color: '#A2D2FF'
    },
    resetButton: {
        minWidth: 300,
        maxWidth: 300
    }
});

export default Result;