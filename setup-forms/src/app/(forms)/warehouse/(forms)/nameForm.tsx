"use client"

import { useForm } from "react-hook-form";
import { useFormState } from "@/components/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation"

type TFormValues = {
  SHOP_NAME: string,
  SHOP_DESC: string
};

export default function NameForm() {
  const router = useRouter();
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form className="flex flex-col gap-4 text-gray-700" onSubmit={handleSubmit(onHandleFormSubmit)} >
        <div className="flex gap-6 flex-col">
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="store-name" className="text-sm font-semibold">Warehouse Name</label>
                <input
                autoFocus
                id="store-name"
                {...register("SHOP_NAME")}
                className="border h-11 px-4 rounded-md focus:outline-indigo-500 text-base"
                required={true}
                />
            </div>
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="store-desc" className="text-sm font-semibold">Warehouse Description</label>
                <textarea
                    id="store-desc"
                    {...register("SHOP_DESC")}
                    rows={4}
                    className="border px-4 py-2 rounded-md focus:outline-indigo-500 text-base resize-none"
                    required={true}
                />
            </div>
        </div>
        <div className="w-full pt-10 flex flex-row gap-10 font-semibold">
            <button
                disabled={true}
                type="submit"
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