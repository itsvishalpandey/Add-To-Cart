import axios from "axios";

export const SignInApi = async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:3000/users/login", {
      email,
      password,
    });

    console.log(response.data.token);
    console.log(response.data);

    if (response.data.message === "Login Successfull") {
      localStorage.setItem("authToken", response.data.token);
      alert("Login successful");

      window.location.href = "/profile";
    } else {
      alert("Username or password doesn't match");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    alert("Error logging in");
  }
};
