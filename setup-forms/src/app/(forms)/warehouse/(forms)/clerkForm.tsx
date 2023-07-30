"use client"

import { useForm } from "react-hook-form";
import { useFormState } from "@/components/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation"

type TFormValues = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string,
  CLERK_SECRET_KEY : string,
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: string,
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: string,
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string,
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string
};

export default function ClerkForm() {
  const router = useRouter();
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ 
      ...prev, 
      ...data,
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: "/sign-in",
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: "/sign-up",
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: "/",
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: "/" 
    }));
    onHandleNext();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onHandleFormSubmit)} >
        <div className="flex gap-6 flex-col">
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="clerk-publishable-key" className="text-sm font-semibold">Clerk Publishable Key</label>
                <input
                autoFocus
                id="clerk-publishable-key"
                {...register("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY")}
                className="border h-11 px-4 rounded-md focus:outline-indigo-500 text-base"
                required={true}
                />
            </div>
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="clerk-secret-key" className="text-sm font-semibold">Clerk Secret Key</label>
                <input
                id="clerk-secret-key"
                {...register("CLERK_SECRET_KEY")}
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