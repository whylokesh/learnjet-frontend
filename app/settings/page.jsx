import React from 'react'
import { ComplexNavbar } from '../components/navbar/page'
import { DrawerWithNavigation } from '../components/sidebarDrawer/page'
import UserSettings from '../components/userSettingsCard/page'

const Settings = () => {
  return (
    <>
    <ComplexNavbar/>
    <DrawerWithNavigation/>
    <UserSettings/>
    </>
  )
}

export default Settings