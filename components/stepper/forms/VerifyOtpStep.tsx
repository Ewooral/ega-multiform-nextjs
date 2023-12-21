import React, { useEffect } from "react";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import { stepHeadObj } from "@/data/stepperheaderObj";
import { StepProps } from "@/types/registrationTypes";
import useRegistrationStore from "@/store/registerStore";
import ServerErrorMessage from "@/components/ServerErrorMessage";

const VerifyOtpStep: React.FC<StepProps> = ({ formMethods }) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = formMethods;


  return (
    <form className="w-full">
      {/* .................EMAIL SECTION......................... */}
      <section className="space-large">

        {/* SERVER ERROR MESSAGE COMPONENT */}
        <ServerErrorMessage />
        <p>
          Step {stepHeadObj[1].step}/{stepHeadObj.length - 1}
        </p>
        <h1 className="text-3xl font-extrabold">
          {" "}
          Verify the OTP sent to your email
        </h1>
        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <FingerprintOutlinedIcon />
          <input
            type="password"
            placeholder="Verify OTP"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("otpValue", { required: true })}
          />
        </div>
        {errors.otpValue && (
          <span className="text-[#ff6161] bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">
            {errors.otpValue.message}
          </span>
        )}
      </section>
    </form>
  );
};

export default VerifyOtpStep;
