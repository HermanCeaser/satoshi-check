import React from "react";
import { motion } from "framer-motion";

const SkeletonLoader = () => {
    return (
        <>
            {[...Array(10)].map((_, i) => (
                <motion.tr
                    key={i}
                    className="w-full px-4 py-2  m-4 animate-pulse border-b border-gray-200 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <td className="relative px-7 sm:w-12 sm:px-6">
                        <div className="flex items-center gap-3">
                            <div className="size-3 md:size-4 rounded-sm bg-gray-200"></div>
                        </div>
                    </td>
                    <td className="relative px-3 sm:w-12 sm:px-6">
                        <div className="flex items-center gap-3">
                            <div className="size-4 md:size-6 rounded bg-gray-200"></div>
                        </div>
                    </td>
                    
                    <td className="whitespace-nowrap px-3 py-4">
                        <div className="flex items-center gap-3">
                            <div className="size-8 md:size-10 rounded-full bg-gray-100"></div>
                            <div className="h-6 w-40 rounded bg-gray-100 hidden md:table-cell"></div>
                        </div>
                    </td>
                    
                    {/* Role */}
                    <td className="whitespace-nowrap px-3 py-3">
                        <div className="inline-flex mr-2 gap-3 flex-wrap mt-2">
                            <span className="h-6 w-16 rounded bg-gray-100"></span>
                        </div>
                    </td>

                    {/* Status */}
                    <td className="whitespace-nowrap px-3 py-3">
                        <div className="h-6 w-16 rounded bg-gray-100"></div>
                    </td>
                    
                    <td className=" hidden md:table-cell whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-start gap-3">
                            <div className="h-6 w-32 rounded-sm bg-gray-100"></div>
                        </div>
                    </td>
                    
                    <td className="hidden md:table-cell">
                        <div className="flex justify-start gap-3">
                            <div className="h-6 w-32 rounded-sm bg-gray-100"></div>
                        </div>
                    </td>
                    
                    <td className="hidden md:table-cell ">
                        <div className="flex justify-start gap-3">
                            <div className="h-6 w-32 rounded-sm bg-gray-100"></div>
                        </div>
                    </td>
                    
                    <td className="hidden sm:table-cell whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-start gap-3">
                            <div className="h-12 w-48 rounded-sm bg-gray-100"></div>
                        </div>
                    </td>
                </motion.tr>
            ))}
        </>
    );
};

export default SkeletonLoader;
