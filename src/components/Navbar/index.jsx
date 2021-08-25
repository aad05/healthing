import React from 'react'
import {Header,Container, LogoWrapper, Menu, activeStyle} from './style'
import Logo from '../../assets/imgs/logo.png'
import {navbar} from '../../utils/Navbar'
import { useHistory } from 'react-router-dom'

export  default () =>{
    const history = useHistory()
    return(
        <Header>
            <Container>
                <LogoWrapper onClick={()=>history.push('/home')} >
                <LogoWrapper.Icon src={Logo} />
                <LogoWrapper.Title >HEALTHING</LogoWrapper.Title>
                </LogoWrapper>
            <Menu>
                {
                    navbar.map(({title, path,id})=>{
                        return(
                            <Menu key={id}>
                            <Menu.Title to={path} activeStyle={activeStyle} >{title}</Menu.Title>
                            </Menu> 
                        )
                    })
                }
            </Menu>
            </Container>
        </Header>
    )
}