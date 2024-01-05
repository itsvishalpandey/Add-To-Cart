import axios from "axios";

export const SignInApi = async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:3000/users/login", {
      email,
      password,
    });

    if (response.data === "Username or password doesn't match") {
      alert("Username or password doesn't match");
    } else {
      alert("login successfull");
    }
  } catch (error) {
    console.error("Error registering user:", error);
    alert("Error registering user");
  }
  return null;
};
