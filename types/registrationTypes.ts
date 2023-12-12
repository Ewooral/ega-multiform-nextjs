
interface PersonalInfo{
    firstName: string;
    lastName: string;
    password: string
    mobileNumber: string;
    personalBusinessGroupValue: number,
    countryCode: string
}

interface BusinessInfo{
    businessName: string;
    countryCodeForFirstEganowWallet: string;
    businessContactPersonMobileNumber: string;
    mobileNoDialCode: string;
    mobileOrWeb: string;
}

interface serverResponseGenerateOTP{
    issuccess: boolean;
    messagesuccessfulorfailed: string;
    message: string;
    registrationerrorcode: string;


}



export interface RegistrationState {
    emailAddress: string;
    otpValue: string;
    personalInfo: PersonalInfo
    businessInfo: BusinessInfo
    customerSixDigitPIN: string;
    currentStep: number;
    thereAreErrorsStep0: boolean;
    thereAreErrorsStep1: boolean;
    thereAreErrorsStep2: boolean;
    serverResponseGenerateOTP: null | serverResponseGenerateOTP;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    setSeverResponseGenerateOTP: (value: serverResponseGenerateOTP) => void;
    setThereAreErrorsStep0: (value: boolean) => void;
    setThereAreErrorsStep1: (value: boolean) => void;
    setThereAreErrorsStep2: (value: boolean) => void;
    setCurrentStep?: (step: number) => void;
    setEmailAddress: (value: string) => void; 
    setOtpValue:  (value: string) => void;
    setPersonalInfo: (info: PersonalInfo) => void;
    setBusinessInfo: (info: BusinessInfo) => void; 
    setCustomerSixDigitPIN: (value: string) => void;
    
    resetStepper?: () => void;
    
}


export interface StepProps {
    formMethods: any; 
  }

  
export type OmitSomeTypes = Omit<RegistrationState, 'setPersonalInfo' | 
'setBusinessInfo' | 'setOtpValue' | 'setCustomerSixDigitPIN' 
| 'setEmailAddress' | 'resetStepper' | 'otpValue' | 'setCurrentStep' |
 'emailAddress' | 'personalInfo' | 'businessInfo' | 'customerSixDigitPIN'>;
