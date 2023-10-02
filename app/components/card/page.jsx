"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function CardDefault() {
    return (
        <Card className="mt-6 m-1 mt-10 lg:w-[22rem] md:w-[20rem]">
            <CardHeader color="blue-gray" className="relative lg:h-52 md:50">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between items-center">
                <Typography variant="h3" color="blue-gray" className="">
                    $199
                </Typography>
                <Button color="light-blue">Read More</Button>
            </CardFooter>
        </Card>
    );
}