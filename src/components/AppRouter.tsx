import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames, privateRoutes, publicRoutes } from '../router'

export default function AppRouter() {
    const auth = true
  return (
    auth ? 
    <Routes>
        {privateRoutes.map((route) => (
            <Route path={route.path} element={<route.element/>}/>
        ))}
        <Route path={RouteNames.LOGIN} element={<Navigate replace to={RouteNames.EVENT} />} />
    </Routes>
    :
    <Routes>
        {publicRoutes.map((route) => (
            <Route path={route.path} element={<route.element/>}/>
        ))}
        <Route path={'*'} element={<Navigate replace to={RouteNames.LOGIN} />} />
    </Routes>
  )
}
