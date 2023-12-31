"use client"
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function FrequentlyAskedSection() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="p-9 py-9 bg-blue-gray-50/50">

            <Typography variant="h2" color="blue-gray" className="text-center my-6 text-2xl md:text-3xl lg:text-4xl">Frequently asked questions</Typography>


            <div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className="text-lg md:text-xl lg:text-2xl" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                    <AccordionBody className="text-sm md:text-sm lg:text-base">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className="text-lg md:text-xl lg:text-2xl" onClick={() => handleOpen(2)}>
                        How to use Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-sm lg:text-base">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className="text-lg md:text-xl lg:text-2xl" onClick={() => handleOpen(3)}>
                        What can I do with Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-sm lg:text-base">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader className="text-lg md:text-xl lg:text-2xl" onClick={() => handleOpen(4)}>
                        What can I do with Material Tailwind impact on society?
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-sm lg:text-base">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader className="text-lg md:text-xl lg:text-2xl" onClick={() => handleOpen(5)}>
                        What can I do with Material Tailwind in this page?
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-sm lg:text-base">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    );
}