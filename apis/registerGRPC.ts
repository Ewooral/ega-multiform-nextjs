import {CustomerAccountClient} from "@/proto/generated/CustomerServiceClientPb"
import {CustomerAccountMessage} from "@/proto/generated/Customer_pb"
import { API_URL } from "@/constant"
import { RegistrationState } from "@/types/registrationTypes"

const client = new CustomerAccountClient(API_URL)

export const registerGRPC = (data: any) => {
    const request = new CustomerAccountMessage()
    console.log("Registration Data: ", data.toObject())
    request.setCountrycode(data.personalInfo.countryCode)
    request.setEmailaddress(data.emailAddress)
    request.setLanguageid('en')
    request.setPersonalbusinessgroupvalue(2)
    request.setFirstname(data.personalInfo.firstName)
    request.setLastname(data.personalInfo.lastName)
    request.setMobilenumber(data.personalInfo.mobileNumber)
    request.setPassword(data.personalInfo.password) 
    request.setBusinessname(data.businessInfo.businessName)
    request.setBusinesscontactpersonmobilenumber(data.businessInfo.businessContactPersonMobileNumber)
    request.setCountrycodeforfirsteganowwallet(data.businessInfo.countryCodeForFirstEganowWallet)
    request.setMobileorweb(data.businessInfo.mobileOrWeb)
    request.setMobilenodialcode(data.businessInfo.mobileNoDialCode)
    request.setCustomersixdigitpin(data.customerSixDigitPIN)
    request.setOtpvalue(data.otpValue)



    const metadata = {
        eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
        eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
      }
  

  return new Promise((resolve, reject) => {
    client.createCustomerAccount(request, metadata, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.toObject());
        // const obj = response.toObject();
        // console.log("Response", obj)
        // if (obj.issuccess && obj.messagesuccessfulorfailed === 'SUCCESSFUL') {
        //     setServerResponse({
        //         issuccess: true,
        //         messagesuccessfulorfailed: 'SUCCESSFUL',
        //         message: obj.message,
        //     })
            
        //   console.log('Congratulations, you just registered Successfully');
        // }
        // else{
        //     setServerResponse({
        //         issuccess: false,
        //         messagesuccessfulorfailed: 'REGISTRATION FAILED',
        //         message: obj.message,
        //     })
        // }
      }
    });
  });
};