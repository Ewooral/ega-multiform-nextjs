import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registrationSchema = z.object({
  emailAddress: z
    .string()
    .email()
    .toLowerCase()
    .trim()
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
      message: `Invalid Email Address`,
    }),
  otpValue: z.string().length(6, { message: `OTP must be 6 digits` }),
  firstName: z
    .string()
    .toLowerCase()
    .min(3, { message: `First Name must be atleast 3 characters` }),
  lastName: z
    .string()
    .toLowerCase()
    .min(3, { message: `Last Name must be atleast 3 characters` }),
  password: z
    .string()
    .min(6, { message: `Password must be atleast 6 characters` })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message: `Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character`,
      }
    ),

  mobileNumber: z
    .string()
    .min(10, { message: `Mobile Number must be atleast 10 characters` }),
  personalBusinessGroupValue: z.number(),
  countryCode: z
    .string()
    .min(2, { message: `Country Code must be atleast 2 characters` }),

  personalInfo: z.object({}),
  businessInfo: z.object({}),
  businessName: z
    .string()
    .toLowerCase()
    .min(3, { message: `Business Name must be atleast 3 characters` }),
  countryCodeForFirstEganowWallet: z
    .string()
    .min(2, { message: `Country Code must be atleast 2 characters` }),
  businessContactPersonMobileNumber: z
    .string()
    .min(10, { message: `Mobile Number must be atleast 10 characters` }),
  mobileNoDialCode: z
    .string()
    .min(2, { message: `Mobile Number dial code must be atleast 2 characters` }),
  mobileOrWeb: z
    .string()
    .min(2, { message: `Field cannot be emtpy` }),

  customerSixDigitPIN: z
    .string()
    .length(6, { message: `PIN must be 6 digits` }),
  currentStep: z.number(),
});
