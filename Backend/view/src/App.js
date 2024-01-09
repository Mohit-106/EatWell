import React from "react";
import Signup from "./Components/Login Page/Signup";
import Home from "./Components/Home Page/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Home Page/NavBar";
import Login from "./Components/Login Page/Login";
import ForgetPassword from "./Components/Login Page/ForgetPassword";
import ResetPassword from "./Components/Login Page/resetPassword";
import AllPlans from "./Components/Plan Page/AllPlans";
import AuthProvider from "./Components/Context/AuthProvider";
import Profile from "./Components/Profile Page/Profile";
import PlanDetail from "./Components/PlanDetail Page/PlanDetail";
import Payment from "./Components/Payment/payment";
import PrivateRoute from "./Components/PrivateRoute";
import Review from "./Components/Home Page/Review";
function App() {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <Router>
        <AuthProvider>
        <NavBar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profilePage">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgetPassword">
            <ForgetPassword />
          </Route>
          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <Route path="/PlanDetail">
            <PlanDetail/>
          </Route>
          <PrivateRoute exact path="/allPlans" component={AllPlans}/>
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/payment">
            <Payment 
            />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}
export default App;
