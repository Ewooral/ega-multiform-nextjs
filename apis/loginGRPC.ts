import { useState } from "react";
import { useRouter } from "next/router";
import { CustomerAccountClient } from "@/proto/generated/CustomerServiceClientPb";
import { LoginRequestMessage } from "@/proto/generated/Customer_pb";
import { API_URL } from "@/constant";
import { LoginState } from "@/types/registrationTypes";
require("dotenv").config();

const client = new CustomerAccountClient(API_URL);

export const loginGRPC = (data: LoginState) => {
  const request = new LoginRequestMessage();
  console.log("Please check the data: ", data);
  request.setCountrycode(data.login.countryCode);
  request.setCustomerid(data.login.customerId);
  request.setLanguageid("en");
  request.setMobileorweb("WEB");
  request.setPassword1orpin2orhpin3option(1);
  request.setPasswordorpin(data.login.passwordOrPin);
  request.setPersonalbusinessgroupvalue(2);

  const eganowappcustkey = process.env.NEXT_PUBLIC_EGANOWAPPCUSTKEY || "";
  const eganowapppassword = process.env.NEXT_PUBLIC_EGANOWAPPPASSWORD || "";

  const metadata = {
    eganowappcustkey: eganowappcustkey,
    eganowapppassword: eganowapppassword,
  };

  return new Promise((resolve, reject) => {
    client.loginUserBusiness(request, metadata, (err, response) => {
      if (err) {
        reject(err);
        console.error("Error: ", err);
      } else {
        resolve(response.toObject());
        const obj = response.toObject();
        console.log("Response", obj);
      }
    });
  });
};
