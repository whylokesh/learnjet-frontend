"use client"
import React from "react";
import { ProfileBlogCard } from "../profileCard/page";
import { Typography } from "@material-tailwind/react";

export function PopularCreators() {
    return (
        <div className="my-9">
            <Typography variant="h2" color="blue-gray" className="text-center my-8">Popular Creators</Typography>

            <div className="m-4 overflow-x-auto">
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
