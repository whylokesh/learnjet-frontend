import React from 'react'
import { ContenStreamerCard } from '../components/contentStreamer/page'
import { ComplexNavbar } from '../components/navbar/page'
import { DrawerWithNavigation } from '../components/sidebarDrawer/page'

const StreamContent = () => {
    return (
        <>
            <ComplexNavbar/>
            <DrawerWithNavigation/>
            <ContenStreamerCard />
        </>

    )
}

export default StreamContent