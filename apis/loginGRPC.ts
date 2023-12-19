import { useState } from 'react'
import { useRouter } from 'next/router'
import { CustomerAccountClient } from '@/proto/generated/CustomerServiceClientPb'
import { LoginRequestMessage } from '@/proto/generated/Customer_pb'
import { API_URL } from '@/constant'
import { LoginState } from '@/types/registrationTypes'

const client = new CustomerAccountClient(API_URL)

export const loginGRPC = (data: LoginState) => {
    const request = new LoginRequestMessage()
    console.log("Please check the data: ", data)
    request.setCountrycode(data.login.countryCode)
    request.setCustomerid(data.login.customerId)
    request.setLanguageid('en')
    request.setMobileorweb('WEB')
    request.setPassword1orpin2orhpin3option(1)
    request.setPasswordorpin(data.login.passwordOrPin)
    request.setPersonalbusinessgroupvalue(2)

    const metadata = {
        eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
        eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
      }
  

  return new Promise((resolve, reject) => {
    client.loginUserBusiness(request, metadata, (err, response) => {
      if (err) {
        reject(err);
        console.error("Error: ", err)
      } else {
        resolve(response.toObject());
        const obj = response.toObject();
        console.log("Response", obj)
      }
    });
  });
};



