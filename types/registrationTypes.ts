
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
    messagesuccessfulorfailed?: string;
    message: string;
    registrationerrorcode?: string;
    userjwttoken?: string;


}
export interface LoginState {
    login: {
      countryCode: string;
      customerId: string;
      mobileOrWeb: string;
      password1OrPin2OrHPin3Option: number;
      passwordOrPin: string;
      personalBusinessGroupValue: number;
    };

    
    // ... rest of your LoginState properties
  };

   interface loginResponse{
    issuccess?: boolean;
    messagesuccessfulorfailed?: string;
    message?: string;
    userjwttoken?: string;
    firstname?: string;
    lastname?: string;
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
    bgColor: string;

   loginResponse: null | loginResponse;

   setLoginResponse: (value: loginResponse) => void;
    setBgColor: (value: string) => void;
    logout: () => void;
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
    setLogin: (info: LoginState) => void;
    
    resetStepper?: () => void;
    
}


export interface StepProps {
    formMethods: any; 
  }

  
export type OmitSomeTypes = Omit<RegistrationState, 'setPersonalInfo' | 
'setBusinessInfo' | 'setOtpValue' | 'setCustomerSixDigitPIN' 
| 'setEmailAddress' | 'resetStepper' | 'otpValue' | 'setCurrentStep' |
 'emailAddress' | 'personalInfo' | 'businessInfo' | 'customerSixDigitPIN'>;
