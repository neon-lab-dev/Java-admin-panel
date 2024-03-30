import React from "react";
import logo from "../../assets/icon/logo.svg";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../assets/data/regex";
import AppFormErrorLine from "../../components/AppFromErrorLine";
import { login } from "../../api/auth";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setIsAuthenticating } from "../../store/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }) => login({ email, password }),
    onError: (error) => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
      reset();
    },
    onSuccess: () => {
      dispatch(setIsAuthenticating(true));
      queryClient.invalidateQueries({ queryKey: ["user"] }).then(() => {
        dispatch(setIsAuthenticating(false));
        navigate("/");
      });
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col place-content-center place-items-center justify-center items-center h-screen">
      <div className="lg:w-[888px] lg:h-[672px] w-4/6 h-4/6 sm:h-1/2 bg-white rounded-[20px] border border-stone-300 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col items-center mt-[29px]"
        >
          {/* {image and Dashboard} */}
          <div className="flex flex-col w-full justify-center items-center">
            <img className="lg:w-[130px] lg:h-[167px]" src={logo} />
            <p className="flex w-full justify-center text-zinc-800 lg:text-[32px] text-[24px] font-medium font-Lato leading-loose mt-[18px]">
              Dashboard Login
            </p>
          </div>
          {/* Email */}
          <div className="mt-[36px] w-full flex flex-col items-center">
            <div className="flex flex-col items-center w-5/6">
              <p className="lg:w-[515px] w-5/6  text-zinc-800  text-start text-base font-bold font-Lato leading-tight">
                Email
              </p>
            </div>
            <div className="flex flex-col items-center w-5/6">
              <input
                className="mt-2 lg:w-[515px] lg:h-[54px] w-5/6 bg-white rounded-[10px] border border-stone-300 placeholder:opacity-40 leading-9 pl-[16px] text-base font-light font-Lato"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  validate: (value) =>
                    EMAIL_REGEX.test(value) || "Invalid email",
                })}
              />
              {errors.email && (
                <AppFormErrorLine message={errors.email.message} />
              )}
            </div>
            {/* password */}
            <div className="flex flex-col mt-[24px] items-center w-5/6">
              <p className="lg:w-[515px] w-5/6  text-zinc-800 text-base font-bold font-Lato leading-tight">
                Password
              </p>
            </div>
            <div className="flex flex-col items-center w-5/6">
              <input
                className="mt-2 lg:w-[515px] lg:h-[54px] w-5/6 bg-white rounded-[10px] border border-stone-300 placeholder:opacity-40 leading-9 pl-[16px] text-base font-light font-Lato"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <AppFormErrorLine message={errors.password.message} />
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className="mt-[36px] lg:w-[515px] lg:h-16 w-4/6 h-12 bg-rose-500 rounded-xl disabled:opacity-60 disabled:cursor-default"
          >
            {isPending ? (
              <span className="loading loading-spinner loading-md text-white" />
            ) : (
              <p className="text-white text-xl font-bold font-Lato">Login</p>
            )}
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
