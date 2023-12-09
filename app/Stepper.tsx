'use client'
import React from 'react';
import EmailStep from '@/components/stepper/EmailStep';
import VerifyOtpStep from '@/components/stepper/VerifyOtpStep';
import PersonalInfoStep from '@/components/stepper/PersonalInfoStep';
import BusinessInfoStep from '@/components/stepper/BusinessInfoStep';
import SixDigitPinStep from '@/components/stepper/SixDigitPinStep';
import SubmitStep from '@/components/stepper/SubmitStep';
import ConfirmationStep from '@/components/stepper/ConfirmationStep';
import useRegistrationStore from '@/store/registerStore';


const Stepper = () => {
    // get the current step state from the store and set it
    const {currentStep, setCurrentStep} = useRegistrationStore();
    return (
        <>
        <div className="grid grid-col-3 grid-row-7">
            <div className="col-span-3 row-span-1">
                <EmailStep />
            </div>
            <div className="col-span-3 row-span-1">
                <VerifyOtpStep />
            </div>
            <div className="col-span-3 row-span-1">
                <PersonalInfoStep />
            </div>
            <div className="col-span-3 row-span-1">
                <BusinessInfoStep />
            </div>
            <div className="col-span-3 row-span-1">
                <SixDigitPinStep />
            </div>
            <div className="col-span-3 row-span-1">
                <SubmitStep />
            </div>
            <div className="col-span-3 row-span-1">
                <ConfirmationStep />
            </div>
        </div>
        </>
    )
}

export default Stepper