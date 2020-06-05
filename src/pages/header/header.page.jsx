import React,{useState} from 'react'
import  {Link} from 'react-router-dom'
import {ReactComponent as Git} from '../../assets/iconmonstr-github-3.svg'
import {ReactComponent as Twitter} from '../../assets/iconmonstr-twitter-5.svg'
import {ReactComponent as Linkedin} from '../../assets/iconmonstr-linkedin-5.svg'
import './header.styles.css'


function HeaderPage() {
    const [headerItems, updateHeaderItem] = useState({
        items:['home', 'about','nugget','portfolio','contact']})
    return (
        <div className='header'>
            <div className='link-holder'>
               { headerItems.items.map(item => (
               <Link key ={item}  className='item' to ={`/${item}`} ><div key ={item}  className='item'>{item}</div> </Link>) ) }
            </div>
            <div className='svg-holder'>
                <a href="https://github.com/endiesworld" >
                    <Git className='logo '/>
                </a>  
                <a href="https://twitter.com/ndubuisi_ok" >
                <Twitter className='logo '/>
                </a>
                <a href= 'https://www.linkedin.com/in/emmanuel-okoro-902bb963/' >
                <Linkedin className='logo '/>
                </a>
            </div>
        </div>
    )
}

export default HeaderPage
