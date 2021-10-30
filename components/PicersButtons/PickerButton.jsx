import React from "react";
import {StyleSheet} from "react-native";
import {Button, Icon} from "react-native-elements";

const styles = StyleSheet.create({
    pikerButton: {
        backgroundColor: '#A2D2FF',
        minWidth: 170,
        maxWidth: 190,
        width: '100%',
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 26,
        paddingRight: 26,
    }
})

const PickerButton = ({title, onPress, icon, style, loading, disabled}) => {
    return (
        <Button
            buttonStyle={{
                ...styles.pikerButton,
                ...style
            }}
            type="solid"
            icon={
                <Icon
                    name={icon}
                    size={20}
                    color="#EEEEEE"
                />
            }
            iconLeft
            title={title}
            onPress={onPress}
            loading={loading}
            disabled={disabled}
        />
    );
};

export default PickerButton;