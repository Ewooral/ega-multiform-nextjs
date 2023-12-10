"use client";
import React, { useEffect } from "react";
import useRegistrationStore from "@/store/registerStore";
import clsx from "clsx";
import RenderActiveStep from "./RenderActiveStep";
import dynamic from "next/dynamic";

const Stepper = () => {
  /* ? The issue is related to the server-side rendering (SSR) and client-side rendering mismatch. 
   ! The server renders with an initial state, and then when the client loads, it updates the state, causing a mismatch.

  * In Next.js, you can use the `useEffect` hook to delay the state update until after the component is mounted, 
  which means after the server-side rendering. However, this approach might not work in your case because the state update is dependent on the `currentStep` state itself.
   * Summary:
  TODO A better approach would be to use the `next/dynamic` function to dynamically import the `StepperSideBar` component 
  with `{ ssr: false }`. This will disable server-side rendering for this component, and it will only be rendered on the client side.
 */

  const StepperSideBar = dynamic(() => import("./StepperSideBar"), {
    ssr: false,
  });

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Header */}
        <div className={clsx`col-span-3 bg-[#02044a]`}>
          <div className={clsx`grid w-full grid-cols-6 bg-[#02044a]`}>
            {/* ..............STEPPER SIDEBAR................ */}
            <div className={clsx`h-[100%] col-span-2  border-r-2 border-[#66339973] `}>
              <StepperSideBar />
            </div>

            {/* ...........STEPPER FORM.................. */}
            <div className={clsx`h-full col-span-3 text-white flex flex-col justify-between items-start p-[3rem]`}>
              <RenderActiveStep />
            </div>
            <div className={clsx`h-full col-span-1 border-l-2 border-[#66339971]`}>Column 3</div>
          </div>
        </div>
        {/* <Settings /> */}
      </div>
    </>
  );
};

export default Stepper;
