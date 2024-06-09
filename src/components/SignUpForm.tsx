import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Button from "../elements/Button";
import InputField from "../elements/InputField";

interface FormData {
    fullName: string;
    StudentId: string;
    email: string;
    password: string;
    confirmPassword: string;
    certificate: FileList;
}

const SignUpForm: FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="w-[821px] h-[900px] bg-white">
            {/* message top */}
            <div className="flex justify-center items-center">
                <div className="w-full mt-12 mr-28">
                    <p className="flex text-sm font-normal justify-end">
                        have an account?&nbsp;
                        <span
                            className="w-14 h-4 text-deep-blue text-sm font-medium cursor-pointer"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Sign in!
                        </span>
                    </p>
                </div>
            </div>

            {/* headline */}
            <div className="mt-16 flex flex-col justify-center items-center">
                <h2 className="text-2xl text-black font-semibold">
                    Get Started With Contacts
                </h2>
                <h4 className="text-zinc-500 text-sm font-normal mt-3 leading-3">
                    Getting Started is easy
                </h4>
            </div>

            {/* Signup Form */}
            <div className="flex flex-col justify-center items-center mt-6">
                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {[
                        {
                            name: "FullName",
                            key: "fullName",
                            placeholder: "Full Name",
                        },
                        {
                            name: "StudentId",
                            key: "StudentId",
                            placeholder: "Student Id",
                        },
                        { name: "Email", key: "email", placeholder: "Email" },
                        {
                            name: "Password",
                            key: "password",
                            placeholder: "New password",
                        },
                        {
                            name: "ConfirmPassword",
                            key: "confirmPassword",
                            placeholder: "Confirm Password",
                        },
                    ].map((field) => (
                        <div key={field.key}>
                            <InputField
                                {...register(field.key)}
                                type={
                                    field.key
                                        .toLocaleLowerCase()
                                        .includes("password")
                                        ? "password"
                                        : field.key == "email"
                                        ? "email"
                                        : "text"
                                }
                                customInputClass="w-100 h-16 px-6 py-7 h-18 border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                                id={field.key}
                                name={field.name}
                                placeholder={field.placeholder}
                            />
                        </div>
                    ))}

                    {/* Certificate upload field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Certificate
                        </label>

                        <input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files)}
                            className="mt-2"
                        />
                    </div>

                    <Button
                        buttonType="submit"
                        customClass="flex justify-center item-center !bg-primary !text-black w-100 h-14 font-semibold text-sm"
                    >
                        Create Account
                    </Button>
                </form>
            </div>

            <div className="flex justify-center">
                <p className="text-zinc-600 text-sm font-normal mt-14">
                    By continuing you indicate that you read and agreed to the
                    Terms of Use
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;
