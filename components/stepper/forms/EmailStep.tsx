import Image from "next/image";
import React from "react";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import { stepHeadObj } from "@/data/stepperheaderObj";

const EmailStep = () => {
  return (
    
      <form className="w-full">
        {/* .................EMAIL SECTION......................... */}
        <section className="space-large">
          <p>Step {stepHeadObj[0].step}/{stepHeadObj.length - 1}</p>
          <h1 className="text-3xl font-extrabold"> Enter Email Address</h1>
        <div className="flex items-center justify-center w-full border border-solid border-[rebeccapurple] p-[1rem] rounded-lg">
          <MarkEmailUnreadOutlinedIcon />
          <input
            type="kindly enter your email address"
            placeholder="Email"
            className="w-full p-2 text-white bg-transparent border-2 border-none outline-none rounded-[3rem]"
          />
        </div>
        </section>
        
      </form>
  )
};

export default EmailStep;
