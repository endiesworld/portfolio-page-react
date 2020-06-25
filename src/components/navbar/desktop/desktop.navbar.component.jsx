import React,{useState} from 'react'
import {Navbar, LinksContainer, SvgsContainer, Git, Twitter, Linkedin, Links, LinkItem} from './desktop.navbar.styled' ;



function DesktopNavbar() {
    const [navbarItems] = useState({
        items:['home', 'about','nugget','portfolio','contact']})
    return (
        <div>
            <Navbar>
                <LinksContainer>
                    { navbarItems.items.map(item => (
                        <Links key ={item} to={item} smooth={true} duration={1000} >
                            <LinkItem key ={item}>{item}</LinkItem> 
                        </Links>) )
                    }
                </LinksContainer>
                <SvgsContainer>
                    <a href="https://github.com/endiesworld" target="_blank" rel="noopener noreferrer" >
                        <Git></Git>
                    </a>    
                    <a href="https://twitter.com/ndubuisi_ok" target="_blank" rel="noopener noreferrer" >
                    <Twitter></Twitter>
                    </a>
                    <a href= 'https://www.linkedin.com/in/emmanuel-okoro-902bb963/' target="_blank" rel="noopener noreferrer">
                        <Linkedin></Linkedin>
                    </a>
                </SvgsContainer>
            </Navbar>
            
        </div>
    )
}

export default DesktopNavbar