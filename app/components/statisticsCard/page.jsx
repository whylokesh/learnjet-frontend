"use client"
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({ color, icon, title, value, footer }) {
    // Define custom CSS classes for different color variants
    const colorClasses = {
        blue: "bg-blue-500",
        gray: "bg-gray-500",
        green: "bg-green-500",
        // Add more color variants as needed
    };

    return (
        <Card>
            <CardHeader
                variant="gradient"
                color={color} // Default to blue if color is not specified
                className="h-16 w-16 flex items-center justify-center"
            >
                {icon}
            </CardHeader>
            <CardBody className="p-4 text-left">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography variant="h4" color="blue-gray">
                    {value}
                </Typography>
            </CardBody>
            {footer && (
                <CardFooter className="border-t border-blue-gray-200 p-4">
                    {footer}
                </CardFooter>
            )}
        </Card>
    );
}

StatisticsCard.defaultProps = {
    color: "blue",
    footer: null,
};

StatisticsCard.propTypes = {
    color: PropTypes.oneOf(["blue", "gray", "green"]), // Define your color variants here
    icon: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    value: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

export default StatisticsCard;
