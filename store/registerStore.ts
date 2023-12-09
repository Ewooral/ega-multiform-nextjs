import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { RegistrationState } from '@/types/registrationTypes';


//@ts-ignore
const useRegistrationStore = create<RegistrationState>(devtools(persist((set) => ({
    // Step 1: Email Address
    emailAddress: '',
    setEmailAddress: (value: string) => set({emailAddress: value}),

    //Step 2: OTP
    otpValue: '',
    setOtpValue: (value: string) => set({otpValue: value}),

    //Step 3: Personal Info
    personalInfo: {
        firstName: '',
        lastName: '',
        password: '',
        mobileNumber: '',
        personalBusinessGroupValue: 2,
        countryCode: ''
    },

    setPersonalInfo: (info) => set((state) => ({personalInfo: {...state.personalInfo, ...info}})),

    //Step 4: Business Info
    businessInfo: {
        businessName: '',
        countryCodeForFirstEganowWallet: '',
        businessContactPersonMobileNumber: '',
        mobileNoDialCode: '',
        mobileOrWeb: ''
    },

    setBusinessInfo: (info) => set((state) => ({businessInfo: {...state.businessInfo, ...info}})),
    //Step 5: PIN
    customerSixDigitPIN: '',
    setCustomerSixDigitPIN: (value: string) => set({customerSixDigitPIN: value}),

    //Step 6: Current Step
    currentStep: 0,
    setCurrentStep: (step: number) => set({currentStep: step}),

    // Function to reset the store
    resetStepper: () => set({
        emailAddress: '',
        otpValue: '',
        personalInfo: {
            firstName: '',
            lastName: '',
            password: '',
            mobileNumber: '',
            personalBusinessGroupValue: 2,
            countryCode: ''
        },
        businessInfo: {
            businessName: '',
            countryCodeForFirstEganowWallet: '',
            businessContactPersonMobileNumber: '',
            mobileNoDialCode: '',
            mobileOrWeb: ''
        },
        customerSixDigitPIN: '',

        currentStep: 0,

    })
}), {
    name: 'registration-store',
    })));

export default useRegistrationStore;