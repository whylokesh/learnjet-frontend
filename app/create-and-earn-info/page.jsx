import React from "react";
import CreateAndEarnInfoCard from "../components/earnandcreate/page";
import { ComplexNavbar } from "../components/navbar/page";
import { DrawerWithNavigation } from "../components/sidebarDrawer/page";

const CreateAndEarnInfo = () => {
  return (
    <>
      <ComplexNavbar />
      <DrawerWithNavigation />
      <CreateAndEarnInfoCard />
    </>
  );
};

export default CreateAndEarnInfo;
