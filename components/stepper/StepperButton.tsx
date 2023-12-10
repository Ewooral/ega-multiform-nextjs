import React from 'react'
import { stepHeadObj } from '@/data/stepperheaderObj'

const StepperButton = ({currentStep, setCurrentStep}: {currentStep: any, setCurrentStep: any}) => {
    const [prevName, setPrevName] = React.useState('prev')
    const [nextName, setNextName] = React.useState('next')

    // ?    HANDLE PREVIOUS CLICK BUTTON
    function handlePrevClick(){
        // * set the current step state to the previous step
        // * useRegistrationStore.setState({currentStep: currentStep - 1})
       if(currentStep > 0) {
        setCurrentStep(currentStep - 1)
       }
    }

    // ?    HANDLE NEXT CLICK BUTTON
    function handleNextClick(){
        // * set the current step state to the next step
        // * useRegistrationStore.setState({currentStep: currentStep + 1})
        if(currentStep < stepHeadObj.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    
    }


  return (
    <div className='flex items-center justify-between w-full'>
        <button onClick={handlePrevClick} className="bg-[#25cc88] px-8 py-3 mr-5">{prevName}</button>
        <button onClick={handleNextClick} className="bg-[#25cc88] px-8 py-3">{nextName}</button>
    </div>
  )
}

export default StepperButton