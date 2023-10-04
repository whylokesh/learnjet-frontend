import React from 'react'
import UserProfile from '../components/userProfile/page'
import { ComplexNavbar } from '../components/navbar/page'
import { DrawerWithNavigation } from '../components/sidebarDrawer/page'
import { FooterWithSocialLinks } from '../components/footer/page'

const Profile = () => {
  return (
    <>
      <ComplexNavbar />
      <DrawerWithNavigation />
      <UserProfile />
      <FooterWithSocialLinks/>
    </>
  )
}

export default Profile