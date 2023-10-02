import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export function TestimonialCard() {
    return (
        <Card color="transparent" shadow={false} className="w-full max-w-[30rem]">
            <div className="flex flex-col items-center p-4 rounded-lg">
                <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                />
                <Typography variant="h5" color="blue-gray" className="text-center mb-2">
                    Tania Andrew
                <Typography color="blue-gray" className="mb-4">
                    Frontend Lead @ Google
                </Typography>
                <CardBody className="">
                    <Typography>
                        "I found the solution to all my design needs from Creative Tim. I use
                        them as a freelancer in my hobby projects for fun! And it's really
                        affordable, very humble guys !!!"
                    </Typography>
                </CardBody>
                </Typography>
                <div className="flex items-center gap-2 text-yellow-700">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
            </div>
        </Card>
    );
}
