import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../elements/Button";
import InputField from "../elements/InputField";
// import Toggle from "../elements/Toggle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginRequest } from "../models/Auth";
// import axios from "axios";
// import { getBaseUrl } from "../hooks/baseUrl";
import { LOCAL_STORAGE_KEYS } from "../constants/Global";
import { setToStorage } from "../utils/token";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { routes } from "../constants/Route";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
});

type FieldKeys = "email" | "password";
const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    // reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    resolver: yupResolver<ILoginRequest>(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginRequest> = async () =>
    // payload: ILoginRequest
    {
      setIsLoading(true);
      try {
        //   const url = getBaseUrl() + "/auth/login";
        // const response = await axios.post(url, payload);

        const response = {
          data: {
            access_token: "abcd1234efgh5678",
            email: "user@example.com",
            name: "John Doe",
            role: "admin",
          },
        };

        setToStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN, response.data.access_token);
        setToStorage(LOCAL_STORAGE_KEYS.AUTH_EMAIL, response.data.email);
        setToStorage(LOCAL_STORAGE_KEYS.AUTH_NAME, response.data.name);
        setToStorage(LOCAL_STORAGE_KEYS.AUTH_ROLE, response.data.role);

        toast.success("Login successful!", {
          autoClose: 1500,
        });
        navigate("/");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Login failed", {
          autoClose: 3000,
        });
      }
      setIsLoading(false);
    };
  const onClickSignUp = () => navigate(routes.signup.path);
  return (
    <div className="py-8 2xl:py-12">
      {/* message top */}
      <div className="mr-16 2xl:mr-28">
        <p className="flex justify-end text-sm">
          Don't have an account?&nbsp;
          <span
            className=" text-primary text-sm font-medium cursor-pointer"
            onClick={onClickSignUp}
          >
            Sign Up!
          </span>
        </p>
      </div>

      {/* headline */}
      <div className="mt-16 flex flex-col justify-center items-center">
        <h2 className="text-black text-4xl font-semibold leading-10">
          Welcome Back
        </h2>
        <h2 className="text-black text-lg font-normal leading-7">
          Login into your account
        </h2>
      </div>

      {/* Login Form */}
      <div className="flex flex-col justify-center items-center mt-6 w-full px-4">
        <form
          className="flex flex-col gap-5 w-full max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          {[
            { name: "Email", key: "email", placeholder: "Email" },
            { name: "Password", key: "password", placeholder: "Password" },
          ].map((field) => (
            <div key={field.key}>
              <Controller
                name={field.key as FieldKeys}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputField
                    type={field.key === "password" ? "password" : "text"}
                    value={value}
                    onChange={onChange}
                    id={value}
                    name={field.name}
                    placeholder={field.placeholder}
                    customInputClass="w-full md:w-[400px]"
                  />
                )}
              />

              {field.key in errors && (
                <p className="text-red-500 text-sm">
                  {errors[field.key as keyof typeof errors]?.message}
                </p>
              )}
            </div>
          ))}

          <Button
            buttonType="submit"
            customClass="flex justify-center item-center font-semibold text-base text-gray-900 !py-0 "
            disabled={isLoading}
          >
            <div className="flex items-center justify-center relative min-w-48 min-h-12">
              {isLoading ? <Loader mode="container" /> : "Log In"}
            </div>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
