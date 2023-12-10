import React, { useEffect } from "react";
import { stepHeadObj } from "@/data/stepperheaderObj";
import useRegistrationStore from "@/store/registerStore";
import BlinkingLight from "../BlinkingLight";

const StepperSideBar = () => {
  const { currentStep, setCurrentStep } = useRegistrationStore();

  return (
    <div className="">
      {stepHeadObj.map((item, key) => {
        return (
          <div key={key} className="flex flex-col items-end p-2 md:mr-[3rem] mb-[-2rem]">
            <article className="flex items-center justify-center gap-8 mb-1 text-white">
              {/*
               * File: StepperSideBar.tsx
               * Language: TypeScript
               *
               * Summary:
               * This code snippet renders a text element with a gray color for the sidebar of a stepper component.
               * The text content is dynamically assigned from the 'title' property of the 'item' object.
               *  <................................COMMENT.........................................>
               */}
              <p className="flex flex-col items-end p-2">
                <span className="font-extrabold">{item.title}</span>
                <span className="text-[11px] text-[gray]">
                  {item.description}
                </span>
              </p>

              <p className="flex items-baseline content-end self-end justify-center">
                <span className="flex items-center w-12 h-12 bg-[#8687a8] rounded-full justify-evenly my-3 mx-auto">
                  {item && item.imgSrc && (
                    <item.imgSrc className="w-[30px] h-[30px]" />
                  )}
                </span>
              </p>
            </article>
            <div>
              {/* at the start of the moving, show the border beneath all the images 
              except the last one, and when movement start from the first change each 
              visited image's border color to green but when it gets to the last do nothing 
              <................................COMMENT.........................................>
              */}

              {key < stepHeadObj.length - 1 && (
                <p
                  className={`border-[2px] ${
                    currentStep === key
                      ? "border-red-500"
                      : currentStep > key
                      ? "border-[#23b732]"
                      : "border-[#66339973]"
                  } flex items-center h-10 mt-[-1rem] mr-[1.4rem] text-xs font-light text-center justify-evenly`}
                ></p>
              )}
            </div>

            {/* ...............BLINKING LIGHT EFFECT................. */}
            <section className="absolute top-[20%]">
            {currentStep === key && currentStep < stepHeadObj.length - 1 && <BlinkingLight />}
              </section>
          </div>
        );
      })}
    </div>
  );
};

export default StepperSideBar;
