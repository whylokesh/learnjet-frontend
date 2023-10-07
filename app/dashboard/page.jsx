import React from 'react'
import UserDashboard from '../components/userDashboard/page'
import { ComplexNavbar } from '../components/navbar/page'
import { DrawerWithNavigation } from '../components/sidebarDrawer/page'

const Dashboard = () => {
  return (
    <>
        <ComplexNavbar/>
        <DrawerWithNavigation/>
        <UserDashboard/>
    </>
  )
}

export default Dashboard