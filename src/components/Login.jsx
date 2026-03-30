import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";

const USER_IMG = "https://occ-0-988-1007.1.us-east-1.fc.lightningbase-cdn.com/sites/default/files/default_images/default-user-icon.png";

const loginSchema = z.object({
  fullName: z.string().min(1, "Full Name is required").optional(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters long."),
});

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      if (!isSignInForm) {
        // Sign Up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        const user = userCredential.user;

        updateProfile(user, {
          displayName: data.fullName,
          photoURL: USER_IMG,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }),
            );
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      } else {
        // Sign In logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        const user = userCredential.user;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode + ": " + errorMessage);
    }
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="login">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
          alt="Logo"
        />
      </div>
      <div className="absolute min-h-2/12 mt-20 mx-auto flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-white z-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-80 p-4 mx-auto flex flex-col bg-black/80 rounded-md"
        >
          <h3 className="text-white text-sm mb-4 font-normal text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="m-0">
            {isSignInForm ? (
              <h2 className="text-white text-3xl mb-4 font-bold text-center">
                Sign In
              </h2>
            ) : (
              <h2 className="text-white text-3xl mb-4 font-bold text-center">
                Sign Up
              </h2>
            )}
            {!isSignInForm && (
              <>
                <label className="text-gray-500">Full Name</label>
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="Full Name"
                  className="p-3 my-2 bg-black/70 rounded-md w-full text-base font-normal border border-gray-500"
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}
              </>
            )}

            <label className="text-gray-500">Email</label>

            <input
              {...register("email")}
              type="text"
              placeholder="Email Address"
              className="p-3 my-2 bg-black/70 rounded-md w-full text-base font-normal border border-gray-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="text-gray-500">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="p-3 my-2 bg-black/70 rounded-md w-full text-base font-normal border border-gray-500"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="w-full p-3 mb-2 bg-red-600 rounded-md text-xl"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <h5
              className="text-white text-sm mt-4 cursor-pointer"
              onClick={toggleForm}
            >
              {isSignInForm ? (
                <>
                  Don't have an account?{" "}
                  <span className="text-red-600">Sign Up</span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span className="text-red-600">Sign In</span>
                </>
              )}
            </h5>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
