import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Context } from '..'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

export const AppRouter = observer(() => {
    const { user } = useContext(Context)
    return(
        <Switch>
            {user.isAuth?authRoutes.map(route=>{
                return <Route key={route.path} path={route.path} component={route.Component} exact />
            }):''}
            {publicRoutes.map(route=>{
                return <Route key={route.path} path={route.path} component={route.Component} exact />
            })}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
})