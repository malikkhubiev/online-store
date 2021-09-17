import React from 'react'
import { observer } from 'mobx-react-lite'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/consts"
import { useContext } from 'react'
import { Context } from '..'

export const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style={{ color: "white", textDecoration: 'none', fontSize: '25px' }} to={SHOP_ROUTE}>RMI online-store</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button style={{marginLeft: '10px'}} onClick={() => user.setIsAuth(false)} variant={"outline-light"} >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button onClick={() => user.setIsAuth(true)} variant={"outline-light"}>Авторизация</Button>
                    </Nav>}
            </Container>
        </Navbar>
    )
})