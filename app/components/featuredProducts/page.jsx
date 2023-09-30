"use client"
import React from "react";
import { CardDefault } from "../card/page";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import './fpstyle.css'

export function FeaturedProducts() {

    return (
        <div className="my-9">

            <Typography variant="h2" color="blue-gray" className="text-center my-2">Most Popular</Typography>

            <div className="my-2">
                <Typography variant="h4" color="blue-gray" className="text-left ml-6">Courses:</Typography>
                <div className="overflow-x-auto p-3">
                    <div className="flex space-x-20">
                        {/* First Slide */}
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>

                        {/* Second Slide */}
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>

                    </div>
                </div>
                <div className="my-5 flex items-center justify-center">
                    <a href="#buttons-with-link" >
                        <Button variant="outlined">View all</Button>
                    </a>
                </div>

            </div>
            <div className="my-2">
                <Typography variant="h4" color="blue-gray" className="text-left ml-6">E-books:</Typography>
                <div className="overflow-x-auto p-3">
                    <div className="flex space-x-20">
                        {/* First Slide */}
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>

                        {/* Second Slide */}
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>

                    </div>
                </div>
                <div className="my-5 flex items-center justify-center">
                    <a href="#buttons-with-link" >
                        <Button variant="outlined">View all</Button>
                    </a>
                </div>

            </div>
            <div className="my-2">
                <Typography variant="h4" color="blue-gray" className="text-left ml-6">Template Bundles:</Typography>
                <div className="overflow-x-auto p-3">
                    <div className="flex space-x-20">
                        {/* First Slide */}
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>

                        {/* Second Slide */}
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>
                        <div className="min-w-[300px]">
                            <CardDefault />
                        </div>

                    </div>
                </div>
                <div className="my-5 flex items-center justify-center">
                    <a href="#buttons-with-link" >
                        <Button variant="outlined">View all</Button>
                    </a>
                </div>

            </div>
        </div>
    );
}
