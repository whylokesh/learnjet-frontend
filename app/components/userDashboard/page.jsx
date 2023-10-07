"use client"
import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
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
import { CustomTable, SortableTable } from "../dataTable/page"; // Replace with your CustomTable component

const statisticsCardsData = [
    {
        color: "blue",
        icon: BanknotesIcon,
        title: "Today's Money",
        value: "$53k",
        footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
        },
    },
    {
        color: "pink",
        icon: UserIcon,
        title: "Today's Users",
        value: "2,300",
        footer: {
            color: "text-green-500",
            value: "+3%",
            label: "than last month",
        },
    },
    {
        color: "green",
        icon: UserPlusIcon,
        title: "New Clients",
        value: "3,462",
        footer: {
            color: "text-red-500",
            value: "-2%",
            label: "than yesterday",
        },
    },
    {
        color: "orange",
        icon: ChartBarIcon,
        title: "Sales",
        value: "$103,430",
        footer: {
            color: "text-green-500",
            value: "+5%",
            label: "than yesterday",
        },
    },
];

const sampleProjectsTableData = [
    {
        img: "project1.jpg",
        name: "Project A",
        members: [
            { img: "user1.jpg", name: "User 1" },
            { img: "user2.jpg", name: "User 2" },
        ],
        budget: "$10,000",
        completion: 90,
    },
    {
        img: "project2.jpg",
        name: "Project B",
        members: [
            { img: "user3.jpg", name: "User 3" },
            { img: "user4.jpg", name: "User 4" },
        ],
        budget: "$15,000",
        completion: 75,
    },
    {
        img: "project3.jpg",
        name: "Project C",
        members: [
            { img: "user5.jpg", name: "User 5" },
            { img: "user6.jpg", name: "User 6" },
        ],
        budget: "$8,000",
        completion: 100,
    },
];

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

const yourProjectColumns = [
    {
        Header: "Project Name",
        accessor: "name",
    },
    {
        Header: "Members",
        accessor: "members",
        Cell: ({ cell }) => (
            <>
                {cell.row.original.members.map((member) => (
                    <Tooltip key={member.name} content={member.name}>
                        <Avatar
                            src={member.img}
                            alt={member.name}
                            size="xs"
                            variant="circular"
                            className="cursor-pointer border-2 border-white"
                        />
                    </Tooltip>
                ))}
            </>
        ),
    },
    {
        Header: "Budget",
        accessor: "budget",
    },
    {
        Header: "Completion",
        accessor: "completion",
        Cell: ({ cell }) => (
            <div className="w-10/12">
                <Typography
                    variant="small"
                    className="mb-1 block text-xs font-medium text-blue-gray-600"
                >
                    {cell.row.original.completion}%
                </Typography>
                <Progress
                    value={cell.row.original.completion}
                    variant="gradient"
                    color={
                        cell.row.original.completion === 100 ? "green" : "blue"
                    }
                    className="h-1"
                />
            </div>
        ),
    },
];

export function UserDashboard() {
    return (
        <div className="pt-12 px-4 bg-blue-gray-50 bg-opacity-50" style={{userSelect: 'none'}}>
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
                    <StatisticsCard
                        key={title}
                        {...rest}
                        title={title}
                        icon={React.createElement(icon, {
                            className: "w-6 h-6 text-white",
                        })}
                        footer={
                            <Typography className="font-normal text-blue-gray-600">
                                <strong className={footer.color}>{footer.value}</strong>
                                &nbsp;{footer.label}
                            </Typography>
                        }
                    />
                ))}
            </div>

            <div className="mb-4 flex lg:flex-row md:flex-col sm:flex-col flex-col gap-5">
                <SortableTable />
                <Card className="w-full lg:w-1/3">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 p-6"
                    >
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Orders Overview
                        </Typography>
                        <Typography
                            variant="small"
                            className="flex items-center gap-1 font-normal text-blue-gray-600"
                        >
                            <ArrowUpIcon
                                strokeWidth={3}
                                className="h-3.5 w-3.5 text-green-500"
                            />
                            <strong>24%</strong> this month
                        </Typography>
                    </CardHeader>
                    <CardBody className="pt-0">
                        {sampleOrdersOverviewData.map(
                            ({ icon, color, title, description }, key) => (
                                <div key={title} className="flex items-start gap-4 py-3">
                                    <div
                                        className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === sampleOrdersOverviewData.length - 1
                                            ? "after:h-0"
                                            : "after:h-4/6"
                                            }`}
                                    >
                                        {React.createElement(icon, {
                                            className: `!w-5 !h-5 ${color}`,
                                        })}
                                    </div>
                                    <div>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="block font-medium"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            as="span"
                                            variant="small"
                                            className="text-xs font-medium text-blue-gray-500"
                                        >
                                            {description}
                                        </Typography>
                                    </div>
                                </div>
                            )
                        )}
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default UserDashboard;
