import React from 'react'
import styled from 'styled-components'
import { Header, Logo } from './style'
import   Navbar from  './Navbar'

function Layout() {
    return (
        <Header>
            <Logo> Logo </Logo>
            <Navbar />     
        </Header>
    )
}

export default Layout;