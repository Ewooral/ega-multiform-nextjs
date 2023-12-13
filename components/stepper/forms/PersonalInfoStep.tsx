import Image from "next/image";
import React, { useEffect, useState } from "react";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LocalConvenienceStoreOutlinedIcon from "@mui/icons-material/LocalConvenienceStoreOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import BroadcastOnPersonalOutlinedIcon from "@mui/icons-material/BroadcastOnPersonalOutlined";
import SportsScoreOutlinedIcon from "@mui/icons-material/SportsScoreOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { stepHeadObj } from "@/data/stepperheaderObj";
import { StepProps } from "@/types/registrationTypes";
import useRegistrationStore from "@/store/registerStore";
import useCountries from "@/hooks/useCountries";
import { API_URL } from "@/constant";
import { Controller } from "react-hook-form";
import { registrationSchema } from "@/lib/StepperFormValidation";
import { z } from "zod";

type PersonalInfoType = z.infer<typeof registrationSchema>;

const PersonalInfoStep: React.FC<StepProps> = ({
  formMethods,
}) => {
  const [countryOption] = useCountries(API_URL);
  const [flag, setFlag] = useState();
  const {
    register,
    watch,
    control,
    trigger,
    formState: { errors },
  } = formMethods;

  const watchFlag = watch("country");
  const { personalInfo, setPersonalInfo, serverResponseGenerateOTP } = useRegistrationStore();
  const watchFirstName = watch("firstName");
  const watchLastName = watch("lastName");
  const watchMobileNumber = watch("mobileNumber");
  const watchPersonalBusinessGroupValue = watch("personalBusinessGroupValue");
  const watchPassword = watch("password");

  useEffect(() => {
    const flagObj = countryOption.find((obj) => {
      return obj.value === watchFlag;
    });
    setFlag(flagObj?.flag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchFlag]);

  useEffect(() => {
    setPersonalInfo({
      firstName: watchFirstName,
      lastName: watchLastName,
      mobileNumber: watchMobileNumber,
      personalBusinessGroupValue: watchPersonalBusinessGroupValue,
      password: watchPassword,
      countryCode: watchFlag,
    });
    trigger("firstName");
    trigger("lastName");
    trigger("mobileNumber");
    trigger("personalBusinessGroupValue");
    trigger("password");
    trigger("country");
  }, [
    watchFirstName,
    watchLastName,
    watchMobileNumber,
    watchPersonalBusinessGroupValue,
    watchPassword,
    setPersonalInfo,
    trigger,
  ]);

  // function that handles the mobile number input  format to "233-054631-3876"
  // const handleMobileNumberChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   let input = event.target.value.replace(/\D/g, "");
  //   input = input.slice(0, 13); // truncate if too long
  //   let size = input.length;
  //   if (size < 4) {
  //     input = input;
  //   } else if (size < 7) {
  //     input = input.substring(0, 3) + "-" + input.substring(3, 6);
  //   } else if (size < 10) {
  //     input =
  //       input.substring(0, 3) +
  //       "-" +
  //       input.substring(3, 6) +
  //       "-" +
  //       input.substring(6, 9);
  //   } else {
  //     input =
  //       input.substring(0, 3) +
  //       "-" +
  //       input.substring(3, 6) +
  //       "-" +
  //       input.substring(6, 10) +
  //       "-" +
  //       input.substring(10, 13);
  //   }
  //   return input;
  // };
  function handleMobileNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Remove any non-numeric characters from the input
    const numericInput = e.target.value.replace(/\D/g, "");
    return numericInput;
  }

  return (
    <form className="w-full">
      {/* .................PERSONAL BUSINESS GROUP VALUE......................... */}
      <section className="shiftsmall">
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
        <p>
          Step {stepHeadObj[2].step}/{stepHeadObj.length - 1}
        </p>
        <h1 className="text-3xl font-extrabold"> Enter Personal Details</h1>
        {/* <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <BroadcastOnPersonalOutlinedIcon />
          <input
            type="number"
            placeholder="Personal Business Group Value"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("personalBusinessGroupValue", {
              required: true,
              defaultValue: 2,
            })}
          />
          {errors.personalBusinessGroupValue && (
            <span className="text-red-500">
              {errors.personalBusinessGroupValue.message}
            </span>
          )}
        </div> */}
        

        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <LockOpenOutlinedIcon />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && (
          <span className="text-red-500 bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.password.message}</span>
        )}
      </section>

      {/* ................FIRST AND LAST NAMES SECTION......................... */}

      <section className="flex shiftsmall">
        <div className="flex items-center justify-center w-full border mr-[1rem] border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <HowToRegOutlinedIcon />
          <input
            type="text"
            placeholder="firstName"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("firstName", { required: true })}
          />
        </div>

        <div className="flex items-center justify-center w-full  border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <HowToRegOutlinedIcon />
          <input
            type="text"
            placeholder="lastName"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("lastName", { required: true })}
          />
        </div>
      </section>
      {errors.firstName && (
        <span className="text-red-500 bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">
          {errors.firstName.message}
          <br />
        </span>
      )}
      {errors.lastName && (
        <span className="text-red-500 bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.lastName.message}</span>
      )}

      {/* .............................COUNTRY CODE AND MOBILE NUMBER....................................... */}

      <section className="flex shiftsmall">
        {/* ........................................................... */}
        <div className="flex items-center mb-3">
          <div className="flex items-center justify-center w-full  mr-[1rem] border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
            <div className="flex-shrink-0 mr-2">
              {flag && (
                <img alt="country image" src={flag} className="w-4 h-4" />
              )}
              {!flag && <SportsScoreOutlinedIcon />}
            </div>
            <select
              className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
              aria-label="Default select example"
              required
              minLength="2"
              maxLength="50"
              value={watchFlag}
              {...register("country", {
                required: true,
                defaultValue: countryOption[0]?.value,
              })}
            >
              {countryOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>{" "}
        {errors.country && (
          <span className="text-red-500 bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.country.message}</span>
        )}
        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          {/* ..............COMMENT................ */}
          {/* Yes, when using the `Controller` component from `react-hook-form`, the input field is still registered with
          the form. The `Controller` component is designed to handle scenarios where you need to control the input's value 
          or handle its events directly. It takes care of registering the field, managing its state, and unregistering it when the component unmounts.
          In your code, the `name` prop of the `Controller` component is set to `"mobileNumber"`, which means the input field will be 
          registered with the form under this name. The `control` prop is set to `control`, which is provided by `useForm()`, and it's used to 
          connect the `Controller` to the form. The `rules` prop is used to set validation rules for the field.
          The `render` prop is used to render the actual input field. The `field` object provided by 
          the `render` prop contains the `onChange`, `onBlur`, and `value` props, which are spread onto the input field 
          with `{...field}`. This connects the input field to the form and allows `react-hook-form` to manage its state.
          So, even though you're handling the `onChange` event manually, the input field is still registered with the form 
          and its value is managed by `react-hook-form`. */}
          <PhoneAndroidOutlinedIcon />
          <Controller
            name="mobileNumber"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="(123) 456-7890-876"
                className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
                onChange={(e) => {
                  const numericInput = handleMobileNumberChange(e);
                  field.onChange(numericInput);
                }}
              />
            )}
          />
        </div>
      </section>
      {errors.mobileNumber && (
        <span className="text-red-500 bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.mobileNumber.message}</span>
      )}
    </form>
  );
};
export default PersonalInfoStep;
