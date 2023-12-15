"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import RenderActiveStep from "./RenderActiveStep";
import dynamic from "next/dynamic";
import Modal from "@/components/Modal";
import CustomButton from "../CustomButton";

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
            <div
              className={clsx`h-[100%] col-span-2  border-r-2 border-[#66339973] `}
            >
              <StepperSideBar />
            </div>

            {/* ...........STEPPER FORM.................. */}
            <div
              className={clsx`h-full col-span-3 text-white flex flex-col justify-between items-start px-[1rem]`}
            >
              <RenderActiveStep />
            </div>
            <div
              className={clsx`h-full col-span-1 p-4 border-l-2 border-[#66339971]`}
            >
              {/* SETTINGS */}

              {/*  Option select */}
              <div className="w-full max-w-xs mx-auto">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="grid-state"
                >
                  Change background color
                </label>
                <div className="relative">
                  <select
                    className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-[#02044a] border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New York</option>
                    <option>New Jersey</option>
                    <option>California</option>
                    <option>Texas</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Settings /> */}
      </div>
    </>
  );
};

export default Stepper;
