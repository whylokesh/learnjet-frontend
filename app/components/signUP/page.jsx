import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export function SignInSignUp() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleSignInOpen = () => {
    setSignInOpen(true);
    setSignUpOpen(false);
  };

  const handleSignUpOpen = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  return (
    <>
   <Button onClick={handleSignInOpen} color="light-blue">Sign In</Button>

      <Dialog
        size="xs"
        open={signInOpen}
        handler={() => setSignInOpen(false)}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your Username and password to Sign In.
            </Typography>
            <Input label="Username" color="light-blue" size="lg" />
            <Input label="Password" color="light-blue" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" color="light-blue" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="light-blue" onClick={handleSignInOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
               
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleSignUpOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>

      <Dialog
        size="xs"
        open={signUpOpen}
        handler={() => setSignUpOpen(false)}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your information to Sign Up.
            </Typography>
            <Input label="Email" color="light-blue" size="lg" />
            <Input label="Username" color="light-blue" size="lg" />
            <Input label="Password" color="light-blue" size="lg" />
            <Input label="Mobile Number" color="light-blue" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="light-blue" onClick={handleSignUpOpen} fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Already have an account?
              <Typography
                as="a"
             
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleSignInOpen}
              >
                Sign in
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
