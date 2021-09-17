import { useContext } from 'react'
import { Context } from '../index'
import { Container, Form, Button, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

export const Auth = observer(() => {

    const { user } = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE

    const both = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        }catch(e){
            alert(e.response.data.message)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 700 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column align-items-center">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль..."
                    />
                    <Row className="mt-4 d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                        {
                            isLogin
                                ?
                                <div style={{ width: 'auto', padding: '0' }}>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                                </div>
                                :
                                <div style={{ width: 'auto', padding: '0' }}>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                                </div>
                        }
                        <Button onClick={both} style={{ width: 'auto' }}>{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})