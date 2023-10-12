import React from 'react'
import { ContentDashboardCard } from '../components/contentDashboardCard/page'
import { ComplexNavbar } from '../components/navbar/page'
import { DrawerWithNavigation } from '../components/sidebarDrawer/page'

const ContentDashboard = () => {
  return (
    <>
      <ComplexNavbar />
      <DrawerWithNavigation />
      <ContentDashboardCard />
    </>
  )
}

export default ContentDashboard