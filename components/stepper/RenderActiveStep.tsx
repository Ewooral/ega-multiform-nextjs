import useRegistrationStore from "@/store/registerStore";
import EmailStep from '@/components/stepper/forms/EmailStep';
import VerifyOtpStep from '@/components/stepper/forms/VerifyOtpStep';
import PersonalInfoStep from '@/components/stepper/forms/PersonalInfoStep';
import BusinessInfoStep from '@/components/stepper/forms/BusinessInfoStep';
import SixDigitPinStep from '@/components/stepper/forms/SixDigitPinStep';
import SubmitStep from '@/components/stepper/forms/SubmitStep';
import ConfirmationStep from '@/components/stepper/forms/ConfirmationStep';
import StepperButton from "./StepperButton";
import { useEffect } from "react";
const RenderActiveStep = ()  => {

     // get the current step state from the store and set it
    const {currentStep, setCurrentStep} = useRegistrationStore();
    useEffect(() => {
        setCurrentStep(0)

    }, [])
    
    function getStepCompoent() {
    switch(currentStep) {
        case 0:
            return <EmailStep /> 
        case 1:
            return <VerifyOtpStep />
        case 2:
            return <PersonalInfoStep />
        case 3:
            return <BusinessInfoStep />
        case 4:
            return <SixDigitPinStep />
        case 5:
            return <SubmitStep />
        case 6:
            return <ConfirmationStep />
        default:
            return "Hello, World!"
        
    }
    }

    return (
        <>
        {/* RENDER ACTIVE FORM STEP */}
        {getStepCompoent()}

        <StepperButton  currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        </>

    )



}

export default RenderActiveStep;