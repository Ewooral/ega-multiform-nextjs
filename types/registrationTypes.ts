import { UseFormSetValue } from 'react-hook-form'

interface PersonalInfo{
    firstName: string;
    lastName: string;
    password: string
    mobileNumber: string;
    personalBusinessGroupValue: 2,
    countryCode: string
}

interface BusinessInfo{
    businessName: string;
    countryCodeForFirstEganowWallet: string;
    businessContactPersonMobileNumber: string;
    mobileNoDialCode: string;
    mobileOrWeb: string;
}

export interface RegistrationState {
    emailAddress: string;
    otpValue: string;
    personalInfo: PersonalInfo
    businessInfo: BusinessInfo
    customerSixDigitPIN: string;
    currentStep: number;
    setCurrentStep: (step: number) => void;
    setEmailAddress: UseFormSetValue<any>
    setOtpValue: UseFormSetValue<any>
    setPersonalInfo: (info: Partial<PersonalInfo>) => void;
    setBusinessInfo: (info: Partial<BusinessInfo>) => void;
    setCustomerSixDigitPIN: UseFormSetValue<any>
    resetStepper: () => void;
}