import React from "react";
import { Route, Routes } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Routes><Route {...rest} render={(props) => <Component {...props} />} /></Routes>;
};

export default PublicRoute;