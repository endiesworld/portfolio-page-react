import styled from 'styled-components' ;
import {ReactComponent as git} from '../../../assets/iconmonstr-github-3.svg' ;
import {ReactComponent as twitter} from '../../../assets/iconmonstr-twitter-5.svg' ;
import {ReactComponent as linkedin} from '../../../assets/iconmonstr-linkedin-5.svg' ;
import {Link} from 'react-scroll' ;


export const Navbar = styled.div`
    background-color:rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 10vh;
    position: fixed;
    z-index: 1;
    display: flex;
    color: white;
    justify-content: space-evenly;
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: tomato;
`;

export const SvgsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
`;

export const Git = styled(git)`
    border-radius: 100%;
    background-color: tomato;
`;

export const Twitter = styled(twitter)`
    border-radius: 100%;
    background-color: tomato;
` ;

export const Linkedin = styled(linkedin)`
    border-radius: 100%;
    background-color: tomato;
`;

export const Links = styled(Link)`
    padding-left: 30px;
    color: tomato;
    text-decoration: none;
    cursor: pointer;
`;

export const LinkItem = styled.div`
    padding-left: 30px;
    color: tomato;
    text-decoration: none;

`
