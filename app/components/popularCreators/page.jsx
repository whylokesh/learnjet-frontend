"use client"
import React from "react";
import { ProfileBlogCard } from "../profileCard/page";
import { Typography } from "@material-tailwind/react";

export function PopularCreators() {
    return (
        <div className="py-9 p-4 md:p-6 lg:p-8 bg-blue-gray-50/50">
            <Typography variant="h2" color="blue-gray" className="text-center my-8 text-2xl md:text-3xl lg:text-4xl">Popular Creators</Typography>

            <div className="overflow-x-auto">
                <div className="flex flex-nowrap space-x-4 w-[80rem] lg:w-full">
                    {/* Creator Cards */}
                    <ProfileBlogCard />
                    <ProfileBlogCard />
                    <ProfileBlogCard />
                    <ProfileBlogCard />
                    {/* Add more Creator Cards as needed */}
                </div>
            </div>
        </div>
    );
}
