import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field.")
    .email("Please enter a valid email."),
  password: yup
    .string()
    .min(4, "Please enter a longer password.")
    .max(20)
    .required("Password is a required field."),
});
export default function LandingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [loginBackground, setLoginBackground] = useState(true);
  return (
    <div className="min-h-screen p-10">
      <div className="bg-gradient-to-b from-[#C0FFE1] to-[#FCFCFC] shadow-lg rounded-xl flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-16 w-1/2 flex-col justify-center items-center min-h-full"
        >
          <div className="flex justify-center mt-24">
            <div className="login-buttons rounded-2xl bg-[#C2F1EB] h-16 flex justify-center items-center w-[30%] min-w-[200px] p-[2px]">
              <div
                className={`flex items-center justify-center w-1/2 font-semibold rounded-2xl h-full ${loginBackground ? "bg-white" : "bg-transparent"} transition-all cursor-pointer`}
                onClick={() => {
                  setLoginBackground(true);
                }}
              >
                Login
              </div>
              <div
                className={`flex items-center justify-center w-1/2 font-semibold rounded-2xl h-full ${!loginBackground ? "bg-white" : "bg-transparent"} transition-all cursor-pointer`}
                onClick={() => {
                  setLoginBackground(false);
                }}
              >
                Signup
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="w-96 min-w-72 border-2 border-[#75EDD8] h-16 rounded-xl flex items-center align-middle px-10">
              <div>
                <Mail />
              </div>
              <input
                className="ms-10 outline-none w-full"
                placeholder="Email"
                {...register("email")}
              />
            </div>
          </div>
          {errors.email?.message && (
            <p className="text-red-400" align="center">
              {errors.email.message}
            </p>
          )}
          <div className="mt-2 flex justify-center">
            <div className="w-96 min-w-72 border-2 border-[#75EDD8] h-16 rounded-xl flex items-center align-middle px-10">
              <div>
                <Lock />
              </div>
              <input
                className="ms-10 outline-none w-full"
                placeholder="Password"
                type="password"
                {...register("password")}
              />
            </div>
          </div>
          {errors.password?.message && (
            <p className="text-red-400" align="center">
              {errors.password.message.charAt(0).toUpperCase() +
                errors.password.message.slice(1)}
            </p>
          )}
          <div className="flex justify-center mt-3">--
            <div className="ps-auto">Forgot password?</div>
          </div>
          <div className="flex justify-center w-full mt-5">
            <button className="h-16 bg-gradient-to-r hover:bg-gradient-to-l transition-colors ease-in-out from-[#00DDB6] to-[#00F5CA] font-semibold w-96 min-w-72 rounded-full text-lg">
              Login
            </button>
          </div>
        </form>
        <div className="w-1/2 flex justify-center items-center font-semibold">
          <div className="flex-col">
            <div className="text-7xl flex">
              {loginBackground ? "Welcome Back!" : "Welcome User!"}
            </div>
            <div className="font-normal flex justify-center mt-5 w-1/2 text-justify">
              {loginBackground
                ? "Please fill you email and password to access your account."
                : "Create a new account and explore new collections, collections in your favorite brand with lowest price ever, new deals. "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
