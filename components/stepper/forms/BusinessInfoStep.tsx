import React, { useEffect, useState } from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import SportsScoreOutlinedIcon from "@mui/icons-material/SportsScoreOutlined";
import { stepHeadObj } from "@/data/stepperheaderObj";
import { StepProps } from "@/types/registrationTypes";
import useRegistrationStore from "@/store/registerStore";
import useCountries from "@/hooks/useCountries";
import { API_URL } from "@/constant";
import { Controller } from "react-hook-form";
import { registrationSchema } from "@/lib/StepperFormValidation";
import { z } from "zod";


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
  const { setBusinessInfo } = useRegistrationStore();
  const watchBusinessName = watch("businessName");
  const watchcountryCodeForFirstEganowWallet = watch(
    "countryCodeForFirstEganowWallet"
  );
  const watchbusinessContactPersonMobileNumber = watch(
    "businessContactPersonMobileNumber"
  );
  const watchmobileNoDialCode = watch("mobileNoDialCode");
  const watchmobileOrWeb = watch("mobileOrWeb");

  useEffect(() => {
    const flagObj = countryOption.find((obj) => {
      return obj.value === watchFlag;
    });
    setFlag(flagObj?.flag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchFlag]);

  useEffect(() => {
    setBusinessInfo({
      businessName: watchBusinessName,
      countryCodeForFirstEganowWallet: watchFlag,
      businessContactPersonMobileNumber: watchbusinessContactPersonMobileNumber,
      mobileOrWeb: watchmobileOrWeb,
      mobileNoDialCode: watchmobileNoDialCode,
    });
    trigger("businessName");
    trigger("countryCodeForFirstEganowWallet");
    trigger("businessContactPersonMobileNumber");
    trigger("mobileOrWeb");
    trigger("mobileNoDialCode");
    trigger("country");
  }, [
    watchBusinessName,
    watchcountryCodeForFirstEganowWallet,
    watchbusinessContactPersonMobileNumber,
    watchmobileNoDialCode,
    watchmobileOrWeb,
    watchFlag,
    trigger,
    setBusinessInfo,
  ]);

  // function that handles the mobile number input  format to "233-054631-3876"
  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-numeric characters from the input
    const numericInput = e.target.value.replace(/\D/g, "");
    return numericInput;
  };

  return (
    <form className="w-full">
      {/* .................BUSINESS NAME......................... */}
      <section className="shiftsmall">
        <p>
          Step {stepHeadObj[3].step}/{stepHeadObj.length - 1}
        </p>
        <h1 className="text-3xl font-extrabold"> Business Details Go Here</h1>

        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <HowToRegOutlinedIcon />
          <input
            type="text"
            placeholder="Business Name"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("businessName", { required: true })}
          />
        </div>
        {errors.businessName && (
          <span className="text-red-500  bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.businessName.message}</span>
        )}
      </section>

      {/* ................FIRST AND LAST NAMES SECTION......................... */}

      <section className="flex shiftsmall">
        <div className="flex items-center justify-center w-full border mr-[1rem] border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <HowToRegOutlinedIcon />
          {/* <input
            type="text"
            placeholder="mobileOrWeb"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("mobileOrWeb", { required: true })}
          /> */}
          <select
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            aria-label="Default select example"
            {...register("mobileOrWeb", {
              required: true,
              defaultValue: "web",
            })}
          >
            <option value="web">WEB</option>
            <option value="mobile">MOBILE</option>
          </select>
        </div>

        <div className="flex items-center justify-center w-full  border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <HowToRegOutlinedIcon />
          <input
            type="text"
            placeholder="mobileNoDialCode"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
            {...register("mobileNoDialCode", { required: true })}
          />
        </div>
      </section>
      {errors.mobileOrWeb && (
        <span className="text-red-500  bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">
          {errors.mobileOrWeb.message}
          <br />
        </span>
      )}
      {errors.mobileNoDialCode && (
        <span className="text-red-500  bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.mobileNoDialCode.message}</span>
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
          <span className="text-red-500  bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">{errors.country.message}</span>
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
            name="businessContactPersonMobileNumber"
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
      {errors.businessContactPersonMobileNumber && (
        <span className="text-red-500  bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">
          {errors.businessContactPersonMobileNumber.message}
        </span>
      )}
    </form>
  );
};
export default PersonalInfoStep;
