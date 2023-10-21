"use client"
import React from "react";
import { CardDefault } from "../card/page";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import './fpstyle.css'

export function FeaturedProducts() {

    return (
        <div className="py-9 lg:pb-4 bg-blue-gray-50/50">

<Typography variant="h2" color="blue-gray" className="text-center my-2 sm:my-5 px-20 lg:text-center md:text-left md:text-[1.75rem] text-2xl lg:text-[2rem]">Most Popular</Typography>


            <div className="my-2">

                <div className="p-4 lg:px-20 md:px-18">
                    <div className="flex flex-row items-center justify-start flex-nowrap gap-2 md:gap-4 lg:gap-6 overflow-x-auto">
                        {/* First Slide */}
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="">
                                <CardDefault />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center mb-10">
                    <a href="#buttons-with-link" >
                        <Button variant="outlined">View all</Button>
                    </a>
                </div>

            </div>
            <Typography variant="h2" color="blue-gray" className="text-center my-2 sm:my-5 lg:text-center md:text-left md:text-[1.75rem] text-2xl lg:text-[2rem]">Most Rated Courses</Typography>

            <div className="my-2">
                <div className="p-4  lg:px-20 md:px-18">
                    <div className="flex flex-row items-center justify-start flex-nowrap gap-2 md:gap-4 lg:gap-6  overflow-x-auto">
                        {/* First Slide */}
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="">
                                <CardDefault />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center">
                    <a href="#buttons-with-link" >
                        <Button variant="outlined">View all</Button>
                    </a>
                </div>

            </div>
           
        </div>
    );
}
