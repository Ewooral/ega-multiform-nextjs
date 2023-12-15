import useRegistrationStore from "@/store/registerStore";
import EmailStep from '@/components/stepper/forms/EmailStep';
import VerifyOtpStep from '@/components/stepper/forms/VerifyOtpStep';
import PersonalInfoStep from '@/components/stepper/forms/PersonalInfoStep';
import BusinessInfoStep from '@/components/stepper/forms/BusinessInfoStep';
import SixDigitPinStep from '@/components/stepper/forms/SixDigitPinStep';
import SubmitStep from '@/components/stepper/forms/SubmitStep';
import ConfirmationStep from '@/components/stepper/forms/ConfirmationStep';
import StepperButton from "./StepperButton";
import { useStepperForm } from "@/hooks/useStepperForm";
import LoadingSpinner from "../LoadingSpinner";
import React from "react";


const RenderActiveStep = ()  => {

     // get the current step state from the store and set it
    const {currentStep, setCurrentStep, isLoading} = useRegistrationStore();

    // get the useForm methods from the custom hook
    const FormMethods = useStepperForm(); 

    
    function getStepCompoent() {
        //Render a loading state
        // if(isLoading) return <LoadingSpinner />

        if(isLoading) return <h1>Loading...</h1>

        // switch statement to render the current step
    switch(currentStep) {
        case 0:
            return  <EmailStep formMethods={FormMethods} /> 
        case 1:
            return <VerifyOtpStep formMethods={FormMethods} />
        case 2:
            return <PersonalInfoStep formMethods={FormMethods} />
        case 3:
            return <BusinessInfoStep formMethods={FormMethods} />
        case 4:
            return <SixDigitPinStep formMethods={FormMethods} />
        case 5:
            return <SubmitStep />
        default:
            return "Hello, World!"
        
    }
    }

    return (
        <>
        {/* RENDER ACTIVE FORM STEP */}
        
        {getStepCompoent()}

        <StepperButton  currentStep={currentStep} setCurrentStep={setCurrentStep} formMethods={FormMethods} />
        </>

    )



}

export default RenderActiveStep;