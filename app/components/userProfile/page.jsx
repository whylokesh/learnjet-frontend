"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,


    TabsBody,
    TabPanel,

    Input,
    Textarea,
    Chip,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import React from 'react';
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import { CardDefault } from '../card/page';

const UserProfile = () => {

    function TabsWithIcon() {
        const data = [
            {
                label: "Course",
                value: "course",
                icon: Square3Stack3DIcon,
                desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
            },
            {
                label: "Reviews",
                value: "profile",
                icon: UserCircleIcon,
                desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
            },
            {
                label: "Settings",
                value: "settings",
                icon: Cog6ToothIcon,
                desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
            },
        ];
        return (
            <Tabs value="dashboard">
                <TabsHeader className="">
                    {data.map(({ label, value, icon }) => (
                        <Tab key={value} value={value}>
                            <div className="flex items-center gap-2">
                                {React.createElement(icon, { className: "w-5 h-5" })}
                                {label}
                            </div>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className="flex flex-col md:flex-row lg:flex-row flex-wrap gap-1 py-3 justify-center">
                    {/* {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))} */}

                    <CardDefault />
                    <CardDefault />
                    <CardDefault />
                    <CardDefault />
                    <CardDefault />
                    <CardDefault />
                    <CardDefault />
                    <CardDefault />
                </TabsBody>
            </Tabs>
        );
    }



    return (
        <div className="p-4 bg-blue-gray-50/50 select-none" >

            <Card className="mt-6 w-full">

                <div className="flex border-b pb-4 md:pb-6 lg:pb-10">


                    <CardHeader color="transparent" shadow={false} className="w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[29rem] lg:h-[29rem]">
                        {/* <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        /> */}
                        {/* <Avatar src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="avatar" size="xxl" /> */}

                        <img
                            className="h-full w-full rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                    </CardHeader>


                    <div className="w-1/2 flex flex-col gap-1 p-2 md:p-6 lg:p-10 justify-center">

                        <div className="flex flex-col items-start">

                            <Typography variant="h1" className="text-xl sm:text-3xl md:text-4xl lg:text-6xl">Full Name</Typography>

                            <div className="flex flex-row flex-wrap">

                                <Typography variant="lead" className="text-xs sm:text-sm md:text-lg lg:text-2xl m-1">
                                    @username
                                </Typography>
                                <Typography variant="lead" className="text-xs sm:text-sm md:text-lg lg:text-2xl m-1">
                                    4.5 stars
                                </Typography>
                                <Typography variant="lead" className="text-xs sm:text-sm md:text-lg lg:text-2xl m-1">
                                    14 Course
                                </Typography>

                            </div>

                            <Typography variant="lead" className="text-xs sm:text-sm md:text-lg lg:text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta harum atque mollitia?</Typography>

                        </div>

                    </div>

                </div>
                <CardBody>

                    <TabsWithIcon />



                    {/* <Typography variant="h5" color="blue-gray" className="mb-2">
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography> */}
                </CardBody>
                {/* <CardFooter className="pt-0">
                    <Button>Read More</Button>
                </CardFooter> */}
            </Card>

        </div>
    );
};

export default UserProfile;
