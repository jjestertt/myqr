import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAsyncStorage = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, value)
    } catch (e) {
        console.error(e)
    }
}
export const getAsyncStorage = async (name) => {
    try {
        const encryptQr = await AsyncStorage.getItem(name)
        if (!!encryptQr) {
            return encryptQr
        }
    } catch (e) {
        console.error(e)
    }
}
export const clearAsyncStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.error(e)
    }
}