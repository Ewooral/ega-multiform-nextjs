"use client";
import Stepper from "../components/stepper/Stepper";
import { bgColorClasses } from "@/data/stylesValues";
import useRegisterStore from "@/store/registerStore";
import clsx from "clsx";
import { useEffect } from "react";

export default function Home() {
  const { bgColor } = useRegisterStore();

  useEffect(() => {
    // Update the CSS variable when the bgColor state changes
    // document.body.style.setProperty('--main-bg-color', bgColor);
    // If you want to replace all existing classes on the body with the new class, you can first 
    // remove all classes using classList.remove with the spread operator, and then add the new class. 
    // Here's how you can do it:
    const previousClasses = document.body.className.split(" ");
    document.body.classList.remove(...previousClasses);
    document.body.classList.add(bgColor);
  }, [bgColor]);

  return (
    // <main className="flex flex-col items-center justify-between min-h-screen p-24">
    <main>
      <section className="">
        <h1
          // style={{background:'#bbb', color: '#000', fontSize: '23px'}}
          className={clsx`font-normal text-[14px] text-start p-[5rem] ${bgColor}`}
        >
          Eganow Multi-Stepper Form
        </h1>
        <hr style={{ border: "1px solid #66339973" }} />
        <Stepper />
      </section>
      {/* <hr style={{border: '1px solid #66339973'}}/> */}
    </main>
  );
}
