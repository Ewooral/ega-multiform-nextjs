import Image from "next/image";
import React, { useEffect } from "react";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import { stepHeadObj } from "@/data/stepperheaderObj";
import { StepProps } from "@/types/registrationTypes";
import useRegistrationStore from "@/store/registerStore";
import {z} from 'zod'
import { registrationSchema } from "@/lib/StepperFormValidation";

type EmailStepType = z.infer<typeof registrationSchema>;




const EmailStep:React.FC<StepProps> = ({formMethods}) => {
 const {register, watch, trigger, formState: { errors }} = formMethods;
 const {setEmailAddress, serverResponseGenerateOTP } = useRegistrationStore();
 const watchEmailAddress = watch("emailAddress");

 useEffect(() => {
  if (watchEmailAddress !== undefined) {
    setEmailAddress(watchEmailAddress);
    trigger('emailAddress');
  }
}, [watchEmailAddress, setEmailAddress, trigger]);


 
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
          <p>Step {stepHeadObj[0].step}/{stepHeadObj.length - 1}</p>
          <h1 className="text-3xl font-extrabold"> Enter Email Address</h1>
        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <MarkEmailUnreadOutlinedIcon />
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("emailAddress", {required: true})}
          />
        </div>
        {watchEmailAddress && errors.emailAddress && <span className="text-[#ff6161] bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.emailAddress.message}</span>}
        {watchEmailAddress === "" && <span className="text-[#ff6161] bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]"> Email field cannot be empty!</span>}
        </section>
        
      </form>
  )
};
export default EmailStep;
