"use client";

import Link from "next/link";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import CodeBlock from "./codeBlock";
import { useSearchParams } from 'next/navigation';
import { useFormState } from '@/components/formContext';
import { redirect } from "next/navigation";
import { PiClipboardDuotone } from "react-icons/pi";
import toast from 'react-hot-toast';

const CopyClipboard =({content} : {
    content : string
}) => {
    return ( 
        <button onClick={() => {
                toast.success('Copied to Clipboard!', {
                  duration: 4000,
                  position: 'bottom-center',
                  style: {
                    borderRadius: '0.375rem',
                    margin: 0,
                    backgroundColor: "rgba(0, 19, 63, 0.196)",
                    padding: '0.5rem',
                    fontWeight: '500',
                    color: 'rgb(248, 250, 252)'
                  }
                })
                navigator.clipboard.writeText(content)
            }}
            className="rounded-md m-0 bg-slate-900/10 ring-1 ring-inset p-2 ring-white/10 flex flex-row items-center justify-center font-medium text-slate-50">
            <PiClipboardDuotone className="text-lg pointer-events-none" />
        </button>
    )
}

export default function Deploy() {
    const searchParams = useSearchParams();
    const ref = searchParams.get('ref');
    const { resetForm, formData } = useFormState();
    const toString = (obj : Object) => Object.entries(obj).map(([k, v]) => `${k}: ${v}`).join('\n');
    
    console.log(ref);
    console.log(formData);
    //@ts-ignore
    // if(Object.entries(formData).length === 0 || ref != 'store' || ref != 'warehouse' ){
    //     console.log("redirecting")
    //     redirect("/");
    // }

    return (
      <div className="bg-gray-600 h-screen overflow-hidden">
        <div className="mx-auto max-w-screen-xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 pl-6 pt-12 shadow-xl sm:rounded-xl sm:pl-16 md:pt-12 lg:flex lg:gap-x-20 lg:pl-24">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute right-1/2 top-0 -z-10 h-[64rem] w-[64rem] translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-mr-20 lg:right-1/2 lg:mr-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#d675cc" />
                  <stop offset={0.5} stopColor="#571bfd" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#bb4fed" />
                  <stop offset={1} stopColor="#d730f8" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:pt-28 lg:text-left">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to Launch?
              </h2>
              {/* <h3 className="text-2xl font-medium pt-2 tracking-tight text-white sm:text-3xl">
                {"Let's finalize the setup."}
              </h3> */}
              <p className="mt-4 text-lg leading-7 text-gray-200">
                Copy the settings on the right, & paste them on website linked below.
              </p>
              <p className="mt-8 text-sm leading-2 text-white "> 
                Launch My Site → Create Git Repository → Configure Project → Required Environment Variable 
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link href="/" className="text-sm font-semibold leading-6 text-white">
                    <span aria-hidden="true">←</span>{" "}Return Home
                </Link>
                <a
                  target='_blank'
                  href={
                    ref === 'store' 
                    ? `https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHadeso-0%2Fclient-store.git&env=PASTE_HERE` 
                    : `https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHadeso-0%2Fwarehouse-admin.git&env=PASTE_HERE` 
                  }
                  className="flex flex-row gap-2 items-center justify-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <PiRocketLaunchDuotone className="text-2xl text-gray-900"/>  Launch My Site 
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8 w-full">
              <div className="absolute top-10 right-0 w-full flex flex-row justify-end">
                  <div className="self-end w-14 p-2 z-50">
                      <CopyClipboard content = {toString(formData)}/>
                  </div>
              </div>
              <CodeBlock />
            </div>
          </div>
        </div>
      </div>
    )
  }
  