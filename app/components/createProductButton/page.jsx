"use client"
import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";

export function CreateProductDialog() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Button color="light-blue" variant="gradient" onClick={handleOpen}>Create a Product</Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
                style={{ userSelect: 'none' }}
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Course Details
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Title" size="lg" />
                        <Input label="Description" size="lg" />
                        <Input label="Price" type="number" size="lg" />

                        {/* <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div> */}

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" color="light-blue" onClick={handleOpen} fullWidth>
                            Create
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            You can edit these details afterwards also.
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}

