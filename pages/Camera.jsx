import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import PickerButton from "../components/PicersButtons/PickerButton";
import {styleFlex} from "../utils";

export default function Camera({ setEncryptQr, encryptQr, handleStep }) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setEncryptQr(data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={
                    encryptQr ? undefined :
                        handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {
                encryptQr
                    ? <View style={styles.resultContainer}>
                        <Text
                            style={styles.dataText}
                        >
                            {encryptQr}
                        </Text>
                        <View style={styles.buttons}>
                            <PickerButton
                                title={'Tap to Again'}
                                onPress={() => handleBarCodeScanned({ data: null })}
                            />
                            <PickerButton
                                title={'Next'}
                                onPress={() => handleStep('clear')}
                            />
                        </View>
                    </View>
                    :  <>
                        <View style={styles.QRFrameContainer}>
                            <View style={styles.QRFrame}/>
                            <Text
                                style={styles.dataText}
                            >
                                Point the camera at QR code
                            </Text>
                        </View>
                        <PickerButton
                            title={'Back'}
                            onPress={() => handleStep('clear')}
                        />
                    </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...styleFlex('column', 'flex-end', 'center'),
        flex: 1,
        paddingBottom: '5%'
    },
    QRFrameContainer: {
        width: '100%',
        height: '100%',
        ...styleFlex('column', 'center', 'center')
    },
    QRFrame: {
        width: 280,
        height: 280,
        borderWidth: 5,
        borderColor: '#FEF9EF',
        borderRadius: 9,
        borderStyle: 'dashed',
        marginBottom: 10
    },
    resultContainer: {
        width: '100%',
        paddingRight: 9,
        paddingLeft: 9,
    },
    dataText: {
        textAlign: 'center',
        color: '#FEF9EF',
        fontSize: 15,
        marginBottom: 20,
        fontWeight: '500'
    },
    buttons: {
        width: '100%',
        ...styleFlex('row', 'space-between', 'center')
    }
});
