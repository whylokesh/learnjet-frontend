"use client"
import React from "react";
import { CardDefault } from "../card/page";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import './fpstyle.css'

export function FeaturedProducts() {

    return (
        <div className="my-9 pb-4">

            <Typography variant="h2" color="blue-gray" className="text-center my-2">Most Popular</Typography>

            <div className="my-2">
                {/* <Typography variant="h4" color="blue-gray" className="text-left ml-6">Courses:</Typography> */}
                <div className=" p-3">
                    <div className="flex flex-row items-center justify-center flex-wrap gap-6">
                        {/* First Slide */}
                        <div className="">
                            <CardDefault />
                        </div>
                        <div className="">
                            <CardDefault />
                        </div>
                        <div className="">
                            <CardDefault />
                        </div>
                        <div className="">
                            <CardDefault />
                        </div>

                        {/* Second Slide */}
                        <div className="">
                            <CardDefault />
                        </div>
                        <div className="">
                            <CardDefault />
                        </div>
                        <div className="">
                            <CardDefault />
                        </div>
                        <div className="">
                            <CardDefault />
                        </div>

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
