"use client"

import { useFormState } from "@/components/formContext";
import { useState, useEffect } from 'react' 
import Image from 'next/image'
import Link from 'next/link'
import { PiWarehouse, PiStorefrontDuotone } from 'react-icons/pi'
import ModalProvider from '@/components/modal'

export default function Home() {
  const [open, setOpen] = useState(false);
  const { resetForm } = useFormState();
  useEffect(()=>{
    resetForm();
  },[])

  return (
    <>
      <main className="bg-slate-50 h-screen overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 px-8" aria-label="Global">
          <div className="flex flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">QuickStore</span>
              {/* <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/> */}
            </a>
          </div>
          <Link href="https://github.com/Hadeso-0/QuickStore"
            className="text-sm font-medium leading-6 text-gray-900">Github
          </Link>
          <div className="flex flex-1 justify-end"> </div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
          </div>
        </div>
        <div className="mx-auto w-5/6 md:max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding. <a href="#" className="font-medium text-indigo-600"><span
                  className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Are you a small-scale bussiness and
              want to set-up custom <span className="font-bold text-indigo-600">E-COMMERCE</span> website?</h1>
            <p className="mt-6 text-md leading-8 text-gray-600">QuickStore is a template codebase for small-scale shop owners
              to get their products accessible to a much larger audience in just few minutes. Just fill-out the form given
              below. And bammm...💥 your <span className="text-black">E-warehouse is ready to deploy</span> 🎉</p>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
              <Link href="/warehouse"
                className="flex flex-row gap-2 items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <PiWarehouse className="text-2xl" />Setup Warehouse
                </Link>
              <button onClick={() => setOpen(true)}
                className="flex flex-row gap-2 items-center justify-center text-sm font-medium leading-6 text-gray-900">
                  <PiStorefrontDuotone className="text-2xl" />
                  Open a Store <span aria-hidden="true">→</span>
                </button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
          </div>
        </div>
      </div>
    </main>
    <ModalProvider isOpen={open} handleStatus={setOpen} />
  </>
  )
}
