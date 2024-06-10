import { FC } from "react";
import { useNavigate } from "react-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../elements/Button";
import InputField from "../elements/InputField";
import Toggle from "../elements/Toggle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
});

type FieldKeys = "email" | "password";
const LoginForm: FC = () => {
    const navigate = useNavigate();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("data", data);
        reset();
        const userJSON = localStorage.getItem("user");
        if (userJSON) {
            try {
                const loggeduser = JSON.parse(userJSON) as {
                    email: string;
                    password: string;
                };
                if (
                    data.email === loggeduser.email &&
                    data.password === loggeduser.password
                ) {
                    navigate("/");
                } else {
                    alert("Wrong Email Or Password");
                }
            } catch (error) {
                console.error("Error parsing JSON from localStorage", error);
                alert("An error occurred while processing your request.");
            }
        } else {
            alert("No user found");
            navigate("/singup");
        }
    };

    return (
        <div className="w-[821px] h-[900px] bg-white">
            {/* message top */}
            <div className="flex justify-center items-center">
                <div className="w-full mt-12 mr-28">
                    <p className="flex text-sm font-normal justify-end  ">
                        Don’t have an account?&nbsp;
                        <span
                            className=" text-indigo-600 text-sm font-medium cursor-pointer"
                            onClick={() => {
                                navigate("/singup");
                            }}
                        >
                            Sign Up!
                        </span>
                    </p>
                </div>
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
            <div className="flex flex-col justify-center items-center mt-6">
                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {[
                        { name: "Email", key: "email", placeholder: "Email" },
                        {
                            name: "Password",
                            key: "password",
                            placeholder: "Password",
                        },
                    ].map((field) => (
                        <div key={field.key}>
                            <Controller
                                name={field.key as FieldKeys}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputField
                                        type={
                                            field.key === "password"
                                                ? "password"
                                                : "text"
                                        }
                                        customInputClass="w-100 h-16 px-6 py-7 h-18 text-[#5A5A5A] border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                                        value={value}
                                        onChange={onChange}
                                        id={value}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                    />
                                )}
                            />
                            {errors[field.key] && (
                                <p className="text-red-500 text-sm">
                                    {errors[field.key]?.message}
                                </p>
                            )}
                        </div>
                    ))}

                    {/* Toggle button  */}
                    <div className="flex justify-between">
                        <Toggle
                            id={"cn"}
                            name={"cn"}
                            initialChecked={false}
                            checkedOnLabel="Remember me"
                            checkedOffLabel="Remember me"
                            onChangeToggle={function ({
                                name,
                                checked,
                            }: {
                                name: string;
                                checked: boolean;
                            }): void {
                                console.log(
                                    ":: TODO => user data should be saved for future login",
                                    name,
                                    checked
                                );
                            }}
                        />
                        <p className="text-red-600 text-sm font-normal cursor-pointer">
                            Recover Password
                        </p>
                    </div>
                    <Button
                        customClass="flex justify-center item-center !bg-primary !text-black w-100 h-14 font-semibold text-sm"
                        buttonType="submit"
                        buttonVariant="primary"
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
