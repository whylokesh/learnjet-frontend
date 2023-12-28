"use client";
import React from "react";
import { useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { ComplexNavbar } from "../navbar/page";
import { DrawerWithNavigation } from "../sidebarDrawer/page";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Drawer,
    IconButton,
    CardHeader,
} from "@material-tailwind/react";
import {
    BanknotesIcon,
    CreditCardIcon,
    LockClosedIcon,
} from "@heroicons/react/24/solid";
import { Avatar } from "@material-tailwind/react";

const UserSettings = () => {
    const [openBottom, setOpenBottom] = React.useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);
    const data = [
        {
            label: "UserProfile",
            value: "UserProfile",
            icon: Square3Stack3DIcon,
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
            content: (
                <Card color="transparent" shadow={false}>
                    <div className="flex  items-center h-full">
                        {" "}
                        {/* Added container */}
                        <div className="w-full">
                            <form className="mt-8 mb-2 w-full">
                                <div className="mb-1 flex flex-col gap-6 w-full">
                                    <Avatar
                                        size="xxl" // Increase size to "xl"
                                        alt="avatar"
                                        src="https://images.pexels.com/photos/18705786/pexels-photo-18705786/free-photo-of-a-woman-in-a-white-top-and-sunflowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                        className="mx-auto border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
                                        onClick={openDrawerBottom}
                                        style={{ cursor: "pointer" }} // Add mx-auto to center
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Username
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="Change your username"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                                        variant="standard"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Name
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="Change your name"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                                        variant="standard"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Bio
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="Change Your bio"
                                        variant="standard"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Phone number
                                    </Typography>
                                    <Input
                                        type="number"
                                        size="lg"
                                        placeholder="Enter your Number"
                                        variant="standard"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=" bottom-0 left-0 right-0 p-5 flex justify-end">
                        <Button>Save</Button>
                    </div>
                </Card>
            ),
        },
        {
            label: "AccountDetails",
            value: "AccountDetails",
            icon: UserCircleIcon,
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
            content: (
                <Card color="transparent" shadow={false}>
                    <div className="flex  items-center h-full">
                        {" "}
                        <div className="w-full">
                            <form className="mt-8 mb-2 w-full">
                                <div className="mb-1 flex flex-col gap-6 w-full">

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Bank Name
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="Change Bank name"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                                        variant="standard"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Card Details
                                    </Typography>

                                    <Input
                                        maxLength={19}
                                        variant="standard"
                                        onChange={(event) => setCardNumber(event.target.value)}
                                        icon={
                                            <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                                        }
                                        placeholder="0000 0000 0000 0000"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Account number
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="0000 0000 0000 0000"
                                        variant="standard"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        UPI Number
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="Change Your bio"
                                        variant="standard"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Address
                                    </Typography>
                                    <Input
                                        type="Address"
                                        size="lg"
                                        placeholder="Enter your Number"
                                        variant="standard"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=" bottom-0 left-0 right-0 p-5 flex justify-end">
                        <Button>Save</Button>
                    </div>
                </Card>
            ),
        },
    ];

    return (
        <>  
            <div className="p-5">
                <Tabs value="UserProfile">
                    <TabsHeader>
                        {data.map(({ label, value, icon }) => (
                            <Tab key={value} value={value}>
                                <div className="flex items-center gap-2">
                                    {React.createElement(icon, { className: "w-5 h-5" })}
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, content }) => (
                            <TabPanel key={value} value={value}>
                                {content}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>

            <Drawer
                placement="bottom"
                open={openBottom}
                onClose={closeDrawerBottom}
                className="p-4"
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Material Tailwind
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerBottom}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="mb-4 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <Typography variant="body1">Change Profile Picture</Typography>
                </div>
                <div className="mb-4 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <Typography variant="body1">Edit Profile Picture</Typography>
                </div>
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <Typography variant="body1">View Profile Picture</Typography>
                </div>
            </Drawer>
        </>
    );
};

export default UserSettings;