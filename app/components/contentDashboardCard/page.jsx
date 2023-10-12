"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { SortableTable } from "../dataTable/page";
import { ContentManagementTable } from "../contenManagementTabled/page";

export function ContentDashboardCard() {
    return (
        <div className="p-4 pt-10 bg-blue-gray-50/50" style={{ userSelect: 'none' }}>
            <Card className="w-full">
                <div className="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row items-center">


                    <CardHeader color="blue-gray" className="sm:2-11/12 sm:h-11/12 md:w-1/3 md:h-2/3 lg:w-1/3 lg:h-1/3">

                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />

                    </CardHeader>

                    


                    <div className="w-full sm:w-full md:w-2/3 lg:w-[2/3] p-10 flex flex-col gap-6">


                        <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full gap-6 md:gap-3 lg:gap-3 ">

                            <div className="w-full md:w-3/4 lg:w-3/4">

                                <Input variant="standard" className="min-w-100px" label="Title" />

                            </div>


                            <div className="w-full md:w-2/4 lg:w-2/4">

                                <Input size="sm" variant="standard" className="" label="Price" />

                            </div>

                        </div>

                        <div className="">

                            <Textarea variant="standard" label="Description" />

                        </div>

                    </div>





                </div>

                {/* <div className="flex">

                    <div className="w-2/6">
                        <img
                            className="w-11/12 h-fit -mt-6 mx-4 rounded-lg object-cover object-center shadow-lg shadow-blue-gray-500/40"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                    </div>

                    <div className="flex flex-col w-4/6 p-4">

                        <div className="flex flex-row gap-3 w-full">

                            <div className="w-3/4">

                                <Input variant="standard" label="Title" />
                                
                            </div>

                            <div className="w-1/4">

                                <Input variant="standard" label="Price" />

                            </div>

                        </div>

                        <div className="mt-10 h-full">

                            <Textarea variant="standard" label="Description" />

                        </div>

                    </div>

                </div> */}

                <CardBody>


                    <ContentManagementTable />

                </CardBody>

                {/* <CardBody>
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
                </CardFooter> */}
            </Card>
        </div>
    );
}