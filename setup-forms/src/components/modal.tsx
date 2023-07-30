"use client"

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineExclamationTriangle } from 'react-icons/hi2'
import Link from 'next/link';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

export default function ModalProvider({isOpen, handleStatus} : {
    isOpen: boolean,
    handleStatus: Dispatch<SetStateAction<boolean>>
}) {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
    {/* @ts-ignore */}
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleStatus}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                      <HiOutlineExclamationTriangle className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      {/* @ts-ignore */}
                      <Dialog.Title as="h3" className="text-base font-medium leading-6 text-gray-900">
                        Is your Warehouse setup?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Is your Warehouse hosted? If not make sure, to deploy your warehouse first.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Link
                    href="/store"
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                    onClick={() => handleStatus(false)}
                  >
                    Open a store
                  </Link>
                  <Link
                    href="/warehouse"
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                        handleStatus(false);
                    }}
                    ref={cancelButtonRef}
                  >
                    Open warehouse
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
