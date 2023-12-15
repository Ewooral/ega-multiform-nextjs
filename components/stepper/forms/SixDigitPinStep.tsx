import React, { useEffect, useState } from "react";

import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";

import { stepHeadObj } from "@/data/stepperheaderObj";
import { StepProps } from "@/types/registrationTypes";
import useRegistrationStore from "@/store/registerStore";
import { registrationSchema } from "@/lib/StepperFormValidation";
import { z } from "zod";

type PersonalInfoType = z.infer<typeof registrationSchema>;

const SixDigitPinStep: React.FC<StepProps> = ({ formMethods }) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = formMethods;

  const { setCustomerSixDigitPIN, serverResponseGenerateOTP } =
    useRegistrationStore();
  const watchCustomerSixDigitPin = watch("customerSixDigitPIN");

  useEffect(() => {
    setCustomerSixDigitPIN(watchCustomerSixDigitPin);
    trigger("firstName");
  }, [watchCustomerSixDigitPin, trigger]);

  return (
    <form className="w-full">
      {/* .................SIX DIGIT PIN......................... */}
      <section className="shiftsmall">
        {serverResponseGenerateOTP?.issuccess && (
          <span
            style={{
              background: "#184f18",
              padding: "4px",
              borderRadius: "5px",
              fontSize: "12px",
            }}
            className="text-green-500"
          >
            {" "}
            {serverResponseGenerateOTP?.message}
          </span>
        )}
        {!serverResponseGenerateOTP?.issuccess && (
          <span
            style={{
              background: "#461e40",
              padding: "4px",
              borderRadius: "5px",
              fontSize: "12px",
            }}
            className="text-red-500"
          >
            {" "}
            {serverResponseGenerateOTP?.message}
          </span>
        )}
        <p>
          Step {stepHeadObj[4].step}/{stepHeadObj.length - 1}
        </p>
        <h1 className="text-3xl font-extrabold"> Enter your six digit pin</h1>

        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <PasswordOutlinedIcon />
          <input
            type="password"
            placeholder="Customer Six Digit PIN"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("customerSixDigitPIN", { required: true })}
          />
        </div>
        {errors.customerSixDigitPIN && (
          <span className="text-red-500  bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">
            {errors.customerSixDigitPIN.message}
          </span>
        )}
      </section>
    </form>
  );
};
export default SixDigitPinStep;
