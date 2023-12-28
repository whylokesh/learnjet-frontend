"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const CreateAndEarnInfoCard = () => {
  return (
    <>
      <div className="px-4 py-2 bg-blue-gray-50/50">
        <Card className="mt-10 w-full h-full">
          <CardHeader color="blue-gray" className="relative h-fit">
            <video className="h-full w-full rounded-lg" controls>
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/854042116/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=c5671fd0c1b4e8b053454e030e63dabcc0fc548c75762c76911fa75b888d4575"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </CardHeader>
          <CardBody>
            <div className="">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <HomeIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <BellIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <BellIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <CurrencyDollarIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody>
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="light-blue">Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default CreateAndEarnInfoCard;
