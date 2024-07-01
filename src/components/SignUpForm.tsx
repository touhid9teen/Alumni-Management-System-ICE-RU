import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Button from "../elements/Button";
import InputField from "../elements/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../elements/Label";
import ImageUploader from "./ImageUploader";

interface FormData {
    fullName: string;
    studentId: string;
    graduationYear: string;
    email: string;
    role: string;
    certificateOrIdCard: File | null;
    password: string;
    confirmPassword: string;
    certificate: FileList;
}

const schema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    studentId: yup.string().min(10).max(10).required(),
    graduationYear: yup
        .string()
        .min(4)
        .max(4)
        .required("Graduation Year is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")])
        .required("Password did not matched"),
    // certificate: yup
    //     .mixed()
    //     .required("A certificate is required")
    //     .test("fileSize", "File too large", (value) => {
    //         const fileList = value as FileList;
    //         return fileList && fileList[0] && fileList[0].size <= 1024 * 1024; // 1MB
    //     })
    //     .test("fileType", "Unsupported File Format", (value) => {
    //         const fileList = value as FileList;
    //         return (
    //             fileList &&
    //             fileList[0] &&
    //             ["image/jpeg", "image/png", "application/pdf"].includes(
    //                 fileList[0].type
    //             )
    //         );
    //     }),
});

type FieldKeys =
    | "fullName"
    | "studentId"
    | "graduationYear"
    | "email"
    | "role"
    | "certificateOrIdCard"
    | "password"
    | "confirmPassword";

const SignUpForm: FC = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState<string>("");
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: "",
            studentId: "",
            email: "",
            graduationYear: "",
            role: "",
            certificateOrIdCard: null,
            password: "",
            confirmPassword: "",
        },
    });
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("data", data);
        // Store value in localstorage
        localStorage.setItem("user", JSON.stringify(data));
        reset();
        navigate("/login");
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
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
                                navigate("/login");
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
                            name: "studentId",
                            key: "studentId",
                            placeholder: "Student Id",
                        },
                        {
                            name: "Graduation Year",
                            key: "graduationYear",
                            placeholder: "Graduation Year",
                        },

                        { name: "Email", key: "email", placeholder: "Email" },
                    ].map((field) => (
                        <div key={field.key}>
                            <Controller
                                name={field.key as FieldKeys}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputField
                                        type={
                                            field.key
                                                .toLocaleLowerCase()
                                                .includes("password")
                                                ? "password"
                                                : field.key == "email"
                                                ? "email"
                                                : "text"
                                        }
                                        customInputClass="w-100 border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                                        value={value as string}
                                        onChange={onChange}
                                        id={value as string}
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
                    <Label labelText="Are your a Student or Alumni?" />
                    <select
                        className="border px-3 py-2.5 rounded-lg "
                        value={selectedOption}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select Option</option>
                        <option value="student">Student</option>
                        <option value="alumni">Alumni</option>
                    </select>
                    {/* Certificate upload field  */}
                    {selectedOption !== "" && (
                        <ImageUploader
                            onUpload={(file) => {
                                console.log("file", file);
                            }}
                            name="Certificate"
                        />
                    )}

                    {[
                        {
                            name: "Password",
                            key: "password",
                            placeholder: "New password",
                        },
                        {
                            name: "confirmPassword",
                            key: "confirmPassword",
                            placeholder: "Confirm Password",
                        },
                    ].map((field) => (
                        <div key={field.key}>
                            <Controller
                                name={field.key as FieldKeys}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputField
                                        type={
                                            field.key
                                                .toLocaleLowerCase()
                                                .includes("password")
                                                ? "password"
                                                : field.key == "email"
                                                ? "email"
                                                : "text"
                                        }
                                        customInputClass="w-100 border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                                        value={value as string}
                                        onChange={onChange}
                                        id={value as string}
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

                    <Button
                        buttonType="submit"
                        customClass="flex justify-center item-center !bg-primary !text-black w-100 font-semibold text-sm"
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
