"use client"
import React from "react";
import { ProfileBlogCard } from "../profileCard/page"; 
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function PopularCreators() {
    return (
        <>
        {/* <div className="flex items-center justify-center">
        <hr className="w-4/5 text-center" />
        </div> */}
        <div className="my-9">
            <Typography variant="h2" color="blue-gray" className="text-center my-8">Popular Creators</Typography>

            <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {/* First Creator Card */}
                <div>
                    <ProfileBlogCard />
                </div>
                {/* Second Creator Card */}
                <div>
                    <ProfileBlogCard />
                </div>
                {/* Third Creator Card */}
                <div>
                    <ProfileBlogCard />
                </div>
                {/* Fourth Creator Card */}
                <div>
                    <ProfileBlogCard />
                </div>

                {/* Add more Creator Cards as needed */}
            </div>
        </div>
        </>
    );
}
