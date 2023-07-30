"use client";

import { useFormState } from "@/components/formContext";

export default function CodeBlock() {
    const { resetForm, formData } = useFormState();
    
    return (
        <>
            <div className="absolute left-0 top-0 w-[57rem] max-w-none mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6">
                <div className="relative overflow-hidden shadow-2xl flex h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] bg-slate-900/70 backdrop-blur ring-1 ring-inset ring-white/10">
                    <div className="relative w-full flex flex-col">
                        <div className="flex-none border-b border-slate-500/30">
                            <div className="flex items-center h-8 space-x-1.5 px-3">
                                <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                            </div>
                        </div>
                        <div className="relative min-h-0 flex-auto flex flex-col">
                            <div className="w-full flex-auto flex min-h-0 opacity-100">
                                <div className="w-full flex-auto flex min-h-0 overflow-auto">
                                    <div className="w-full relative flex-auto">
                                        <pre className="flex min-h-full text-sm leading-6">
                                            <div aria-hidden="true" className="hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none w-[3.125rem]">
                                                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20<br/>21<br/>22<br/>23<br/>24<br/>25<br/>26<br/>27
                                            </div>
                                            <code className="flex-auto relative block text-slate-50 overflow-auto p-4">
                                                <div>
                                                    {   
                                                        //@ts-ignore
                                                        Object.keys(formData).map((key, i) => {
                                                            return(
                                                                <div key={i} className="flex flex-row text-mono">
                                                                    <span> {`${key} = "${formData[key]}"`} </span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
  