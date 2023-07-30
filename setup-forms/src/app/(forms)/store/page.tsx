"use client"

import Link from "next/link";
import MainForm from "./mainForm";

export default function Store() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-slate-50">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-start text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <div className="h-full pt-36">
                <div className="flex flex-col space-y-2 text-left">
                    <h1 className="text-5xl font-semibold tracking-tight">
                    Setup your Store
                    </h1>
                    <p className="text-base text-muted-foreground pt-3">
                    Enter the details to generate environment
                    </p>
                </div>
            </div>
          </div>
        </div>
        <div className="lg:p-8 text-gray-900">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px] gap-10">
            <MainForm />
            <p className="px-8 text-center text-sm text-muted-foreground sm:w-[350px]">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}