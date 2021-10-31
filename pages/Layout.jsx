import React, {useEffect, useState} from 'react';
import {steps} from "../steps/steps";
import {clearAsyncStorage, getAsyncStorage, setAsyncStorage} from "../utils";

const Layout = () => {
    const [encryptQr, setEncryptQr] = useState(null)
    const [uploadedPhoto, setUploadedPhoto] = useState(null)

    const [currentStep, setCurrentStep] = useState(0)

    useEffect(async () => {
        const encryptQr = await getAsyncStorage('encryptQr')
        if (!!encryptQr){
            setEncryptQr(encryptQr)
            setCurrentStep(2)
        }
    }, [])


    const handleStep = async (type) => {
        switch (type){
            case 'next': {
                setCurrentStep(currentStep + 1)
                break
            }
            case 'prev': {
                setCurrentStep(currentStep - 1)
                break
            }
            case 'clear': {
                await clearAsyncStorage()
                setCurrentStep(0)
                setEncryptQr(null)
                setUploadedPhoto(null)
            }
        }
    }

    const handleBarCodeScanned = async ({ data }) => {
        await setAsyncStorage('encryptQr', data)
        setEncryptQr(data)
    };

    return (
        <>
            {
                steps.map(({name, component: Component}, index) => {
                   if (index === currentStep) return (
                        <Component
                            key={name}
                            setUploadedPhoto={setUploadedPhoto}
                            uploadedPhoto={uploadedPhoto}
                            encryptQr={encryptQr}
                            setEncryptQr={setEncryptQr}
                            handleBarCodeScanned={handleBarCodeScanned}
                            handleStep={handleStep}
                        />
                    )
                })
            }
        </>
    );
};

export default Layout;