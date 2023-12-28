"use client"
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
    Textarea,
    Chip,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
    Rating,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { SortableTable } from "../dataTable/page";
import { faL } from "@fortawesome/free-solid-svg-icons";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ClockIcon,
    CheckIcon,
    EllipsisVerticalIcon,
    ArrowUpIcon,
} from "@heroicons/react/24/outline";
import {
    BanknotesIcon,
    UserPlusIcon,
    UserIcon,
    ChartBarIcon,
} from "@heroicons/react/24/solid";
import { StatisticsCard } from "../statisticsCard/page"; // Replace with your StatisticsCard component
import { CustomTable } from "../dataTable/page"; // Replace with your CustomTable component

const sampleOrdersOverviewData = [
    {
        icon: CheckIcon,
        color: "text-green-500",
        title: "Completed Orders",
        description: "120 orders completed",
    },
    {
        icon: ClockIcon,
        color: "text-red-500",
        title: "Pending Orders",
        description: "5 orders pending",
    },
    {
        icon: CheckIcon,
        color: "text-green-500",
        title: "Returned Orders",
        description: "24 orders returned",
    },
];


// const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];
const TABLE_HEAD = ["Videos"];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        title: "Introduction to JavaScript Programming: Variables and Data Types",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        title: "Advanced React.js Concepts: State Management and Redux Integration",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        title: "Python for Data Science: Pandas, NumPy, and Data Visualization with Matplotlib",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        title: "Machine Learning and Deep Learning: Building Intelligent Applications",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        title: "Web Development with MERN Stack: Building Full-Stack Web Applications",
    },
];


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


function VideoTable() {

    return (
        <div className="w-full pb-4 border-b border-b-blue-gray-100 select-none">
            <div className="w-full overflow-y-scroll max-h-[35rem]">
                <table className="w-full table-auto text-left overflow-y-scroll">
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ img, title, email, job, org, online, date }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={title}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-6">
                                                {/* <Avatar src={img} alt={title} variant="square" className="h-20 w-6/12" size="xxl" /> */}
                                                <img
                                                    className="h-40 w-4/12 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-100/50 min-w-[8rem]"
                                                    src={img}
                                                    alt="nature image"
                                                />
                                                <div className="flex flex-col flex-wrap">
                                                    <div className="flex flex-col flex-wrap">
                                                        <div className="flex flex-wrap">
                                                            <Typography
                                                                variant=""
                                                                color="blue-gray"
                                                                className="font-normal"
                                                                style={{ maxWidth: '100%' }} // Add this style
                                                            >
                                                                {title}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {job}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70"
                                                >
                                                    {org}
                                                </Typography>
                                            </div>
                                        </td>
                                        {/* <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={online ? "online" : "offline"}
                                                    color={online ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td> */}
                                        {/* <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {date}
                                            </Typography>
                                        </td> */}
                                        {/* <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td> */}
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export function ProductMainCard() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="p-4 pt-10 bg-blue-gray-50/50" style={{ userSelect: 'none' }}>
            <Card className="w-full">
                <div className="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row gap-6 md:gap-3 lg:gap-3">


                    <CardHeader color="blue-gray" className="sm:2-11/12 sm:h-11/12 md:w-1/3 md:h-2/3 lg:w-1/3 lg:h-1/3">

                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />

                    </CardHeader>

                    <div className="w-full md:w-4/6 lg:w-4/6 flex items-center justify-centers md:pl-0 lg:pl-0 pl-6 pr-6">
                        <div className="flex flex-col w-full gap-1 md:gap-2 lg:gap-6">
                            <div className="w-full ">
                                <Typography variant="h2" color="blue-gray" className="md:text-[1.75rem] text-2xl lg:text-[2rem]">First Course Name</Typography>

                            </div>
                            <div className="w-full">
                                <Rating value={4} />
                            </div>
                            <Typography variant="h3" color="blue-gray" className="">$199</Typography>
                        </div>
                        <div className="w-[10rem]">

                            <Button variant="gradient" color="light-blue">Buy Now</Button>
                        </div>
                    </div>

                </div>

                <CardBody>

                    <div className="w-full mb-14 pb-8 ">
                        <Typography variant="paragraph" className="">
                            Material Tailwind is an easy to use components library for Tailwind CSS
                            and Material Design. It provides a simple way to customize your<br></br><br></br>
                            components, you can change the colors, fonts, breakpoints and everything
                            you need. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus voluptatibus provident ab vel ex dolores quam voluptates adipisci, incidunt enim iste repudiandae voluptatum dignissimos nisi id excepturi, labore expedita.
                            Material Tailwind is an easy to use components library for Tailwind CSS
                            and Material Design. It provides a simple way to customize your <br></br>
                            components, you can change the colors, fonts, breakpoints and everything
                            you need. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus voluptatibus provident ab vel ex dolores quam voluptates adipisci, incidunt enim iste repudiandae voluptatum dignissimos nisi id excepturi, labore expedita.
                            Material Tailwind is an easy to use components library for Tailwind CSS
                            and Material Design. It provides a simple way to customize your<br></br><br></br>
                            components, you can change the colors, fonts, breakpoints and everything
                            you need. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus voluptatibus provident ab vel ex dolores quam voluptates adipisci, incidunt enim iste repudiandae voluptatum dignissimos nisi id excepturi, labore expedita.
                            Material Tailwind is an easy to use components library for Tailwind CSS
                            and Material Design. It provides a simple way to customize your
                            components, you can change the colors, fonts, breakpoints and everything<br></br>
                            you need. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus voluptatibus provident ab vel ex dolores quam voluptates adipisci, incidunt enim iste repudiandae voluptatum dignissimos nisi id excepturi, labore expedita.
                        </Typography>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full md:w-full lg:w-2/3 mb-6">
                            <Accordion open={open === 0} icon={<Icon id={0} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(1)}>Modules</AccordionHeader>
                                <AccordionBody>
                                    <VideoTable />
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <Card className="h-[43rem] w-full border-l" shadow={false}>
                                <CardHeader
                                    variant="gradient"
                                    color="gray"
                                    className="mb-4 grid h-28 place-items-center min-h-[8rem]"
                                >
                                    <Typography variant="h3" color="white">
                                        User Reviews
                                    </Typography>
                                </CardHeader>
                                <CardBody className="overflow-y-auto">
                                    <div className="px-8 text-center border-b py-4">
                                        <div className="flex p-4 items-center justify-center gap-3">
                                            <Avatar
                                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                                alt="image"
                                                size="lg"
                                            />
                                            <div>
                                                <Typography variant="h6" className="my-2">
                                                    Tania Andrew
                                                </Typography>
                                                <Rating value={5} readonly className="mb-2" />
                                            </div>
                                        </div>
                                        <Typography variant="paragraph" color="blue-gray" className="mb-6 font-medium">
                                            &quot;This is an excellent product, the documentation is excellent and
                                            helped me get things done more efficiently.&quot;
                                        </Typography>
                                    </div>
                                </CardBody>

                            </Card>
                        </div>
                    </div>


                </CardBody>

                {/* <CardFooter className="pt-0 flex justify-between items-center">
                    <Typography variant="h3" color="blue-gray" className="">
                       Save all the changes from here...
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" color="light-blue" size="sm">
                            Cancel
                        </Button>
                        <Button color="light-blue" size="sm">
                            Save
                        </Button>
                    </div>
                </CardFooter> */}
            </Card>


        </div>
    );
}