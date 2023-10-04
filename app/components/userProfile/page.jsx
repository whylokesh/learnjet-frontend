"use client"
import React from 'react';
import { CardDefault } from '../card/page';
import { Typography, Button } from "@material-tailwind/react";

const UserProfile = () => {
    return (
        <div className="mx-2 py-2 border-b">
            <div className="bg-white rounded-lg">
                {/* Profile Header */}
                <div className="bg-cover bg-center bg-no-repeat rounded-lg p-4 md:p-8 lg:p-12 xl:p-16 h-40 lg:h-96 md:h-72 flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://64.media.tumblr.com/a628671585da20ab6277e7fe036e16d7/tumblr_pfhsg9Opc91uibr8q_1280.png")' }}>
                    <img
                        src="https://s1-www.textcontrol.com/application-1.5843.71412/img/blog/author/gunnar-giffey.jpg"
                        alt="Profile"
                        className="w-20 h-20 lg:w-60 lg:h-60 md:w-40 md:h-40 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg mx-auto"
                    />
                    {/* <h1 className="text-2xl lg:text-4xl font-semibold text-white text-center mt-2">Username</h1> */}
                </div>

                {/* Profile Navigation */}
                <div className="flex flex-col justify-center items-center py-4 border-b">

                    <Typography variant="h4" color="blue-gray" className="text-center my-3">User's Full Name</Typography>

                    <div className="flex flex-wrap justify-center space-x-4">
                        <Typography variant="lead" color="blue-gray" className="text-center text-base">@whyusername</Typography>
                        <Typography variant="lead" color="blue-gray" className="text-center text-base">4.3 Ratings</Typography>
                        <Typography variant="lead" color="blue-gray" className="text-center text-base">4 Products</Typography>

                    </div>

                    {/* User Bio */}
                    <Typography variant="paragraph" color="blue-gray" className="text-center my-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget hendrerit nisi.  </Typography>
                </div>


                {/* User Content */}
                <div className="flex flex-wrap justify-center gap-2 my-4">
                    {/* Sample Content Items */}
                    {/* You can map through the user's content and display them here */}
                    <CardDefault />
                    <CardDefault />
                    <CardDefault />
                    <CardDefault />

                </div>
                    <div className="my-6 flex items-center justify-center">
                        <a href="#buttons-with-link" >
                            <Button variant="outlined">View all</Button>
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default UserProfile;
