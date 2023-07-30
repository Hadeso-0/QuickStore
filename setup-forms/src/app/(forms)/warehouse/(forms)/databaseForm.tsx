"use client"

import { useForm } from "react-hook-form";
import { useFormState } from "@/components/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation"

type TFormValues = {
  DATABASE_URL: string
};

export default function DatabaseForm() {
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
                <label htmlFor="database-url" className="text-sm font-semibold">Database URL</label>
                <input
                autoFocus
                id="database-url"
                {...register("DATABASE_URL")}
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