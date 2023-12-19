"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import useCountries from "@/hooks/useCountries";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SportsScoreOutlinedIcon from "@mui/icons-material/SportsScoreOutlined";
import { API_URL } from "@/constant";
import useRegistrationStore from "@/store/registerStore";
import { loginGRPC } from "@/apis/loginGRPC";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {LoadingSpinner} from "@/components/CustomComponents";
import Link from "next/link";
import {CustomErrorToaster} from "@/components/CustomComponents";



// Define Zod schema for login data
const loginSchema = z.object({
  countryCode: z.string(),
  customerId: z.string(),
  passwordOrPin: z
    .string()
    .min(6, { message: `Password must be atleast 6 characters` })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message: `Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character`,
      }
    ),
  password1OrPin2OrHPin3Option: z.number(),
  mobileOrWeb: z.string(),
  personalBusinessGroupValue: z.number(),
});

type loginType = z.infer<typeof loginSchema>;

const page = () => {
  const [countryOption] = useCountries(API_URL);
  const [flag, setFlag] = useState();
  const[isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false);
  const {
    login,
    setLogin,
    serverResponseGenerateOTP,
 
    loginResponse,
    setLoginResponse,
  } = useRegistrationStore();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const countryCode = watch("countryCode");
  const customerId = watch("customerId");
  const passwordOrPin = watch("passwordOrPin");
  const mobileOrWeb = watch("mobileOrWeb");
  const router = useRouter();


  useEffect(() => {
    setLogin({
      //@ts-ignore
      countryCode: countryCode,
      customerId: customerId,
      passwordOrPin: passwordOrPin,
      mobileOrWeb: mobileOrWeb,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode, customerId, passwordOrPin, mobileOrWeb]);

  useEffect(() => {
    const flagObj = countryOption.find((obj) => {
      return obj.value === countryCode;
    });
    setFlag(flagObj?.flag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      event?.preventDefault();
      // @ts-ignore
      const response = (await loginGRPC({ login })) as loginResponse;
     
      if(!response?.issuccess && response.messagesuccessfulorfailed !== "SUCCESSFUL"){
        setLoginResponse(response)
        setShow(true)
        // console.log("RESPONSE::::", response);
        setIsLoading(false)
        return;
      }
      else{
        setLoginResponse(response)
        router.push("/dashboard")
      }
      
    } catch (err) {
      setShow(true)
      // console.log("ERROR::::", err);
      setIsLoading(false)
    }
  };


  return (
    <div className="grid h-screen place-items-center">
    {isLoading && 
    
    <LoadingSpinner />
      }
    <div className="beautify-card">
      <form className="bg-[#00000040]">
      
        {/* ................EMAIL SECTION......................... */}

        <section className="flex flex-col items-center justify-center px-6 shiftsmall">
          <Image
            src="/ega.png"
            alt="img"
            width={100}
            height={100}
            className="flex items-center justify-center"
          />

          <h1 className="text-3xl font-extrabold">
            {" "}
            Kindly enter your login credentials
          </h1>
          <div className="flex items-center justify-center w-full border  border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
            <HowToRegOutlinedIcon />
            <input
              type="email"
              placeholder="Customer Id"
              className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
              {...register("customerId", { required: true })}
            />
          </div>
        </section>
        {errors.customerId && (
          <span className="text-red-500  text-[12px] p-[4px] rounded-[7px]">
            {errors.customerId.message}
            <br />
          </span>
        )}

        {/* .................PASSWORD AND ERROR SECTION......................... */}
        <section className="px-6 shiftsmall">
          <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
            <LockClockOutlinedIcon />
            <input
              type="password"
              placeholder="Password or Pin"
              className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
              {...register("passwordOrPin", { required: true })}
            />
          </div>
          {/* <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
            <LanguageIcon />
            <input
              type="text"
              placeholder="Mobile Or Web"
              className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
              {...register("mobileOrWeb", { required: true })}
            />
          </div> */}
          {errors.countryCode && (
            <span className="text-red-500 bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">
              {errors.countryCode.message}
            </span>
          )}
        </section>

        {/* .............................COUNTRY CODE AND MOBILE NUMBER....................................... */}

        <section style={{marginBottom:"-2rem"}}
        className="flex justify-between shiftsmall px-6 pb-[2rem] 
        ">
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
                value={countryCode}
                {...register("countryCode", {
                  required: true,
                  // @ts-ignore
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
          <button
            type="submit"
            onClick={() => {
              trigger();
              console.log("button clicked!!");
              onSubmit();
            }}
            className="px-4 py-2 text-white bg-[#cc0229] rounded-md w-full"
          >
            Login
          </button>

          {/* ERROR MESSAGE */}
          <CustomErrorToaster
                  message={loginResponse && loginResponse?.message || ''}
                  show={show}
                  setShow={setShow}
                />
          {errors.countryCode && (
            <span className="text-red-500 bg-[#ff00004f] text-[12px] p-[4px] rounded-[7px]">
              {errors.countryCode.message}
            </span>
          )}
        </section>
        <section style={{marginBottom:"2rem"}}>
          <div>
          Forgotten password? <Link href="#"><span className="text-blue-400"> Reset!</span> </Link> 
          </div>
          <div>
          Don't have an account?<Link href="/"><span className="text-blue-400"> Register</span> </Link> 
          </div>
        </section>
      </form>
    </div>
    </div>
  );
};

export default page;
