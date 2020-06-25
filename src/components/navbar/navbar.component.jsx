import React,{useEffect, useState} from 'react' ;
import DesktopNavbar from './desktop/desktop.navbar.component' ;
import MobileNavbar from './mobile/mobile.navbar.component' ;

function Navbar() {

let [screenWidth, setWidth] = useState(window.innerWidth ) ;

let resizeListener = () => setWidth(window.innerWidth)

useEffect(() => {
   console.log(screenWidth)
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener); }
    
},[])
          
    return (
        <div className = 'bar'>
            {
                screenWidth >= 1000 ? <DesktopNavbar /> : < MobileNavbar />
            }
            
        </div>
    )
}

export default Navbar ;
