import React from 'react';
import * as DocumentPicker from "expo-document-picker";
import PickerButton from "./PickerButton";
import {StyleSheet, View} from "react-native";
import {styleFlex} from "../../utils";

const PickerButtons = ({setUploadedPhoto, handleStep}) => {
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: 'image/*'
        });
        setUploadedPhoto(result)
    }
    const useCamera = () => {
        handleStep('next')
    }

    return (
        <View style={styles.pikerButtons}>
            <PickerButton
                onPress={useCamera}
                title='Use camera'
                icon='camera'
                type='primary'
            />
            <PickerButton
                onPress={pickDocument}
                title='Choose file'
                icon='photo'
                type='primary'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pikerButtons: {
        ...styleFlex('row', 'space-between', 'center'),
        maxWidth: 360,
        width: '100%',
    }
})

export default PickerButtons;