import React, { useEffect } from "react";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined"
import { stepHeadObj } from "@/data/stepperheaderObj";
import { RegistrationState, StepProps } from "@/types/registrationTypes";
import useRegistrationStore from "@/store/registerStore";

const VerifyOtpStep: React.FC<StepProps> = ({formMethods}) => {
  const {register, watch, trigger, formState: { errors }} = formMethods;
  const {setOtpValue, serverResponseGenerateOTP } = useRegistrationStore();
  const watchOtp = watch("otpValue");

  useEffect(() => {
    if (watchOtp !== undefined) {
      setOtpValue(watchOtp);
      trigger('otpValue');
    }
  }, [watchOtp, setOtpValue, trigger]);
  return (
    
      <form className="w-full">
        {/* .................EMAIL SECTION......................... */}
        <section className="space-large">
        {serverResponseGenerateOTP?.issuccess && (
          <span 
          style={{background:"#184f18", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
          className="text-green-500"> {serverResponseGenerateOTP?.message}</span>
        )}  
        {!serverResponseGenerateOTP?.issuccess && (
          <span 
          style={{background:"#461e40", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
          className="text-red-500"> {serverResponseGenerateOTP?.message}</span>
        )}
          <p>Step {stepHeadObj[1].step}/{stepHeadObj.length - 1}</p>
          <h1 className="text-3xl font-extrabold"> Verify the OTP sent to your email</h1>
        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <FingerprintOutlinedIcon />
          <input
            type="password"
            placeholder="Verify OTP"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("otpValue", {required: true})}
          />
        </div>
        {errors.otpValue && <span className="text-[#ff6161]">{errors.otpValue.message}</span>}

        </section>
        
      </form>
  )
};

export default VerifyOtpStep;
