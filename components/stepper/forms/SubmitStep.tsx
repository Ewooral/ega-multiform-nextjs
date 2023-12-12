import React from 'react'
import useRegistrationStore from "@/store/registerStore";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const SubmitStep = () => {
  const {serverResponseGenerateOTP } = useRegistrationStore();
  return (
    <div 
    className='sppace-large flex flex-col justify-center items-center w-full p-[3rem] mt-[2rem] mb-[2rem]'>
      {serverResponseGenerateOTP?.issuccess && (
          <span 
          style={{background:"#184f18", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
          className="text-green-500"> {serverResponseGenerateOTP?.message}</span>
        )} 
        <span>
          <CheckCircleOutlineOutlinedIcon style={{fontSize: "5rem", color: "#184f18"}} />
        </span>
      <h6 className='font-bold text-center'>
       Thank you for registering with us. We will get back to you shortly.
      </h6>
      </div>
  )
}

export default SubmitStep