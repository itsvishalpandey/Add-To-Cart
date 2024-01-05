import React, { useEffect, useState } from "react";
import SignUpPage from "./SignUpPage";
import axios from "axios";

function SignUp() {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const getApi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        userInput
      );
      // console.log(response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  useEffect(() => {
    getApi();
  }, [userInput]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-100 absolute top-0">
        <SignUpPage setUserInput={setUserInput} />
      </div>
    </>
  );
}

export default SignUp;
