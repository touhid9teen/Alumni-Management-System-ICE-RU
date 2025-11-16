import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Button from "../elements/Button";
import InputField from "../elements/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../elements/Label";
import ImageUploader from "./ImageUploader";
import Select, { SingleValue } from "react-select";

interface FormData {
  fullName: string;
  studentId: string;
  graduationYear: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
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
  role: yup.string().required("Role is required"),
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Password did not match"),
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

type FieldKeys = keyof FormData;

interface OptionType {
  value: string;
  label: string;
}

const SignUpForm: FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

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

  const handleSelectChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option as OptionType | null);
  };

  const options: OptionType[] = [
    { value: "student", label: "Student" },
    { value: "alumni", label: "Alumni" },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 md:p-10 rounded-lg">
      {/* message top */}
      <div className="flex justify-center items-center">
        <div className="w-full mt-6">
          <p className="flex text-sm font-normal justify-end">
            have an account?&nbsp;
            <span
              className="text-deep-blue text-sm font-medium cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign in!
            </span>
          </p>
        </div>
      </div>

      {/* headline */}
      <div className="mt-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl text-black font-semibold">
          Get Started With Contacts
        </h2>
        <h4 className="text-zinc-500 text-sm font-normal mt-2">
          Getting Started is easy
        </h4>
      </div>

      {/* Signup Form */}
      <div className="flex flex-col justify-center items-center mt-6">
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {[
            { name: "FullName", key: "fullName", placeholder: "Full Name" },
            { name: "studentId", key: "studentId", placeholder: "Student ID" },
            {
              name: "Graduation Year",
              key: "graduationYear",
              placeholder: "Graduation Year",
            },
            { name: "Email", key: "email", placeholder: "Email" },
          ].map((field) => (
            <div key={field.key} className="w-full">
              <Controller
                name={field.key as FieldKeys}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputField
                    type={field.key === "email" ? "email" : "text"}
                    customInputClass="w-full border-zinc-300 bg-white rounded-lg placeholder:text-sm"
                    value={value as string}
                    onChange={onChange}
                    id={value as string}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                )}
              />
              {field.key in errors && (
                <p className="text-red-500 text-sm">
                  {errors[field.key as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}

          <Label labelText="Are you a Student or Alumni?" />

          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="w-full border rounded-lg"
                value={selectedOption}
                onChange={(option) => {
                  handleSelectChange(option);
                  field.onChange(option?.value);
                }}
                options={options}
                placeholder="Select an Option"
              />
            )}
          />

          {selectedOption && (
            <ImageUploader
              onUpload={(file) => console.log("file", file)}
              name="Certificate"
            />
          )}

          {[
            { name: "Password", key: "password", placeholder: "New Password" },
            {
              name: "confirmPassword",
              key: "confirmPassword",
              placeholder: "Confirm Password",
            },
          ].map((field) => (
            <div key={field.key} className="w-full">
              <Controller
                name={field.key as FieldKeys}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputField
                    type="password"
                    customInputClass="w-full border-zinc-300 bg-white rounded-lg placeholder:text-sm"
                    value={value as string}
                    onChange={onChange}
                    id={value as string}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                )}
              />
              {errors[field.key as keyof FormData] && (
                <p className="text-red-500 text-sm">
                  {errors[field.key as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}

          <Button
            buttonType="submit"
            customClass="w-full flex justify-center items-center bg-primary text-white font-semibold text-sm py-3 rounded-md"
          >
            Create Account
          </Button>
        </form>
      </div>

      <p className="text-zinc-600 text-sm font-normal mt-10 text-center">
        By continuing you indicate that you read and agreed to the Terms of Use
      </p>
    </div>
  );
};

export default SignUpForm;
