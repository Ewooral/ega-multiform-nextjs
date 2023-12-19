"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useRegistrationStore from "@/store/registerStore";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";


function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { serverResponseGenerateOTP, loginResponse } = useRegistrationStore();
    

    useEffect(() => {
      // @ts-ignore
      if (!loginResponse?.userjwttoken) {
        router.replace('/login');
        console.log("sorry!")
      } else {
        setIsLoading(false);
      }
    }, [serverResponseGenerateOTP, router]);

    if (isLoading) {
      return <div><LoadingSpinner /></div>; // Or your custom loading component
    }

    return <Component {...props} />;
  }
}


const Page = () => {
  const {resetStepper, personalInfo, loginResponse } = useRegistrationStore();
  const router = useRouter();

  
  function handleReset() {
    if (resetStepper) {
      resetStepper();
      router.push("/login");
    }
  }
  useEffect(() => {
    if (loginResponse) {
      console.log(loginResponse?.firstname)
    }
  }
  , [loginResponse]);

  return (
    <>
      <header className="flex justify-between p-2 font-bold text-black bg-blue-300 mb-7">
        <h1>Logo</h1>
        <nav>
          <button className="flex items-center justify-center mx-3 cursor-pointer">
            <a onClick={handleReset}>Logout</a>
          </button>
        </nav>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex bg-[#403f3f] beautify-grid-columns gap-4 rounded-tl-[8rem]">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/avatar.jpg"}
              alt="profile"
              width={300}
              height={300}
              className="bg-gray-100 rounded-full"
            />
          
          </div>
          <article className="m-4 text-sm ">
            The user profile page is a dedicated space that presents personal
            and business information about a user. It features a clean,
            grid-based layout with distinct sections for different types of
            information. The design uses a dark theme, providing a modern and
            professional look.
            <h1 className="font-bold">Personal Info:</h1>
            
            <span className=" text-blue-200 p-[4px] mb-4"> {loginResponse && loginResponse.firstname}</span>{" "}
            <span className="bg-[white] p-[2px] text-black rounded-lg">{loginResponse && loginResponse.lastname}</span>
          </article>
        </div>
        <div className="bg-[#403f3f] beautify-grid-columnsA">
          Personal Info{" "}
        </div>
        <div className="bg-[#403f3f] beautify-grid-columnsA">
          Business Info{" "}
        </div>
      </div>
    </>
  );
};




export default withAuth(Page);
