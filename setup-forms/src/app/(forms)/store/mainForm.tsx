"use client"

import { useForm } from "react-hook-form";
import { useFormState } from "@/components/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation"

type TFormValues = {
  NEXT_PUBLIC_API_URL: string,
  NEXT_PUBLIC_STORE_NAME: string,
  NEXT_PUBLIC_STORE_DESC: string
};

export default function MainForm() {
  const router = useRouter();
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    console.log(formData)
    router.push(`/deploy?ref=store`)
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onHandleFormSubmit)} >
        <div className="flex gap-6 flex-col">
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="warehouse-url" className="text-sm font-semibold">Warehouse URL</label>
                <input
                id="warehouse-url"
                type="url"
                {...register("NEXT_PUBLIC_API_URL")}
                className="border h-11 px-4 rounded-md focus:outline-indigo-500 text-base"
                required={true}
                />
            </div>
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="store-name" className="text-sm font-semibold">Store Name</label>
                <input
                id="store-name"
                {...register("NEXT_PUBLIC_STORE_NAME")}
                className="border h-11 px-4 rounded-md focus:outline-indigo-500 text-base"
                required={true}
                />
            </div>
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="store-desc" className="text-sm font-semibold">Store Description</label>
                <textarea
                    id="store-desc"
                    {...register("NEXT_PUBLIC_STORE_DESC")}
                    rows={4}
                    className="border px-4 py-2 rounded-md focus:outline-indigo-500 text-base resize-none"
                    required={true}
                />
            </div>
        </div>
        <div className="w-full pt-10">
            <button
                type="submit"
                className="w-full text-center py-3 inline-block bg-indigo-600 font-medium text-white rounded-md"
                >
                Submit
            </button>
        </div>
    </form>
  );
}