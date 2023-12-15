import React, { useEffect } from "react";
import { stepHeadObj } from "@/data/stepperheaderObj";
import useRegistrationStore from "@/store/registerStore";
import { generateOtpGRPC } from "@/apis/generateOtpGRPC";
import { verifyOtpGRPC } from "@/apis/verifyOtpGRPC";
import { registerGRPC } from "@/apis/registerGRPC";
import { useRouter } from 'next/navigation'


interface serverResponseGenerateOTPS {
  issuccess: boolean;
  messagesuccessfulorfailed: string;
  message: string;
  registrationerrorcode: string;
}

const StepperButton = ({
  currentStep,
  setCurrentStep,
  formMethods,
}: {
  currentStep: any;
  setCurrentStep: any;
  formMethods: any;
}) => {
  const [prevName, setPrevName] = React.useState("prev");
  const [nextName, setNextName] = React.useState("next");

  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = formMethods;
  const {} = useRegistrationStore();
  const emailAddress = watch("emailAddress");
  const otp = watch("otpValue");
  const emailAddressError = errors.emailAddress;
  const otpError = errors.otpValue;
  const firstName = watch("firstName");
  const firstNameError = errors.firstName;
  const lastName = watch("lastName");
  const mobileNumber = watch("mobileNumber");
  const password = watch("password");
  const countryCode = watch("countryCode");
  const businessName = watch("businessName");
  const countryCodeForFirstEganowWallet = watch(
    "countryCodeForFirstEganowWallet"
  );
  const businessContactPersonMobileNumber = watch(
    "businessContactPersonMobileNumber"
  );
  const mobileNoDialCode = watch("mobileNoDialCode");
  const mobileOrWeb = watch("mobileOrWeb");
  const customerSixDigitPIN = watch("customerSixDigitPIN");

  const customerSixDigitPINError = errors.customerSixDigitPIN;
  const businessNameError = errors.businessName;
  const businessContactPersonMobileNumberError =
    errors.businessContactPersonMobileNumber;
  const mobileNoDialCodeError = errors.mobileNoDialCode;
  const mobileOrWebError = errors.mobileOrWeb;
  const countryCodeForFirstEganowWalletError =
    errors.countryCodeForFirstEganowWallet;

  const lastNameError = errors.lastName;
  const mobileNumberError = errors.mobileNumber;
  const passwordError = errors.password;
  const countryCodeError = errors.countryCode;
  const router = useRouter()


  const {
    serverResponseGenerateOTP,
    setSeverResponseGenerateOTP,
    isLoading,
    setIsLoading,
    personalInfo,
    businessInfo,
    resetStepper
  } = useRegistrationStore();

  // ?    HANDLE PREVIOUS CLICK BUTTON
  function handlePrevClick() {
    // * set the current step state to the previous step
    // * useRegistrationStore.setState({currentStep: currentStep - 1})
    if (currentStep > 0) {
      setIsLoading(true);
      setCurrentStep(currentStep - 1);
      setIsLoading(false);
    }
  }

  // ?    HANDLE NEXT CLICK BUTTON

  async function handleNextClick() {
    try {
      if (currentStep < stepHeadObj.length - 1) {
        setIsLoading(true);

        // // generate otp
        // if (currentStep === 0 ) {
        //   try {
        //     await generateOtpGRPC(emailAddress, setSeverResponseGenerateOTP);
        //     if(serverResponseGenerateOTP && serverResponseGenerateOTP.issuccess){
        //       setCurrentStep(currentStep + 1);
        //     }
        //   } catch (err) {
        //     setIsLoading(false);
        //     console.error('An error occurred:', err);
        //   }
        // }

        // generate otp
        if (currentStep === 0) {
          try {
            const response: serverResponseGenerateOTPS = (await generateOtpGRPC(
              emailAddress
            )) as serverResponseGenerateOTPS;
            if (response && !response.issuccess) {
              setSeverResponseGenerateOTP(response);
              console.log("RESPONSESSSS: ", response);

              setIsLoading(false);
              return;
            } else {
              setSeverResponseGenerateOTP(response);
              setCurrentStep(currentStep + 1);
            }
          } catch (err) {
            setIsLoading(false);
            console.error("An error occurred:", err);
          }
        }

        //verify otp
        if (currentStep === 1) {
          try {
            const response: serverResponseGenerateOTPS = (await verifyOtpGRPC(
              emailAddress,
              otp
            )) as serverResponseGenerateOTPS;
            console.log("RESPONSESSSS: ", response);
            if (response && !response.issuccess) {
              setSeverResponseGenerateOTP(response);
              console.log("RESPONSESSSS: ", response)
              setIsLoading(false);
              return;
            } else {
              setSeverResponseGenerateOTP(response);
              setCurrentStep(currentStep + 1);
            }
          } catch (err) {
            console.error("An error occurred:", err);
            setIsLoading(false);
            return; // Stop execution if an error occurs
          }
        }

        //Personal information
        if (currentStep === 2) {
          setCurrentStep(currentStep + 1);
        }

        // Business information
        if (currentStep === 3) {
          setCurrentStep(currentStep + 1);
        }
        // setCurrentStep(currentStep + 1);

        // data
        const data = {
          emailAddress,
          otp,
          personalInfo,
          businessInfo,
          customerSixDigitPIN,
        };

        //SUBMIT FORM
        if (currentStep === 4) {
          try {
            const response: serverResponseGenerateOTPS = (await registerGRPC(
              data
            )) as serverResponseGenerateOTPS;
            console.log("RESPONSESSSS: ", response);
            if (response && !response.issuccess) {
              setSeverResponseGenerateOTP(response);
              console.log("RESPONSESSSS: ", response);
              setIsLoading(false);
              return;
            } else {
              setSeverResponseGenerateOTP(response);
               setCurrentStep(currentStep + 1);
              router.push("/dashboard")

             
            }
          } catch (err) {
            console.error("An error occurred:", err);
            setIsLoading(false);
            return; // Stop execution if an error occurs
          }
        }


     

        //Reset form
        if (currentStep === 5) {
          if (resetStepper) {
            resetStepper();
          }
        }

        setIsLoading(false);
      }
    } catch (err: any) {
      console.log("Errors:", err.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-between w-full mb-[-3rem]">
      {currentStep > 0 && (
        <button
          style={{ border: "4px solid white" }}
          className="bg-[#0c5d3c] px-8 py-3 mr-5 rounded-full"
          onClick={handlePrevClick}
        >
          Previous
        </button>
      )}

      <div style={{ width: "same as button", height: "same as button" }}></div>

      {currentStep === 0 && (
        <button
          style={{ border: "4px solid white" }}
          className="bg-[#0c5d3c] px-8 py-3 rounded-full"
          onClick={handleNextClick}
        >
          Next
        </button>
      )}

      {currentStep === 1 && (
        <button
          style={{ border: "4px solid white" }}
          className="bg-[#0c5d3c] px-8 py-3 rounded-full"
          onClick={handleNextClick}
        >
          Verify OTP
        </button>
      )}

      {(currentStep === 2 || currentStep === 3) && (
        <button
          style={{ border: "4px solid white" }}
          className="bg-[#0c5d3c] px-8 py-3 rounded-full"
          onClick={handleNextClick}
        >
          Next
        </button>
      )}

      {currentStep === 4 && (
        <button
          style={{ border: "4px solid white" }}
          className="bg-[#0c5d3c] px-8 py-3 rounded-full"
          onClick={handleNextClick}
        >
          Submit Form
        </button>
      )}

      {currentStep === 5 && (
        <button
          style={{ border: "4px solid white" }}
          className="bg-[#0c5d3c] px-8 py-3 rounded-full"
          onClick={handleNextClick}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default StepperButton;
