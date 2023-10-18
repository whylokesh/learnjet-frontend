"use client"
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
    Chip,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
    Rating,

} from "@material-tailwind/react";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import card from "@material-tailwind/react/theme/components/card";


const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
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


function VideoTable() {
    return (
        <div className="w-full pb-4 border-b border-b-blue-gray-100 select-none">
            <div className="w-full overflow-y-scroll max-h-[25rem]">
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
                                            <div className="flex items-center gap-3">
                                                {/* <Avatar src={img} alt={title} variant="square" className="h-20 w-6/12" size="xxl" /> */}
                                                <img
                                                    className="h-20 w-6/12 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-100/50 min-w-[8rem]"
                                                    src={img}
                                                    alt="nature image"
                                                />
                                                <div className="flex flex-col flex-wrap">
                                                    <div className="flex flex-col flex-wrap">
                                                        <div className="flex flex-wrap">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                                style={{ maxWidth: '100%' }} // Add this style
                                                            >
                                                                {title}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {email}
                                                    </Typography>
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

export function ContenStreamerCard() {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="p-4 bg-blue-gray-50/50">
            <Card className="mt-6 w-full">

                <div className="flex w-full pr-8 flex-col md:flex-col lg:flex-row">

                    <CardHeader color="blue-gray" className="w-full lg:w-2/3 h-[15rem] md:h-[25rem] lg:h-[35rem]">

                        <iframe src="https://drive.google.com/file/d/1QRhMdcM52PhQuzp2LjHSMKmVXIcU7G4U/preview" allowFullScreen poster="http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg" className="w-full h-full rounded-lg" title="" ></iframe>

                    </CardHeader>

                    <div className="py-4 pl-8 md:pl-8 lg:pl-4 w-full md:w-full lg:w-1/3">
                        <Accordion open={open === 0} icon={<Icon id={0} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(1)}>Modules</AccordionHeader>
                            <AccordionBody>
                                <VideoTable />
                            </AccordionBody>
                        </Accordion>
                    </div>

                </div>
                <CardBody>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Introduction to JavaScript Programming: Variables and Data Types
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.


                        Introduction to JavaScript Programming: Variables and Data TypesIntroduction to JavaScript Programming: Variables and Data TypesIntroduction to JavaScript Programming: Variables and Data TypesIntroduction to JavaScript Programming: Variables and Data TypesIntroduction to JavaScript Programming: Variables and Data TypesIntroduction to JavaScript Programming: Variables and Data Types <br></br><br></br>


                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 w-full">
                    <div className="flex items-center justify-between">
                        <Rating value={4} />
                        <Button color="light-blue" variant="gradient">Next...</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}