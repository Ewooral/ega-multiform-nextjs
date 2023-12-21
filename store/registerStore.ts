import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { RegistrationState, LoginState } from '@/types/registrationTypes';


//@ts-ignore
const useRegistrationStore = create<RegistrationState & LoginState>(devtools(persist((set) => ({
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

    setPersonalInfo: (info) => set((state) => ({personalInfo: {...state.personalInfo, ...info}}), false, 'setPersonalInfo'),

    //Step 4: Business Info
    businessInfo: {
        businessName: '',
        countryCodeForFirstEganowWallet: '',
        businessContactPersonMobileNumber: '',
        mobileNoDialCode: '',
        mobileOrWeb: ''
    },

    // Loading
    isLoading: false,
    setIsLoading: (value: boolean) => set({isLoading: value}),

    setBusinessInfo: (info) => set((state) => ({businessInfo: {...state.businessInfo, ...info}})),
    //Step 5: PIN
    customerSixDigitPIN: '',
    setCustomerSixDigitPIN: (value: string) => set({customerSixDigitPIN: value}),

    //Step 6: Current Step
    currentStep: 0,
    setCurrentStep: (step: number) => set({currentStep: step}),

    //Step 7: Errors
    thereAreErrorsStep0: false,
    setThereAreErrorsStep0: (value: boolean) => set({thereAreErrorsStep0: value}),

    thereAreErrorsStep1: false,
    setThereAreErrorsStep1: (value: boolean) => set({thereAreErrorsStep1: value}),

    thereAreErrorsStep2: false,
    setThereAreErrorsStep2: (value: boolean) => set({thereAreErrorsStep2: value}),

    
    // Server Response
    serverResponseGenerateOTP: {
        issuccess: false,
        messagesuccessfulorfailed: '',
        message: '',
        registrationerrorcode:'',
        userjwttoken: ''
    },

    setSeverResponseGenerateOTP: (response) => set(() => ({ serverResponseGenerateOTP: response }), false, 'setSeverResponseGenerateOTP'),

   // Login
   login: {
    countryCode: '',
    customerId: '',
    mobileOrWeb: '',
    password1OrPin2OrHPin3Option: 1,
    passwordOrPin: '',
    personalBusinessGroupValue: 2,
    },

    loginResponse: {
        issuccess: false,
        messagesuccessfulorfailed: '',
        message: '',
        userjwttoken: '',
        firstname: '',
        lastname: ''
    },

    setLoginResponse: (value: any) => set((state) => ({ ...state, loginResponse: { ...state.loginResponse, ...value } }), false, 'setLoginResponse'),

    setLogin: (value: any) => set((state) => ({ ...state, login: { ...state.login, ...value } }), false, 'setLogin'),
    // Styling
    bgColor: "bg-[#02044a]",
    setBgColor: (value: string) => set({bgColor: value}),

     // show toaster
     showToaster: false,
     setShowToaster: (value: boolean) => set({showToaster: value}),



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

        thereAreErrorsStep0: false,
        thereAreErrorsStep1: false,
        thereAreErrorsStep2: false,

        serverResponseGenerateOTP: {
            issuccess: false,
            messagesuccessfulorfailed: '',
            message: '',
            registrationerrorcode:'',
            userjwttoken: ''
        },

        showToaster: false,
        login: {
            countryCode: '',
            customerId: '',
            mobileOrWeb: '',
            password1OrPin2OrHPin3Option: 1,
            passwordOrPin: '',
            personalBusinessGroupValue: 2,
            },
            loginResponse: {
                issuccess: false,
                messagesuccessfulorfailed: '',
                message: '',
                userjwttoken: '',
                firstname: '',
                lastname: ''
            },

    }),

    // Function to logout
    logout: () => set({
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

        thereAreErrorsStep0: false,
        thereAreErrorsStep1: false,
        thereAreErrorsStep2: false,
        showToaster: false,


        serverResponseGenerateOTP: {
            issuccess: false,
            messagesuccessfulorfailed: '',
            message: '',
            registrationerrorcode:'',
            userjwttoken: ''
            
        },
        login: {
            countryCode: '',
            customerId: '',
            mobileOrWeb: '',
            password1OrPin2OrHPin3Option: 1,
            passwordOrPin: '',
            personalBusinessGroupValue: 2,
            },
            loginResponse: {
                issuccess: false,
                messagesuccessfulorfailed: '',
                message: '',
                userjwttoken: '',
                firstname: '',
                lastname: ''
            },

    }, false, 'logout'),
    
   
}), {
    name: 'registration-store',
    })));

export default useRegistrationStore;