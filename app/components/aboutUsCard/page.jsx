"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

export function AboutUsCard() {
    return (
        <Card shadow={false} className="m-4 flex-col sm:flex:col md:flex-col lg:flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 lg:w-2/5 shrink-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    About us
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Like so many organizations these days, Autodesk is a company in
                    transition. It was until recently a traditional boxed software company
                    selling licenses. Yet its own business model disruption is only part
                    of the story. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consequatur beatae corporis cum ut quis enim, saepe ratione vero animi minus nostrum, distinctio labore eos.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque quaerat, consequatur delectus voluptate fugit cumque eveniet et exercitationem velit rerum eligendi animi.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore explicabo omnis, quae in cumque laudantium eligendi reprehenderit itaque sunt! <br /><br />

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet expedita excepturi mollitia unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae tempora rerum sint vel deserunt!
                </Typography>
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card >
    );
}