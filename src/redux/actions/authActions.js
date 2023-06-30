// authActions.js

import { toast } from "react-toastify";

export const signIn = (credentials) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      // Get the user data from local storage
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData) {
        const error = { message: "User not found. Please sign up first." };
        dispatch({ type: "SIGN_IN_FAILURE", payload: error });
        toast.error(error.message);
        reject(error);
        return;
      }

      const { email, password } = credentials;

      // Check if the provided email matches the stored email
      if (userData.email !== email) {
        const error = {
          message: "Invalid email. Please check your email and try again.",
        };
        dispatch({ type: "SIGN_IN_FAILURE", payload: error });
        toast.error(error.message);
        reject(error);
        return;
      }

      // Check if the provided password matches the stored password
      if (userData.password !== password) {
        const error = {
          message:
            "Invalid password. Please check your password and try again.",
        };
        dispatch({ type: "SIGN_IN_FAILURE", payload: error });
        toast.error(error.message);
        reject(error);
        return;
      }

      // Simulate a successful sign-in
      setTimeout(() => {
        // Dispatch SIGN_IN_SUCCESS action if sign-in is successful
        dispatch({ type: "SIGN_IN_SUCCESS" });
        toast.success("SigIn Succesful");
        resolve(); // Resolve the promise
      }, 1000);
    }).catch((error) => {
      // Dispatch SIGN_IN_FAILURE action if there is an error
      dispatch({ type: "SIGN_IN_FAILURE", payload: error });
      toast.error(error);
      throw error;
    });
  };
};



export const signUp = (userData) => {
  return (dispatch) => {
    try {
      // Perform the sign-up logic here, such as making an API request
      // For this example, we'll simulate a successful sign-up
      // You can replace this with your actual sign-up logic
      const { email, password } = userData;

      // Check if user with the provided email already exists
      const existingUser = JSON.parse(localStorage.getItem("user"));
      if (existingUser && existingUser.email === email) {
        const error = { message: "User with this email already exists. Please use a different email." };
        throw error;
      }

      // Simulate successful sign-up
      const user = {
        id: 1,
        email: email,
        password: password,
      };

      // Store the user data in local storage
      localStorage.setItem("user", JSON.stringify(user));

      // Dispatch SIGN_UP_SUCCESS action
      dispatch({
        type: "SIGN_UP_SUCCESS",
        payload: user,
      });

      toast.success("You have successfully signed up. Please login to continue.");
    } catch (error) {
      dispatch({ type: "SIGN_UP_FAILURE", payload: error });
      toast.error(error.message);
    }
  };
};
