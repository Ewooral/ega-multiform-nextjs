import React, { useEffect } from "react";
import { stepHeadObj } from "@/data/stepperheaderObj";
import useRegistrationStore from "@/store/registerStore";
import {BlinkingLight} from "../CustomComponents";
import { StaticLight } from "../CustomComponents";

const StepperSideBar = () => {
  const { currentStep, setCurrentStep } = useRegistrationStore();

  return (
    <div className="">
      {stepHeadObj.map((item, key) => {
        return (
          <div
            key={key}
            className="flex flex-col items-end p-2 md:mr-[3rem] mb-[-2rem]"
          >
            <div className="flex items-center justify-center gap-8 mb-1 text-white">
              {/*
               * File: StepperSideBar.tsx
               * Language: TypeScript
               *
               * Summary:
               * This code snippet renders a text element with a gray color for the sidebar of a stepper component.
               * The text content is dynamically assigned from the 'title' property of the 'item' object.
               *  <................................COMMENT.........................................>
               */}

               {/* THE TEXTS NEXT TO THE ICONS */}
              <div className="flex flex-col items-end p-2">
                <span className="font-extrabold">{item.title}</span>
                <span className="text-[11px] text-[gray]">
                  {item.description}
                </span>
              </div>
              
              {/* THE ICONS AND THEIR BACKGROUND COLORS AND BORDERS */}
              <section className="flex items-baseline content-end self-end justify-center">
                <span
                  className={`flex items-center w-12 h-12 rounded-full justify-evenly my-3 mx-auto ${
                    key < currentStep
                      ? "bg-green-800 border-white border-4"
                      : key === currentStep
                      ? "bg-red-500"
                      : currentStep === stepHeadObj.length - 1 ? "bg-green-800"
                      : "bg-[#8687a8]"
                  }`}
                >
                  {item && item.imgSrc && (
                    <item.imgSrc className="w-[20px] h-[20px]" />
                  )}
                </span>
              </section>
            </div>
            <div>
              {/* BORDER BENEATH THE ICONS
              at the start of the moving step, show the border beneath all the images 
              except the last one, and in the course, change each 
              visited image's border color to green but when it gets to the last step do nothing 
              <................................COMMENT.........................................>
              */}

              {key < stepHeadObj.length - 1 && (
                <div
                  className={`border-[2px] ${
                    currentStep === key
                      ? "border-red-500"
                      : currentStep > key
                      ? "border-[#23b732]"
                      : "border-[#66339973]"
                  } flex items-center h-10 mt-[-1rem] mr-[1.4rem] text-xs font-light text-center justify-evenly`}
                >
                  
                </div>
              )}
            </div>

            {/* ...............BLINKING LIGHT EFFECT................. */}
            <section className="absolute left-[32.9%]  mt-[2rem]">
              {currentStep === key && currentStep < stepHeadObj.length && (
                <BlinkingLight />
              )}
              {currentStep > key && currentStep < stepHeadObj.length && (
                <StaticLight />
              )}
            </section>

            {/* ..................COMMENTS............................ */}
            {/* 
            In this code, currentStep === key ? 'border-red-500' : currentStep > key ? 'border-[#23b732]' : 'border-[#66339973]' 
            applies the red color to the current step, the green color to the visited steps, 
            and the gray color to the unvisited steps. 
            {currentStep === key && currentStep < stepHeadObj.length - 1 && <BlinkingLight />} and 
            {currentStep > key && currentStep < stepHeadObj.length - 1 && <BlinkingLight />} 
            render the BlinkingLight component when the current step matches the key or the 
            current step is greater than the key, and the current step is less than the length
             of stepHeadObj minus 1. This ensures that the BlinkingLight component is unmounted when it 
             gets to the last step.
            </p> 
            */}
          </div>
        );
      })}
    </div>
  );
};

export default StepperSideBar;
