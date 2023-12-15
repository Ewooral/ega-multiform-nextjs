"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useRegistrationStore from "@/store/registerStore";
const Page = () => {
  const { resetStepper, personalInfo } = useRegistrationStore();
  const router = useRouter();

  function handleReset() {
    if (resetStepper) {
      resetStepper();
      router.push("/");
    }
  }

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
        <div className="flex bg-[#403f3f] beautify-grid-columns gap-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/avatar.jpg"}
              alt="profile"
              width={300}
              height={300}
              className="bg-gray-100 rounded-full"
            />
            {/* <h2 className="text-[12px]">Elijah Owusu Boahen</h2>
          <h3 className="text-[12px]">Software Engineer</h3> */}
          </div>
          <article className="text-sm">
            The user profile page is a dedicated space that presents personal
            and business information about a user. It features a clean,
            grid-based layout with distinct sections for different types of
            information. The design uses a dark theme, providing a modern and
            professional look.
            <h1>Personal Info:</h1>
            <p className="bg-[white] p-[4px] text-black"> First name: {personalInfo.firstName}</p>
            <p className="bg-[white] p-[4px] text-black">Last  name:{personalInfo.lastName}</p>
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

export default Page;
