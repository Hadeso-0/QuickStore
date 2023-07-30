"use client"

import { useForm } from "react-hook-form";
import { useFormState } from "@/components/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation"

type TFormValues = {
  STRIPE_API_KEY: string,
  STRIPE_WEBHOOK_SECRET: string
};

export default function StripeForm() {
  const router = useRouter();
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    console.log(formData)
    router.push(`/deploy?ref=warehouse`)
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onHandleFormSubmit)} >
        <div className="flex gap-6 flex-col">
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="stripe-api-key" className="text-sm font-semibold">Stripe API key</label>
                <input
                autoFocus
                id="stripe-api-key"
                {...register("STRIPE_API_KEY")}
                className="border h-11 px-4 rounded-md focus:outline-indigo-500 text-base"
                required={true}
                />
            </div>
            <div className="flex gap-1 w-full flex-col">
                <label htmlFor="stripe-webhook-secret" className="text-sm font-semibold">Stripe webhook secret</label>
                <input
                autoFocus
                id="stripe-webhook-secret"
                {...register("STRIPE_WEBHOOK_SECRET")}
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
                Submit
            </button>
        </div>
    </form>
  );
}