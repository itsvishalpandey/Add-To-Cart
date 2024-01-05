import axios from "axios";

export const SignUpApi = async ({ username, email, password }) => {
  try {
    const response = await axios.post("http://localhost:3000/users/register", {
      username,
      email,
      password,
    });

    if (response.data === "User already registered") {
      alert("User already registered");
    } else {
      alert("User created");
    }
  } catch (error) {
    console.error("Error registering user:", error);
    alert("Error registering user");
  }
  return null;
};
