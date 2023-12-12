import {CustomerAccountClient} from "@/proto/generated/CustomerServiceClientPb"
import {CustomerTempVerifyOTRequestMessage} from "@/proto/generated/Customer_pb"
import { API_URL } from "@/constant"
import { RegistrationState } from "@/types/registrationTypes"

const client = new CustomerAccountClient(API_URL)

export const verifyOtpGRPC = (email: string, otp: string) => {
    const request = new CustomerTempVerifyOTRequestMessage()
    request.setCountrycode("GH0233")
    request.setEmailaddress(email)
    request.setLanguageid('en')
    request.setOtpvalue(otp)
    request.setPersonalbusinessgroupvalue(2)
    console.log("Request", request)

    const metadata = {
        eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
        eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
      }
  

  return new Promise((resolve, reject) => {
    client.createCustomerVerifyOTP(request, metadata, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.toObject());
        const obj = response.toObject();
        console.log("Response", obj)
      //   if (obj.issuccess && obj.messagesuccessfulorfailed === 'SUCCESSFUL') {
      //     setServerResponse({
      //         issuccess: true,
      //         messagesuccessfulorfailed: 'SUCCESSFUL',
      //         message: obj.message,
      //     })
          
      //   console.log('Congratulations, you just verified your otp Successfully');
      // }
      // else{
      //     setServerResponse({
      //         issuccess: false,
      //         messagesuccessfulorfailed: 'OTP VERIFICATION FAILED',
      //         message: obj.message,
      //     })
      // }
      }
    });
  });
};