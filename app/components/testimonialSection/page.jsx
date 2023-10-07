"use client"
import React from "react";
import { TestimonialCard } from "../testimonialCard/page";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function TestimonialSection() {
    return (
        <>
            {/* <div className="flex items-center justify-center mt-10">
                <hr className="w-4/5 text-center" />
            </div> */}

            <div className="bg-blue-gray-50/50 pt-10 text-center border-b pb-8">
                <Typography variant="h2" color="blue-gray" className="text-center mb-10">Testimonials</Typography>

                <div className="flex flex-wrap justify-center gap-8 m-4">
                    {/* First Testimonial Card */}
                    <div>
                        <TestimonialCard />
                    </div>
                    {/* Second Testimonial Card */}
                    <div>
                        <TestimonialCard />
                    </div>
                    {/* Third Testimonial Card */}
                    <div>
                        <TestimonialCard />
                    </div>
                    {/* Fourth Testimonial Card */}

                    {/* Add more Testimonial Cards as needed */}
                </div>
            </div>

        </>
    );
}
