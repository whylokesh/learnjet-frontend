import Image from 'next/image'
 // import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ComplexNavbar } from './components/navbar/page';
import { DrawerWithNavigation } from './components/sidebarDrawer/page';
import { CarouselCustomNavigation } from './components/carousel/page';

config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <ComplexNavbar/>
      <DrawerWithNavigation/>
      <CarouselCustomNavigation/>
    </>
  );
}
