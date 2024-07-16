import React, { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../elements/Button";
import InputField from "../../elements/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../../elements/Label";
import ImageUploader from "../../components/ImageUploader";
import Loader from "../Loader";
import { getBaseUrl } from "../../hooks/baseUrl";
import { toast } from "react-toastify";
import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../../constants/Global";
import { getFromStorage } from "../../utils/token";
import { routes } from "../../constants/Route";
import { useNavigate } from "react-router-dom";

interface FormData {
    role: string;
    name: string;
    email: string;
    designation: string;
    image: File | null;
}

const schema = yup.object().shape({
    role: yup.string().required("Role is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    designation: yup.string().required("Designation is required"),
});

type FieldKeys = "role" | "name" | "email" | "designation" | "image";

const CreateCommitteeForm: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [reqImage, setReqImage] = useState<null | File>(null);
    const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    const navigate = useNavigate();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            role: "",
            name: "",
            email: "",
            designation: "",
            image: null,
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (payload: FormData) => {
        setIsLoading(true);
        try {
            const url = getBaseUrl() + "/executive-committee/create";
            const newPayload = { ...payload, image: reqImage };

            await axios.post(url, newPayload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Committee Member Added Successfully", {
                autoClose: 1500,
            });
            reset();

            navigate(routes.alumniAssociationCommittee.path);
        } catch (error) {
            toast.error(error.message, {
                autoClose: 3000,
            });
        }
        setIsLoading(false);
    };

    const CreateMemberField = [
        {
            name: "Role",
            key: "role",
            placeholder: "Role",
        },
        {
            name: "Name",
            key: "name",
            placeholder: "Name",
        },
        {
            name: "Email",
            key: "email",
            placeholder: "Email",
        },
        {
            name: "designation",
            key: "designation",
            placeholder: "designation",
        },
    ];

    return (
        <div className="flex flex-col item-center justify-center bg-white">
            {/* headline */}
            <div className="mt-16 flex flex-col justify-center items-center">
                <h2 className="text-2xl text-black font-semibold">
                    Create a Committee Member
                </h2>
            </div>

            {/* Add Committee Member Form */}
            <div className="flex flex-col justify-center items-center mt-6">
                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {CreateMemberField.map((field) => (
                        <div key={field.key}>
                            <Controller
                                name={field.key as FieldKeys}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputField
                                        type={"text"}
                                        id={field.key}
                                        name={field.name}
                                        value={value as string}
                                        onChange={onChange}
                                        placeholder={field.placeholder}
                                        customInputClass="w-100 border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                                    />
                                )}
                            />
                            {errors[field.key] && (
                                <p className="text-red-500 text-sm">
                                    {errors[field.key]?.message}
                                    {toast.error(errors[field.key]?.message)}
                                </p>
                            )}
                        </div>
                    ))}
                    <Label
                        labelText="Upload member photo"
                        customClass="text-md"
                        htmlFor="image"
                    />
                    {/* Event Photo upload field  */}
                    <ImageUploader
                        // id="image"
                        onUpload={(file) => {
                            setReqImage(file.image);
                        }}
                        name="image"
                    />

                    {/* Submit Button */}

                    <Button
                        buttonType="submit"
                        customClass="flex justify-center item-center !bg-primary !text-black w-100 font-semibold text-sm !p-0"
                    >
                        <div className="flex items-center justify-center relative min-w-48 min-h-12">
                            {isLoading ? (
                                <Loader mode="container" />
                            ) : (
                                "Add Member"
                            )}
                        </div>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateCommitteeForm;
