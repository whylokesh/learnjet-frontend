"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";

export function ProfileBlogCard() {
    return (
        <Card
            shadow={false}
            className="relative grid h-[35rem] w-full max-w-[35rem] items-end justify-center overflow-hidden text-center"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
                <Avatar
                    size="xl"
                    variant="circular"
                    alt="tania andrew"
                    className="border-2 border-white"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <Typography variant="h5" className="my-4 text-gray-400 text-lg md:text-xl lg:text-2xl">
                    Tania Andrew
                </Typography>
                {/* <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                >
                    47k
                </Typography> */}
                <div className="mt-5 flex items-center justify-center">
                    <a href="#buttons-with-link" >
                        <Button variant="outlined" color="white" className="text-xs px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3">See More</Button>
                    </a>
                </div>
            </CardBody>
        </Card>
    );
}