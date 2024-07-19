"use client";
import { useState } from "react";
import SignInForm from "./SigninFormModal";
import { Button } from "@/components/ui/button";
// import { set } from "date-fns";

const SignInButton = () => {
  // Handle popup visibility and closing
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const closePopUp = () => setIsPopupVisible(false);
  const handleClick = () => {
    setIsPopupVisible(true);
  };
  return (
    <div className="lg:inline-block">
      <div>
        {/* <button
          onClick={() => setIsPopupVisible(true)}
          className="rounded-xl bg-gray-50 px-6 py-2 text-sm font-bold text-gray-900 transition duration-200  hover:bg-gray-100 lg:ml-auto lg:inline-block"
        >
          Sign In
        </button> */}
        <Button onClick={handleClick} variant={"secondary"}>
          Sign In
        </Button>
      </div>
      {/* open popup is boolean and handle remove popup is a function */}
      <SignInForm isPopupOpened={isPopupVisible} closePopUp={closePopUp} />
    </div>
  );
};

export default SignInButton;
