import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./Context/AuthProvider"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        // console.log(props);
        return user ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
