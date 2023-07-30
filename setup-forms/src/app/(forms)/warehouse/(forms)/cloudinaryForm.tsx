"use client"

import { useForm } from "react-hook-form";
import { useFormState } from "@/components/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation"

type TFormValues = {
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string,
  NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: string
};

export default function CloudinaryForm() {
  const router = useRouter();
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onHandleFormSubmit)} >
        <div className="flex gap-6 flex-col">
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="cloudinary-cloud-name" className="text-sm font-semibold">Cloudinary cloud name</label>
                <input
                autoFocus
                id="cloudinary-cloud-name"
                {...register("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME")}
                className="border h-11 px-4 rounded-md focus:outline-indigo-500 text-base"
                required={true}
                />
            </div>
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="cloudinary-preset-name" className="text-sm font-semibold">Cloudinary preset name</label>
                <input
                autoFocus
                id="cloudinary-preset-name"
                {...register("NEXT_PUBLIC_CLOUDINARY_PRESET_NAME")}
                className="border h-11 px-4 rounded-md focus:outline-indigo-500 text-base"
                required={true}
                />
            </div>
        </div>
        <div className="w-full pt-10 flex flex-row gap-10 font-semibold">
            <button
                onClick={() => onHandleBack()}
                type="button"
                className="font-semibold w-full text-center py-3 inline-block bg-white text-gray-900 rounded-md"
                >
                Prev
            </button>
            <button
                type="submit"
                className="font-semibold w-full text-center py-3 inline-block bg-indigo-600 text-white rounded-md"
                >
                Next
            </button>
        </div>
    </form>
  );
}