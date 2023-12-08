import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { RegistrationState } from '@/types/registrationTypes';


const useRegistrationStore = create<RegistrationState>((set) => ({
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

    // Function to reset the store
    reset: () => set({
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
        customerSixDigitPIN: ''
    })


}))

export default useRegistrationStore;