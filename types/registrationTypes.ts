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
    backgroundColor: string;
    setBackgroundColor: UseFormSetValue<any>
    color: string;  
    setColor: UseFormSetValue<any>

    buttonColor: string;
    setButtonColor: UseFormSetValue<any>
    
    fontSize: string;
    setFontSize: UseFormSetValue<any>
    paddingY: string;
    setPaddingY: UseFormSetValue<any>
    paddingX: string;
    setPaddingX: UseFormSetValue<any>
    marginY: string;
    setMarginY: UseFormSetValue<any>
    marginX: string;
    setMarginX: UseFormSetValue<any>
    borderRadius: string;
    setBorderRadius: UseFormSetValue<any>
    border: string;
    setBorder: UseFormSetValue<any>
    shadow: string;
    setShadow: UseFormSetValue<any>
    width: string;
    setWidth: UseFormSetValue<any>
    height: string;
    setHeight: UseFormSetValue<any>
    flex: string;
    setFlex: UseFormSetValue<any>
    flexWrap: string;
    setFlexWrap: UseFormSetValue<any>
    flexDir: string;
    setFlexDir: UseFormSetValue<any>
    justify: string;
    setJustify: UseFormSetValue<any>
    align: string;
    setAlign: UseFormSetValue<any>
    textAlign: string;
    setTextAlign: UseFormSetValue<any>
    text: string;
    setText: UseFormSetValue<any>
    colorClasses: string[];
    
    fontSizeClasses: string[];
    paddingYClasses: string[];
    paddingXClasses: string[];
    marginYClasses: string[];
    marginXClasses: string[];
    borderRadiusClasses: string[];
    borderClasses: string[];
    shadowClasses: string[];
    widthClasses: string[];
    heightClasses: string[];
    flexClasses: string[];
    flexWrapClasses: string[];
    flexDirClasses: string[];
    justifyClasses: string[];
    alignClasses: string[];
    textAlignClasses: string[];
    textClasses: string[];
    resetStepper: () => void;
    
}


