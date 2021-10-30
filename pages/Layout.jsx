import React, {useState} from 'react';
import {steps} from "../steps/steps";

const Layout = () => {
    const [encryptQr, setEncryptQr] = useState(null)
    const [uploadedPhoto, setUploadedPhoto] = useState(null)

    const [currentStep, setCurrentStep] = useState(0)

    const handleStep = (type) => {
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
                setCurrentStep(0)
                setEncryptQr(null)
                setUploadedPhoto(null)
            }
        }
    }

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
                            handleStep={handleStep}
                        />
                    )
                })
            }
        </>
    );
};

export default Layout;